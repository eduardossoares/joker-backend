import Fastify from "fastify";
import v1Routes from "./routes/v1.routes";

export function buildApp() {
	const app = Fastify({
		logger: true,
	});

	app.register(v1Routes, {
		prefix: "/api/v1",
	});

	return app;
}
