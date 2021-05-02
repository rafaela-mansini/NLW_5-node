import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController {
    async create(req: Request, res: Response): Promise<Response>{
        const { email } = req.body;
        const userService = new UsersService();

        try {
            const user = await userService.create(email);
            return res.status(200).json(user);            
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

export { UsersController };