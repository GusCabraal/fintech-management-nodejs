import { INewUserDto, IUser } from "../contracts/entities/user";
import { IUserRepository } from "../contracts/repositories/user.repository";
import { User } from "../entities/user";

export class CreateUserService {
    constructor(
        private readonly userRepository: IUserRepository
    ) {

    }

    async execute(args: INewUserDto): Promise<IUser> {

        const newUser = new User({...args, id: 0}).toUserCreate();

        const userAlreadyExists = await this.userRepository.findByEmail(newUser.email);

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }
        
        const user = await this.userRepository.create(newUser);

        return user;
    }

}