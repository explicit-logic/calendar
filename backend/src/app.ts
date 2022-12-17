import server from './core/server';

const PORT = process.env.PORT ?? 5000;

server.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});

server.get('/api/ping', () => {
  return {
    message: 'Hi there!',
  };
});
