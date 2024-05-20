import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

SUPABASE_URL="https://qdazqyeegbvdhjuwwgob.supabase.co"
SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkYXpxeWVlZ2J2ZGhqdXd3Z29iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMzkxODcsImV4cCI6MjAzMTcxNTE4N30.aR4mwm0yX_si6U4sc_xIFzOK43qg1pHq6eBB_95QhlE"


export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})