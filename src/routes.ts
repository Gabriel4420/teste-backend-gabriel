import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import { ResultadoController } from "./controllers/resultado.controller";

export async function routes(
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
) {
  fastify.get("/teste", async (request, reply) => {
    return { hello: "world" };
  });

  fastify.get(
    "/listarResultados",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ResultadoController().listarResultados(request, reply);
    }
  );

  fastify.get(
    "/listarResultados/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ResultadoController().listarResultado(request, reply);
    }
  );

  fastify.post(
    "/registrarResultado",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ResultadoController().registrarResultado(request, reply);
    }
  );

  fastify.delete(
    "/deletarResultado/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ResultadoController().removerResultado(request, reply);
    }
  );
}
