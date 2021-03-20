import express from 'express';

export const server = () => {
  const app = express();
  
  app.all('*', (req, res) => res.send(`Request Recieved: ${req.method}`));

  return app;
};
