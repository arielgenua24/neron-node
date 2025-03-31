const boom = require('@hapi/boom');

function errorHandler(err, req, res, next) {
  // Si el error ya es un Boom error
  if (boom.isBoom(err)) {
    const { output } = err;
    return res.status(output.statusCode).json(output.payload);
  }

  // Si es un error inesperado
  console.error('❌ Error no manejado:', err);
  return res.status(500).json({
    statusCode: 500,
    error: 'Internal Server Error',
    message: err.message || 'Algo salió mal...',
  });
}

module.exports = errorHandler;
