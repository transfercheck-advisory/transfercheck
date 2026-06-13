-- 1. Create public profiles table linked to auth.users
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  plan TEXT DEFAULT 'Free' CHECK (plan IN ('Free', 'Pro', 'Premium')),
  essay_credits INTEGER DEFAULT 0,
  nationality TEXT DEFAULT 'Other',
  birthdate DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies
CREATE POLICY "Allow public read access to profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Allow users to update their own profiles" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- 2. Create user_roadmaps table for cross-device syncing of user study state
CREATE TABLE IF NOT EXISTS public.user_roadmaps (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL UNIQUE,
  target_slots JSONB DEFAULT '[]'::jsonb,      -- University/major slots selected
  gpa NUMERIC(3, 2) DEFAULT 0.00,
  completed_credits INTEGER DEFAULT 0,
  course_history JSONB DEFAULT '[]'::jsonb,     -- Course history details
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.user_roadmaps ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies
CREATE POLICY "Allow users to read their own roadmaps" ON public.user_roadmaps FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Allow users to insert their own roadmaps" ON public.user_roadmaps FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Allow users to update their own roadmaps" ON public.user_roadmaps FOR UPDATE USING (auth.uid() = user_id);

-- 3. Automate Profile Creation on Signup via Database Trigger
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, plan, essay_credits, nationality, birthdate)
  VALUES (
    new.id, 
    new.email, 
    'Free', 
    0, 
    COALESCE(new.raw_user_meta_data->>'nationality', 'Other'),
    NULLIF(new.raw_user_meta_data->>'birthdate', '')::DATE
  );
  
  -- Also initialize an empty roadmap for the user
  INSERT INTO public.user_roadmaps (user_id, target_slots, gpa, completed_credits, course_history)
  VALUES (new.id, '[]'::jsonb, 0.00, 0, '[]'::jsonb);
  
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger definition
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
