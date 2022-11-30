/**
 * A back-end express server
 */

import express from 'express'
import cors from 'cors';
import morgan from 'morgan';
import { PrismaClient as PrismaInternal } from '../prisma/generated/internal';
import { PrismaClient as PrismaLegacy } from '../prisma/generated/legacy';
import { resolve } from 'path';

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
  try{
    const allParts = await legacyDB.parts.findMany();
    res.send(allParts);
  }
  catch(error){
    res.send(error);
  }
});

/**
 * Query internal database to get all inventory
 */
app.get('/iventory', async(req, res) => {
  try {
    const allInventory = await internalDB.inventory.findMany();
    res.send(allInventory);
  }
  catch(error){
    res.send(error);
  }
});

/**
 * Post to internal databse when a customer as made an order
 */
app.post('/orders', async(req, res) => {
    const orders = await internalDB.orders.create({
      data: {
        customer_name: req.body.customer_name,
        customer_email: req.body.customer_email,
        customer_address: req.body.customer_address,
        total_amount: req.body.total_amount,
        total_weight: req.body.total_weight
      }
    })
    res.send(orders)
      for(const x in req.body.shopping_cart)
      {
        const orderProd = await internalDB.order_Product.create({
          data: {
            order_id: orders.id,
            product_id: req.body.shopping_cart[x].id,
            quantity: req.body.shopping_cart[x].quantity
          }
        })
      }
})

/**
 * Post to internal database to update inventory.
 */
app.post('/update', async(req, res) => {
  try{
    const updateQty = await internalDB.inventory.update({
      where: {
        id: req.body.id
      },
      data: {
        quantity: req.body.quantity
      }
    })
    res.send(updateQty);
  }
  catch(error){
    res.send(error);
  }
})

/**
 * Query internal database to get weight brackets.
 */
app.get('/weight', async(req, res) => {
  try{
    const weightBracket = await internalDB.weight.findMany();
    res.send(weightBracket);
  }
  catch(error){
    res.send(error);
  }
})

/**
 * Query internal database to get all orders.
 */
app.get('/getAllOrders', async(req, res) => {
  try{
    const orders = await internalDB.orders.findMany();
    res.send(orders);
  }
  catch(error){
    res.send(error);
  }
})

/**
 * Query internal database to get all open orders.
 */
app.get('/getOrders', async(req, res) => {
  try{
    const orders = await internalDB.orders.findMany({
      where: {
        status: "open"
      }
    })
    res.send(orders);
  }
  catch(error){
    res.send(error);
  }
})

/**
 * Post to internal database to mark order as closed/complete.
 */
app.post('/completeOrder', async(req, res) => {
  try{
    const statusChange = await internalDB.orders.update({
      where: {
        id: req.body.id
      },
      data: {
        status: req.body.status
      }
    })
    res.send(statusChange);
  }
  catch(error){
    res.send(error);
  }
})

/**
 * Query internal database to get Order_Prodcut table.
 */
app.get('/getOrderProduct', async(req, res) => {
  try{
    const orderPord = await internalDB.order_Product.findMany();
    res.send(orderPord);
  }
  catch(error){
    res.send(error);
  }
})

/**
 * Post to internal database to remove weight bracket.
 */
app.post('/removeWeight', async(req, res) => {
  try{
    const remWeight = await internalDB.weight.delete({
      where:{
        id: req.body.id
      }
    })
    res.send(remWeight);
  }
  catch(error) {
    res.send(error);
  }
})

/**
 * Post to internal database to insert new weight bracket.
 */
app.post('/insertWeight', async(req, res) => {
  try{
    const insert = await internalDB.weight.create({
      data: {
        weight: req.body.weight,
        cost: req.body.cost
      }
    })
    res.send(insert)
  }
  catch(error) {
    res.send(error);
  }
})

// Listening on port 3000
const server = app.listen(process.env.PORT || port, () =>
  console.log(`listening on port ${port}`),
);
