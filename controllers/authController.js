import { userModel } from "../models/register.js";
import bcrypt from "bcrypt";
import Error from "../utils/errorHandler.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const userExixts = await userModel.findOne({ email });

  if (userExixts) {
    Error(res, "user already exixts", 400);
  } else {
    try {
      const userCreated = await userModel.create({
        name: name,
        email: email,
        password: password,
      });
      res.status(201).json({
        msg: "registration successfully",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
    } catch (error) {
      Error(res, error.message, 400);
    }
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  let user = await userModel.findOne({ email });

  if (!user) {
    Error(res, "User not found", 404);
  } else {
    try {
      const isVerify = await bcrypt.compare(password, user.password);

      if (isVerify) {
        res.status(202).json({
          msg: "login successfully",
          token: await user.generateToken(),
          userId: user._id.toString(),
        });
      } else {
        Error(res, "invalid username or password", 401);
      }
    } catch (error) {
      Error(res, error, 400);
    }
  }
};
