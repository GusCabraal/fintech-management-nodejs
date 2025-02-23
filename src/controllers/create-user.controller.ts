import { type Request, type Response } from "express";
import { CreateUserService } from "../services/create-user.service";
export class CreateUserController{

    constructor(
        private readonly createUserService: CreateUserService
    ) {}
    
    async handle(req: Request, res: Response): Promise<Response> {
        return res.status(201).json(await this.createUserService.execute(req.body));
    }
}  