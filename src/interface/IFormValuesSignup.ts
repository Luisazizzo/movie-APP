import { IUser } from "./IUser";

export interface IFormValuesSignup extends IUser {
  confirmPassword: string;
}
