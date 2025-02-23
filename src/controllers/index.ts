import { CreateUserController } from "./create-user.controller";
import { createUserService } from "../services";

export const createUserController = new CreateUserController(createUserService);

