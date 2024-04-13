import Error from "../utils/errorHandler.js";

const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    const message = error.errors[0].message;
    Error(res, message, 400)
  }
};

export default validate;
