import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://noyrtmbhwjsrblwgpjpu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5veXJ0bWJod2pzcmJsd2dwanB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2NzcyMzAsImV4cCI6MjAxNTI1MzIzMH0.XXq1WpXLi15CxTSqX6D3NGL_02kkg_zxKclGoRuWS40';
export const supabase = createClient(supabaseUrl, supabaseKey);