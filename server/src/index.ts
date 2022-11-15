/**
 * A back-end express server
 */

import express from 'express'
import cors from 'cors';
import morgan from 'morgan';

const app = express();
const port: number = 3000;

app.use(express.json());
// for testing, see what is hitting our server
app.use(morgan('combined'));
// for deployment in real world environment
app.use(cors());

const server = app.listen(process.env.PORT || port, () =>
  console.log(`listening on port ${port}`),
);
