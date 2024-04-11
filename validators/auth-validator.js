import zod from "zod";

export const signupSchema = zod.object({
  name: zod
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 characters" })
    .max(20, { message: "Name must not be more than 20 characters" }),

  email: zod
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(35, { message: "Email must not be more than 35 characters" }),

  password: zod
    .string({ required_error: "Password is required" })
    .min(3, { message: "Password must be at least of 3 characters" })
    .max(15, { message: "Password must not be more than 15 characters" }),
});

export const signInSchema = zod.object({
  email: zod
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(35, { message: "Email must not be more than 35 characters" }),

  password: zod.string({ required_error: "Password is required" }),
});
