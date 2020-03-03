const path = require('path');

const client = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', '..', 'public', '404.html'));
};

const server = (err, req, res, next) => {
  res.status(500).send('<h1>500 Server Error</h1>');
};


module.exports = {
  client,
  server,
};
