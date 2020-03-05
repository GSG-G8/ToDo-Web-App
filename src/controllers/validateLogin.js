const Joi = require('@hapi/joi');

module.exports = (req, res, next) => {
  const userData = {
    email: req.body.email,
    password: req.body.password,
  };

  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  const { error, value } = schema.validate(userData);
  if (error) {
    error.status = 400;
    error.msg = 'invalide input';
    next(error);
  } else {
    req.logInData = value;
    next();
  }
};
