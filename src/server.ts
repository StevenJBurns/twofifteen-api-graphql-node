import express from 'express';
import graphqlHTTP from 'express-graphql';
// import schema from './graphql/schema/root';

export const server = () => {
  const app = express();

  app.use(express.json());
  
  // app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));
  app.all('*', (req, res) => {
    console.log(`Request Recieved: ${req.method}`);
    console.log(`Request Recieved: ${req.url}`);
    res.send(`Request Recieved: ${req.method}`);
  });

  app.all('*', (req, res) => {
    res.send(`Request Port: ${req.url}`)
  });

  return app;
};
