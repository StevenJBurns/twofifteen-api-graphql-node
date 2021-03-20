import dotenv from 'dotenv';
import { server } from './server';

dotenv.config();

const port = process.env.PORT ?? 4000;
const app = server();

app.listen(port, () => {
  console.clear();
  console.log(`Server Running on Port ${port}`);
});
