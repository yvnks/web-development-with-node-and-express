const PORT = process.env.PORT || 3000;
setTimeout(async () => {
  const { server } = await import('./server.mjs');

  server.listen(PORT, () => {
    console.log('Server is running...');
  });
}, 1_500);
