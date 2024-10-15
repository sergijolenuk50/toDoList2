export interface IUser{
    id: number;
    name: string;
    email?: string;
    role: string;
}

export const USERS: IUser[]=[
    {
        id: 1111,
        name: "Vlad",
        email: "vs@ukr.net",
        role: "Admin"
      },
      {
        id: 1111,
        name: "Sergii",
        email: "test@ukr.net",
        role: "user"
      },
      {
        id: 1111,
        name: "Taras",
        email: "ts@ukr.net",
        role: "Admin"
      }, {
        id: 1111,
        name: "Taras",
        email: "ts@ukr.net",
        role: "Admin"
      },
      {
        id: 1111,
        name: "Taras",
        email: "ts@ukr.net",
        role: "Admin"
      }



]