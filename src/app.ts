import Fastify from "fastify";
import v1Routes from "./routes/v1.routes";

const PORT = Number(process.env.PORT || 8080);

export const app = Fastify({
	logger: true,
});

app.register(v1Routes, {
	prefix: "/api/v1",
});

app.listen({ port: PORT }, () => {
	console.log("server is runnig");
});
