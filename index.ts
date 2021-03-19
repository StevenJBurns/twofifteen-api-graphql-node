import express from 'express';

const server = express();

server.get('*', (req, res) => res.send(`Request Recieved: ${req.method}`));

server.listen(4000, () => console.log('Server Running on Port 4000'));
