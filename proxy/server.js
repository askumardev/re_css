const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Only allow requests from a specific origin (default localhost:5002).
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:5002';

// CORS middleware: only expose CORS headers for the allowed origin.
app.use((req, res, next) => {
  const origin = req.get('origin');
  if (origin === ALLOWED_ORIGIN) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
  next();
});

app.get('/api/restaurants', async (req, res) => {
  // Require Origin header matching ALLOWED_ORIGIN (ensures request comes from the app on port 5002).
  const origin = req.get('origin');
  if (origin !== ALLOWED_ORIGIN) {
    console.warn('Blocked request from origin:', origin);
    return res.status(403).json({ error: 'Forbidden origin' });
  }
  try {
    const targetUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&page_type=DESKTOP_WEB_LISTING';
    const response = await axios.get(targetUrl, {
      headers: {
        // Use a realistic browser user-agent and headers to avoid naive blocks
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        Accept: 'application/json, text/plain, */*',
        Referer: 'https://www.swiggy.com/',
        Origin: 'https://www.swiggy.com',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      timeout: 10000,
    });
    res.json(response.data);
  } catch (err) {
    console.error('Proxy fetch error:', err.message || err);
    // Include upstream status and data when available for debugging
    if (err.response) {
      console.error('Upstream status:', err.response.status);
      console.error('Upstream data:', err.response.data?.toString?.() || err.response.data);
    }
    res.status(502).json({ error: 'Failed to fetch upstream resource' });
  }
});

app.listen(PORT, () => {
  console.log(`CORS proxy running on http://localhost:${PORT}`);
});
