const crypto = require('crypto');
const fetch = require('node-fetch');

const secret = "5e02f60f66e37151fbe0cdec4385a4c572cd9bd0031cfe3984f3ee7659e2f878";
const payload = JSON.stringify({ _type: "galleryImage" });
const signature = crypto.createHmac('sha256', secret).update(payload).digest('base64');
// Sanity header format: t=<timestamp>,v1=<signature>
const timestamp = Date.now();
const headerSignature = `t=${timestamp},v1=${signature}`;

fetch('http://localhost:3001/api/revalidate', {
  method: 'POST',
  body: payload,
  headers: {
    'Content-Type': 'application/json',
    'sanity-webhook-signature': headerSignature
  }
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
