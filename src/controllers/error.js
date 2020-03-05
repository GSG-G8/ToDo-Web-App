const { join } = require('path');

const clientError = (req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', '404.html'));
};

const serverError = (err, req, res, next) => {
  res.status(err.status || 500).json({ msg: err.msg, status: err.status });
};


module.exports = {
  clientError,
  serverError,
};
