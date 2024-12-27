
// @ts-ignore
// import { createClient } from "@supabase/supabase-js";
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"

const supabaseUrl = 'https://kzwdakzslxxhcpybijsi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6d2Rha3pzbHh4aGNweWJpanNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA5ODYyNzgsImV4cCI6MjA0NjU2MjI3OH0.klC2p_fJBYp-94IIu5sA9E48RzpXrXXy77v4dHX9hIM';
const supabase = createClient(supabaseUrl, supabaseKey);
console.log(supabase)


export default supabase;