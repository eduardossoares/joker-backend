import { buildApp } from "./app";

const PORT = Number(process.env.PORT || 8080);
const HOST = process.env.HOST || "0.0.0.0";

const app = buildApp();

app.listen({ port: PORT, host: HOST }, () => {
  console.log("server is running on port:", PORT);
});
