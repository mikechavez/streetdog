function errorHandler(err, request, response, next) {
  return response.status(err.status || 500).json( {
    error: {
      message: err.message || "Oops! Something went wrong, dog."
    }
  });
}

module.exports = errorHandler;
