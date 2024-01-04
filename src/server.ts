import cors from "@fastify/cors";
import Fastify from "fastify";
import { routes } from "./routes";

const app = Fastify({ logger: true });

const main = async () => {
  await app.register(cors);
  await app.register(routes);

  try {
    await app.listen({ port: 3333 });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

main();
