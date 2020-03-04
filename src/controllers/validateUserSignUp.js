const Joi = require('@hapi/joi');


module.exports = (req, res, next) => {
  const schema = Joi.object().keys({
    fname: Joi.string().alphanum().min(3).required(),
    lname: Joi.string().alphanum().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(8).required(),
  });
  const newUserData = {
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    password: req.body.psw,
  };
  const { error } = schema.validate(newUserData);
  if (error) {
    error.status = 400;
    error.msg = 'invalide input';
  } else {
    next();
  }
};
