export interface IUser {
    id: number;
    name: string;
    cpfCnpj: string;
    email: string;
    password: string;
    type: string;
}

export type INewUserDto = Omit<IUser, 'id'>