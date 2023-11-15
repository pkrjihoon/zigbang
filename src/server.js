const express = require('express');
const cors = require('cors');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = 3001;

app.prepare().then(() => {
  const server = express();

  server.use(cors());

  server.get('/api/time', (req, res) => {
    console.log('Request received for /api/time');
    const currentTime = new Date().toISOString();
    res.json({ currentTime });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${port}`);
  });
});
