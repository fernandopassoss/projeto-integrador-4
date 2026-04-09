import { Request, Response } from "express";
import { prisma } from "../../Config/db/prisma";
import { UserRepository } from "../../Repository/User";
import { UserService } from "../../Service/User";
import { UpdateUserDTO } from "../../DTO/User/UpdateUserDTO";

export class UpdateUserController {
  async execute(req: Request, res: Response) {
    const { isActive, mail, image, password, person }: UpdateUserDTO = req.body;

    if (!mail) {
      return res.status(400).send({ message: "O campo email é obrigatório!" });
    }

    const id = req.user_id;

    const userRepository = new UserRepository(prisma);
    const userService = new UserService(userRepository);

    const user = await userService.Update(
      {
        isActive,
        mail,
        image,
        password,
        person
      },
      id
    );

    if (!user) {
      return res.status(400).send({ message: "Erro ao atualizar usuário!" });
    }

    return res.status(200).send({ message: "Usuário atualizado com sucesso!" });
  }
}

