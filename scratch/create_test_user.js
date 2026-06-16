const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const parts = line.split('=');
  if (parts.length >= 2) {
    env[parts[0].trim()] = parts.slice(1).join('=').trim();
  }
});

const supabaseUrl = env.SUPABASE_URL;
const supabaseServiceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: { persistSession: false }
});

async function main() {
  const testEmail = 'inicis-test@transfercheck.com';
  const testPassword = 'transfercheck123!';

  console.log(`Creating test user: ${testEmail}...`);
  try {
    const { data, error } = await supabase.auth.admin.createUser({
      email: testEmail,
      password: testPassword,
      email_confirm: true,
      user_metadata: {
        nationality: 'Korea',
        birthdate: '1995-01-01'
      }
    });

    if (error) {
      console.error('Error creating user:', error.message);
      return;
    }

    console.log('Successfully created test user!');
    console.log(`Email: ${data.user.email}`);
    console.log(`Password: ${testPassword}`);
  } catch (err) {
    console.error('Execution error:', err);
  }
}

main();
