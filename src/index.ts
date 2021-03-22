import dotenv from 'dotenv';
import { server } from './server';

dotenv.config();

const port = process.env.SERVER_PORT ?? 5000;
const app = server();

app.listen(port, () => {
  console.clear();
  console.log(`Server Running on Port ${port}\n`);
});
