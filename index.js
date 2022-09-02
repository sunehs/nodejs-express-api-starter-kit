import express from 'express';
const port = 3003;
const app = express();

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(port, () => console.log(`Example app is listening on port ${port}.`));
