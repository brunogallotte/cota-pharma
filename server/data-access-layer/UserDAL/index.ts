import { userCache } from "./cache";
import { registerUserAction } from "./register-user";
import { loginUserAction } from "./login-user";
import { verifyEmailAction } from "./verify-email";
import { recoveryPasswordAction } from "./recovery-password";

export const UserDAL = {
  cache: userCache,
  registerUser: registerUserAction,
  loginUser: loginUserAction,
  verifyEmail: verifyEmailAction,
  recoveryPassword: recoveryPasswordAction
};
