import { createClient } from '@supabase/supabase-js';

// TODO: Replace these with your actual Supabase project credentials
const supabaseUrl = 'https://YOUR_SUPABASE_PROJECT_URL.supabase.co';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
