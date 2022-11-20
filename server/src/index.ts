/**
 * A back-end express server
 */

import express from 'express'
import cors from 'cors';
import morgan from 'morgan';
import { PrismaClient as PrismaInternal } from '../prisma/generated/internal';
import { PrismaClient as PrismaLegacy } from '../prisma/generated/legacy';

const app = express();
const port: number = 3000;

// allow query to internal database
const internalDB = new PrismaInternal();
// allow qeury to legacy database
const legacyDB = new PrismaLegacy();

app.use(express.json());
// for testing, see what is hitting our server
app.use(morgan('combined'));
// for deployment in real world environment
app.use(cors());

// qeury legacy database to get all products
app.get('/products', async(req, res) => {
  const allParts = await legacyDB.parts.findMany();
  res.send(allParts);
});

// query internal database to get all inventory
app.get('/iventory', async(req, res) => {
  const allInventory = await internalDB.inventory.findMany();
  res.send(allInventory);
})

const server = app.listen(process.env.PORT || port, () =>
  console.log(`listening on port ${port}`),
);
