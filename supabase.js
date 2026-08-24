const SUPABASE_URL = "https://jmkwekgpsogbdpkjqqyx.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_b8t3rG-3ErqKmrhdTT0qYA_IOFHFLKP";

if (!window.supabase) {
  console.error("❌ Supabase SDK pa chaje.");
  throw new Error("Supabase SDK introuvable.");
}

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

console.log("✅ Supabase Client OK");

