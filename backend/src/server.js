const https = require('https');

require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 8000;

const server = https.createServer(app);

async function startServer() {
  
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
