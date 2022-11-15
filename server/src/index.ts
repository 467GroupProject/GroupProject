/**
 * A back-end express server
 */

import express from 'express'

const app = express();
const port: number = 3000;

app.use(express.json());

const server = app.listen(process.env.PORT || port, () =>
  console.log(`listening on port ${port}`),
);
