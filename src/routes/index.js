const Router = require('express').Router();
const { test } = require('../controllers');

Router.get('/test', test);

module.exports = Router;
