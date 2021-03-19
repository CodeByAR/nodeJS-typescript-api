import { IUserValidation } from "../models/IUserValidation";
import { UserCredentials } from "../models/UserCredentials";
export class UserBusinessLogic {
  userValidation(user: UserCredentials) {
    let valObj: IUserValidation;
    if (user.username === "asdf@gmail.com" && user.password === "123") {
      valObj = {
        IsValid: true,
        ErrMessage: '',
      };
    } else {
      valObj = {
        IsValid: false,
        ErrMessage: 'Username & Password do not match.',
      };
    }
    return valObj;
  }
}
