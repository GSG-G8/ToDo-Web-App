const { join } = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const { authorizeUser } = require('./controllers');

const app = express();

app.set('PORT', process.env.PORT || 5000);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get(['/', '/main.html'], authorizeUser, (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'main.html'));
});

app.use(express.static(join(__dirname, '..', 'public')));
app.use(routes);

module.exports = app;
