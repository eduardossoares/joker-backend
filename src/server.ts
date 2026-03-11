import { buildApp } from "./app";

const PORT = Number(process.env.PORT || 8080);

const app = buildApp();

app.listen({ port: PORT }, () => {
	console.log("server is running on port:", PORT);
});
