import { Resultado } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";

export interface IResultadoController {
  listarResultado(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<Array<Resultado> | void>;
  listarResultados(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<Resultado | void>;
  registrarResultado(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<Resultado | void>;
  removerResultado(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<Resultado | void>;
}
