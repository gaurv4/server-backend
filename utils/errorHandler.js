const Error = (res, message, status) => {
  const msg = message || "Internal Server Error";
  const statusCode = statusCode || 500;

  res.status(statusCode).json({
    msg: msg,
  });
};

export default Error;
