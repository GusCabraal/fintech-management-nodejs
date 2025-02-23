import { INewUserDto, IUser } from "../entities/user";

export interface IUserRepository {
    create(user: INewUserDto): Promise<IUser>;
    findByEmail(email: string): Promise<IUser | null>;
    findByCpfCnpj(cpfCnpj: string): Promise<IUser | null>;
}
