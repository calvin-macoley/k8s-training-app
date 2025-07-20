import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/timestamp', (req, res) => {
  res.json({ timestamp: new Date().toISOString() });
});

app.listen(3002, () => {
  console.log('Timestamp service listening on port 3002');
});
