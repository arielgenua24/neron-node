// middlewares/validator.handler.js
const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property]; // body, params, query
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error.details.map(e => e.message).join(', ')));
    } else {
      next();
    }
  };
}

module.exports = validatorHandler;
