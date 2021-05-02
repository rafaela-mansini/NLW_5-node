import { Request, response, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {
    async create(req: Request, res: Response){
        const { admin_id, text, user_id } = req.body;
        const messagesService = new MessagesService();

        try {
            const message = await messagesService.create({ admin_id, text, user_id });
            return res.status(200).json(message);            
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }

    async showByUser(req: Request, res: Response){
        const { id } = req.params;
        const messagesService = new MessagesService();

        const list = await messagesService.listByUser(id);
        return res.json(list);

    }
}

export { MessagesController }