import http from 'http';

const handlers: Record<string, Record<string, any>> = Object.freeze({
  GET: new Map(),
});

function server(req: http.IncomingMessage, res: http.ServerResponse) {
  server.handle(req, res);
}

server.get = (path: string, callback: () => void) => {
  handlers.GET.set(path, callback);
};

server.handle = async function handle(req: http.IncomingMessage, res: http.ServerResponse) {
  const method = req.method ?? '';

  if (method in handlers && handlers[method].has(req.url)) {
    const handler = handlers[method].get(req.url);

    const result = await handler(req, res);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));

    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Route not found' }));
};

server.listen = function listen(...params: any) {
  const httpServer = http.createServer(this);

  return httpServer.listen(...params);
};

export default server;
