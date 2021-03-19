import { PASSWORD, USERNAME } from "../constants/user.constants";
import { IUserCredentials } from "../models/IUserCredentials";
import { IUserValidation } from "../models/IUserValidation";

export class UserBusinessLogic {
  userValidation(user: IUserCredentials): IUserValidation {
    let valObj: IUserValidation;
    if (user.username === USERNAME && user.password === PASSWORD) {
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
