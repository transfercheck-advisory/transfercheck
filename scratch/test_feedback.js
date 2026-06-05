const http = require('http');

const data = JSON.stringify({
  message: "This is a live test from Antigravity to verify the pure TLS socket SMTP email delivery."
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/feedback',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Body: ${body}`);
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.write(data);
req.end();
