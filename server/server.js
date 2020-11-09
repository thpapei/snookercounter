const express = require('express');
const path = require('path');

const port = process.env.PORT || 3002;

const app = express();
const publicPath = path.join(__dirname, '..', 'dist');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server running on port: ', port);
});