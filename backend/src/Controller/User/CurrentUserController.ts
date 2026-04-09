import { Request, Response } from "express";
import { prisma } from "../../Config/db/prisma";
import { UserRepository } from "../../Repository/User";
import { UserService } from "../../Service/User";

export class CurrentUserController {
  async execute(req: Request, res: Response) {
    const id = req.user_id;

    const userRepository = new UserRepository(prisma);
    const userService = new UserService(userRepository);

    const user = await userService.FindUserById(id);

    if (!user) {
      return res.status(400).send({ message: "Usuário não encontrado" });
    }

    return res.status(200).json(user);
  }
}