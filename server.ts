import {
  createServer,
  type IncomingMessage,
  type ServerResponse,
} from "node:http";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = Number(process.env.PORT) || 3000;

const app = next({
  dev,
  hostname,
  port,
});

const handle = app.getRequestHandler();

const startServer = async (): Promise<void> => {
  await app.prepare();

  const server = createServer(
    async (req: IncomingMessage, res: ServerResponse) => {
      try {
        const url = new URL(
          req.url ?? "/",
          `http://${req.headers.host ?? `${hostname}:${port}`}`,
        );

        const pathname = url.pathname;
        const query = Object.fromEntries(url.searchParams.entries());

        if (pathname === "/a") {
          await app.render(req, res, "/a", query);
          return;
        }

        if (pathname === "/b") {
          await app.render(req, res, "/b", query);
          return;
        }

        await handle(req, res);
      } catch (error) {
        console.error("Error occurred handling request:", req.url, error);

        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    },
  );

  server.once("error", (error) => {
    console.error("Server error:", error);
    process.exit(1);
  });

  server.listen(port, hostname, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
  });
};

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
