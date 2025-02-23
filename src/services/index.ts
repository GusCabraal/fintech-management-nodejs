import { CreateUserService } from "./create-user.service";
import { userRepository } from "../repositories";

export const createUserService = new CreateUserService(userRepository);