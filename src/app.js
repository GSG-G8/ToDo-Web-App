const express = require('express');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const { client, server } = require('./controllers/error');

const app = express();

app.set('PORT', process.env.PORT || 3030);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.use(client);
app.use(server);


module.exports = app;
