export interface User {
    readonly username: string;
    readonly password: string;
  }


export interface UserStatus  {
    readonly success: boolean;
    readonly reason: string;
}