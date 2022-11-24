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
});

app.post('/orders', async(req, res) => {
  const orders = await internalDB.orders.create({
    data: {
      customer_name: req.body.customer_name,
      customer_email: req.body.customer_email,
      customer_address: req.body.customer_address,
      total_amount: req.body.total_amount,
      total_weight: req.body.status,
      date: req.body.date
    }
  })
  res.send(orders)
})

app.post('/register', async(req, res) => {
  res.send({
    message: `Hello ${req.body.email} ${req.body.password} ${req.body.status}`
  })
})

app.post('/update', async(req, res) => {
  const updateQty = await internalDB.inventory.update({
    where: {
      id: req.body.id
    },
    data: {
      quantity: req.body.quantity
    }
  })
  res.send(updateQty);
})

const server = app.listen(process.env.PORT || port, () =>
  console.log(`listening on port ${port}`),
);
