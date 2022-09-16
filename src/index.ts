import express from 'express';
import { intiData } from './data';
import { register } from './routes';

const PORT = '3000';
const app = express();
app.use(express.json());

register(app);

app.listen(PORT, () => {
  intiData();
  console.log(`Listening on port ${PORT}`);
});
