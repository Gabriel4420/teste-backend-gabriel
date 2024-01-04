import { $Enums, Resultado } from "@prisma/client";
import { FastifyRequest, FastifyReply } from "fastify";

import { IResultadoController } from "../interfaces/iResultadoController";
import { ResultadoService } from "../services/resultado.service";
import { IResultadoProps } from "../interfaces/iResultadoProps";

const service = new ResultadoService();

export class ResultadoController implements IResultadoController {
  async listarResultado(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void | Resultado[]> {
    const { id } = request.params as { id: string };

    const resultado = await service.listarResultado(id);

    reply.send(resultado);
  }
  async listarResultados(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void | Resultado> {
    reply.send(await service.listarResultados());
  }
  async registrarResultado(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void | Resultado> {
    const data = request.body as IResultadoProps;
    const resultado = await service.registrarResultado({
      bimestre: data.bimestre,
      disciplina: data.disciplina,
      nota: data.nota,
    });
    reply.send(resultado);
  }
  async removerResultado(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void | Resultado> {
    const { id } = request.params as { id: string };
    const excludedResult = await service.removerResultado(id);
    reply.send(excludedResult);
  }
}
