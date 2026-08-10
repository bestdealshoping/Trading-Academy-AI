const SUPABASE_URL =
    "https://jmkwekgpsogbdpkjqqyx.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_b8t3rG-3ErqKmrhdTT0qYA_IOFHFLKP";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );