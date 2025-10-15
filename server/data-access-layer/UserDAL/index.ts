import { userCache } from "./cache";
import { registerUserAction } from "./register-user";
import { loginUserAction } from "./login-user";

export const UserDAL = {
  cache: userCache,
  registerUser: registerUserAction,
  loginUser: loginUserAction
};
