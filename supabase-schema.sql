-- ============================================
-- Early Explorers CPD Academy - Database Schema
-- Supabase PostgreSQL Setup Script
-- Version: 1.0
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- USERS TABLE
-- ============================================
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role VARCHAR(50) NOT NULL CHECK (role IN ('unqualified', 'level_2_3', 'senior', 'admin')),
  room VARCHAR(50) CHECK (room IN ('baby', 'toddler', 'preschool', 'office', NULL)),
  date_of_birth DATE,
  hire_date DATE,
  profile_photo_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- MODULES TABLE
-- ============================================
CREATE TABLE modules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code VARCHAR(50) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  description TEXT,
  duration_minutes INTEGER,
  total_lessons INTEGER,
  pathway VARCHAR(50) CHECK (pathway IN ('all', 'unqualified', 'level_2_3', 'senior')),
  is_mandatory BOOLEAN DEFAULT false,
  renewal_months INTEGER,
  html_file VARCHAR(255) NOT NULL,
  icon_emoji VARCHAR(10),
  sort_order INTEGER,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- USER MODULE PROGRESS TABLE
-- ============================================
CREATE TABLE user_module_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  module_id UUID REFERENCES modules(id) ON DELETE CASCADE,
  status VARCHAR(50) DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'completed', 'overdue')),
  progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  lessons_completed INTEGER DEFAULT 0,
  started_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  due_date DATE,
  last_accessed_at TIMESTAMP WITH TIME ZONE,
  current_lesson INTEGER DEFAULT 1,
  time_spent_minutes INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, module_id)
);

-- ============================================
-- LESSON COMPLETIONS TABLE
-- ============================================
CREATE TABLE lesson_completions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  module_id UUID REFERENCES modules(id) ON DELETE CASCADE,
  lesson_number INTEGER NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  time_spent_seconds INTEGER,
  UNIQUE(user_id, module_id, lesson_number)
);

-- ============================================
-- QUIZ ATTEMPTS TABLE
-- ============================================
CREATE TABLE quiz_attempts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  module_id UUID REFERENCES modules(id) ON DELETE CASCADE,
  attempt_number INTEGER NOT NULL,
  score_percentage INTEGER NOT NULL,
  questions_correct INTEGER NOT NULL,
  questions_total INTEGER NOT NULL,
  passed BOOLEAN NOT NULL,
  time_taken_seconds INTEGER,
  answers_json JSONB,
  started_at TIMESTAMP WITH TIME ZONE NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- CERTIFICATES TABLE
-- ============================================
CREATE TABLE certificates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  module_id UUID REFERENCES modules(id) ON DELETE CASCADE,
  certificate_number VARCHAR(50) UNIQUE NOT NULL,
  issued_date DATE NOT NULL,
  expiry_date DATE,
  pdf_url TEXT,
  is_valid BOOLEAN DEFAULT true,
  revoked_at TIMESTAMP WITH TIME ZONE,
  revoked_reason TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- AUDIT LOG TABLE
-- ============================================
CREATE TABLE audit_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  action VARCHAR(100) NOT NULL,
  entity_type VARCHAR(50),
  entity_id UUID,
  details JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- NOTIFICATIONS TABLE
-- ============================================
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL,
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  action_url TEXT,
  read_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- INDEXES FOR PERFORMANCE
-- ============================================
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_modules_pathway ON modules(pathway);
CREATE INDEX idx_progress_user ON user_module_progress(user_id);
CREATE INDEX idx_progress_status ON user_module_progress(status);
CREATE INDEX idx_progress_due ON user_module_progress(due_date);
CREATE INDEX idx_certificates_user ON certificates(user_id);
CREATE INDEX idx_certificates_valid ON certificates(is_valid);
CREATE INDEX idx_audit_user ON audit_log(user_id);
CREATE INDEX idx_audit_created ON audit_log(created_at);

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_module_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_completions ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Users can view their own profile
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = id);

-- Users can update their own profile (limited fields)
CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE USING (auth.uid() = id);

-- Admins can view all users
CREATE POLICY "Admins can view all users" ON users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Everyone can view active modules
CREATE POLICY "Everyone can view modules" ON modules
  FOR SELECT USING (is_active = true);

-- Users can view their own progress
CREATE POLICY "Users can view own progress" ON user_module_progress
  FOR SELECT USING (auth.uid() = user_id);

-- Users can update their own progress
CREATE POLICY "Users can update own progress" ON user_module_progress
  FOR ALL USING (auth.uid() = user_id);

-- Admins can view all progress
CREATE POLICY "Admins can view all progress" ON user_module_progress
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Users can insert their own lesson completions
CREATE POLICY "Users can insert own completions" ON lesson_completions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can view their own completions
CREATE POLICY "Users can view own completions" ON lesson_completions
  FOR SELECT USING (auth.uid() = user_id);

-- Users can insert their own quiz attempts
CREATE POLICY "Users can insert own attempts" ON quiz_attempts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can view their own attempts
CREATE POLICY "Users can view own attempts" ON quiz_attempts
  FOR SELECT USING (auth.uid() = user_id);

-- Users can view their own certificates
CREATE POLICY "Users can view own certificates" ON certificates
  FOR SELECT USING (auth.uid() = user_id);

-- Admins can view all certificates
CREATE POLICY "Admins can view all certificates" ON certificates
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Users can view their own notifications
CREATE POLICY "Users can view own notifications" ON notifications
  FOR SELECT USING (auth.uid() = user_id);

-- Users can update their own notifications (mark as read)
CREATE POLICY "Users can update own notifications" ON notifications
  FOR UPDATE USING (auth.uid() = user_id);

-- Admins can view all audit logs
CREATE POLICY "Admins can view audit logs" ON audit_log
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================
-- FUNCTIONS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply update trigger to tables
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_modules_updated_at BEFORE UPDATE ON modules
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_progress_updated_at BEFORE UPDATE ON user_module_progress
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to calculate progress percentage
CREATE OR REPLACE FUNCTION calculate_progress_percentage()
RETURNS TRIGGER AS $$
DECLARE
  total_lessons INTEGER;
BEGIN
  -- Get total lessons for the module
  SELECT m.total_lessons INTO total_lessons
  FROM modules m
  WHERE m.id = NEW.module_id;
  
  -- Calculate percentage
  IF total_lessons > 0 THEN
    NEW.progress_percentage := (NEW.lessons_completed * 100) / total_lessons;
  END IF;
  
  -- Update status based on progress
  IF NEW.lessons_completed = total_lessons AND NEW.progress_percentage = 100 THEN
    NEW.status := 'completed';
    NEW.completed_at := NOW();
  ELSIF NEW.lessons_completed > 0 THEN
    NEW.status := 'in_progress';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply progress calculation trigger
CREATE TRIGGER calculate_progress BEFORE UPDATE ON user_module_progress
  FOR EACH ROW EXECUTE FUNCTION calculate_progress_percentage();

-- Function to auto-assign modules to new users based on pathway
CREATE OR REPLACE FUNCTION assign_modules_to_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Assign all modules that match user's pathway
  INSERT INTO user_module_progress (user_id, module_id, due_date)
  SELECT 
    NEW.id,
    m.id,
    CURRENT_DATE + INTERVAL '30 days'
  FROM modules m
  WHERE m.is_active = true
  AND (m.pathway = 'all' OR m.pathway = NEW.role);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply auto-assignment trigger
CREATE TRIGGER assign_modules_on_user_create AFTER INSERT ON users
  FOR EACH ROW EXECUTE FUNCTION assign_modules_to_user();

-- ============================================
-- SEED DATA - MODULES
-- ============================================
INSERT INTO modules (code, title, category, duration_minutes, total_lessons, pathway, is_mandatory, renewal_months, html_file, icon_emoji, sort_order) VALUES
('MH-01', 'Safe Moving & Handling in Early Years', 'Manual Handling', 35, 6, 'all', true, 12, 'moving-handling-module.html', '🙌', 1),
('SG-L1', 'Safeguarding Level 1 Refresher', 'Safeguarding', 25, 4, 'all', true, 12, 'safeguarding-module.html', '🛡️', 2),
('HS-01', 'Health & Safety Procedures (Setting-Specific)', 'Health & Safety', 30, 5, 'all', true, 12, 'health-safety-module.html', '❤️', 3),
('PP-01', 'Policies & Procedures Overview', 'Policies', 20, 3, 'all', true, 12, 'policies-module.html', '📖', 4),
('BH-01', 'Behaviour Approach at Early Explorers', 'Core Practice', 30, 4, 'all', true, 12, 'behaviour-module.html', '🌟', 5),
('GDPR-01', 'Confidentiality & GDPR', 'Professional Practice', 20, 3, 'all', true, 12, 'gdpr-module.html', '🔒', 6),
('PV-01', 'Prevent Duty Awareness', 'Safeguarding', 25, 3, 'unqualified', true, 36, 'prevent-module.html', '🚨', 7);

-- ============================================
-- SEED DATA - DEMO USERS (for testing)
-- ============================================
-- Note: In production, users will be created through Supabase Auth
-- These are just for initial setup/testing
INSERT INTO users (email, first_name, last_name, role, room, hire_date) VALUES
('admin@earlyexplorers.org', 'Admin', 'User', 'admin', 'office', '2020-01-01'),
('sarah.j@earlyexplorers.org', 'Sarah', 'Johnson', 'level_2_3', 'toddler', '2024-09-01'),
('emma.w@earlyexplorers.org', 'Emma', 'Williams', 'senior', 'preschool', '2023-01-15');

-- ============================================
-- VIEWS FOR REPORTING
-- ============================================

-- Compliance Report View
CREATE OR REPLACE VIEW compliance_report AS
SELECT 
  u.id as user_id,
  u.first_name,
  u.last_name,
  u.role,
  u.room,
  m.id as module_id,
  m.title as module_title,
  m.code as module_code,
  ump.status,
  ump.progress_percentage,
  ump.due_date,
  ump.completed_at,
  c.expiry_date as certificate_expiry,
  CASE 
    WHEN ump.status = 'completed' AND (c.expiry_date IS NULL OR c.expiry_date > CURRENT_DATE) THEN 'compliant'
    WHEN ump.due_date < CURRENT_DATE AND ump.status != 'completed' THEN 'overdue'
    WHEN c.expiry_date <= CURRENT_DATE + INTERVAL '30 days' THEN 'expiring_soon'
    ELSE 'in_progress'
  END as compliance_status
FROM users u
CROSS JOIN modules m
LEFT JOIN user_module_progress ump ON ump.user_id = u.id AND ump.module_id = m.id
LEFT JOIN certificates c ON c.user_id = u.id AND c.module_id = m.id AND c.is_valid = true
WHERE u.is_active = true
AND (m.pathway = 'all' OR m.pathway = u.role)
ORDER BY u.last_name, m.sort_order;

-- Dashboard Stats View
CREATE OR REPLACE VIEW dashboard_stats AS
SELECT 
  user_id,
  COUNT(*) FILTER (WHERE status = 'completed') as completed_count,
  COUNT(*) FILTER (WHERE status = 'in_progress') as in_progress_count,
  COUNT(*) FILTER (WHERE status = 'overdue' OR (due_date < CURRENT_DATE AND status != 'completed')) as overdue_count,
  COUNT(*) FILTER (WHERE status = 'not_started') as not_started_count,
  ROUND(AVG(progress_percentage)) as avg_progress
FROM user_module_progress
GROUP BY user_id;

-- ============================================
-- SETUP COMPLETE
-- ============================================
-- Next steps:
-- 1. Run this SQL in Supabase SQL Editor
-- 2. Configure Supabase Auth (email/password)
-- 3. Get your Supabase URL and anon key
-- 4. Update frontend with API integration
-- ============================================
