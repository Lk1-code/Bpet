import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qdazqyeegbvdhjuwwgob.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkYXpxeWVlZ2J2ZGhqdXd3Z29iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMzkxODcsImV4cCI6MjAzMTcxNTE4N30.aR4mwm0yX_si6U4sc_xIFzOK43qg1pHq6eBB_95QhlE'
const supabase = createClient(supabaseUrl,supabaseKey);

export default{
    checkToken: async (token) => {
        const req = await fetch(supabase, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();        
        return json;
    },
    signIn: async (email, password) => {
        console.log("email", email);
        console.log("password", password);
        const req = await fetch(supabase, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const json = await req.json();        
        return json;
    },
    signUp: async (name, email, password) => {
        const req = await supabase
            .from("User")
            .insert({name:name,password:password,email:ema});
        console.log(req)
    },
};