
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://xqwkezmdvmmdbbaefjcs.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhxd2tlem1kdm1tZGJiYWVmamNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM3MzM2NjMsImV4cCI6MjAwOTMwOTY2M30.wZx5JehA9ETNuAJjvPbvbjAzbPUaXHFkaywRVUVox-4"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase