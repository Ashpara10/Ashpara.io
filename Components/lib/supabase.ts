import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY = String(process.env.SUPABASE_KEY);
const SUPABASE_URL = "https://dfpdxhkdkjjmumvsxyzd.supabase.co";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
export default supabase;
