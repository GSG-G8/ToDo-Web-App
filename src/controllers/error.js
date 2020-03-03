const { join } = require('path');

const clientError = (req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', '404.html'));
};

const serverError = (err, req, res, next) => {
  res.status(500).json({ msg: 'server crashed' });
};


module.exports = {
  clientError,
  serverError,
};
