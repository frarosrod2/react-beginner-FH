export interface User {
  checking: boolean;
  uid: string | null;
  name: string | null;
}

export interface UserLogin {
  lEmail: string;
  lPassword: string;
}

export interface UserRegister {
  rName: string;
  rEmail: string;
  rPassword1: string;
  rPassword2: string;
}
