import { userModel } from "../models/register.js";
import Error from "../utils/errorHandler.js";

export const getAllUsers = async (req, res) => {
  const data = await userModel.find({}, { password: 0 });

  if (!data[0]) {
    Error(res, "Empty, Users not Found in Database", 204);
  } else {
    res.status(200).json(data);
  }
};
