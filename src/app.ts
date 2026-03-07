import Fastify from "fastify";
import { usersRoutes } from "./routes/users";

const PORT = Number(process.env.PORT || 8080);

export const server = Fastify({
	logger: true,
});

server.register(usersRoutes, { prefix: "/users" });

server.listen({ port: PORT }, () => {
	console.log("server is runnig");
});
