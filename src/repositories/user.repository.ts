import { INewUserDto } from "../contracts/entities/user";
import { IUser } from "../contracts/entities/user";
import { IUserRepository } from "../contracts/repositories/user.repository";

export class UserRepository implements IUserRepository {
    async findByCpfCnpj(cpfCnpj: string): Promise<IUser | null> {
        console.log(cpfCnpj);
        throw new Error("Method not implemented.");
    }
    async findByEmail(email: string): Promise<IUser | null> {
        console.log(email);
        throw new Error("Method not implemented.");
    }
    async create(user: INewUserDto): Promise<IUser> {
        console.log(user);
        throw new Error("Method not implemented.");

    }
}