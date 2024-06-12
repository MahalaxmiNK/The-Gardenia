import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wrdnlghvpawsujkoxoev.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyZG5sZ2h2cGF3c3Vqa294b2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxMTI3NDAsImV4cCI6MjAzMzY4ODc0MH0.7G0J3UvjUMc8j2MJkl6-qQ-ktG58pE2GKULpdcWk-Jc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
