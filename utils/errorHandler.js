const Error = (res, message, status) => {
  const msg = message || "Internal Server Error";
  const statusCode = status || 500;

  res.status(statusCode).json({
    error: msg,
  });
};

export default Error;
