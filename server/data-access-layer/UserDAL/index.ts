import { userCache } from "./cache";
import { registerUserAction } from "./register-user";

export const UserDAL = {
  cache: userCache,
  registerUser: registerUserAction
};
