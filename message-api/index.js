import express from 'express';
import cors from 'cors';
import router from './messageRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', router);

app.listen(3001, () => {
  console.log('Message API listening on port 3001');
});
