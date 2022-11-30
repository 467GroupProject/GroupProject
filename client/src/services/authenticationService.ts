/**
 * Various functions to communicate to back-end
 */

import axiosApi from "./axiosApi";

export default {
    /**
     * Axios function to get all prodcuts from legacy database.
     * 
     * @returns All products from legacy database.
     */
    product(){
        return axiosApi().get('products');
    },
    /**
     * Axios function to get all inventory from internal database.
     * 
     * @returns All inventory from legacy database.
     */
    inventory(){
        return axiosApi().get('iventory');
    },
    /**
     * Axios function to update inventory of internal database
     * 
     * @param updateI The product and quantity to update.
     * @returns The updated inventory.
     */
    update(updateI: updateInventory){
        return axiosApi().post('update', updateI);
    },
    /**
     * Axios function to post an order made by a customer.
     * 
     * @param orderProd The order a customer has made.
     * @returns Successful or non-successful order.
     */
    orders(orderProd: orderProduct){
        return axiosApi().post('orders', orderProd);
    },
    /**
     * Axios function to get the weight brackets.
     * 
     * @returns The weight brackets.
     */
    weights(){
        return axiosApi().get('weight');
    },
    /**
     * Axios function to get all orders from internal database.
     * 
     * @returns All orders.
     */
    getAllOrders(){
        return axiosApi().get('getAllOrders');
    },
    /**
     * Axios function to get all open orders from internal database.
     * 
     * @returns All open oders.
     */
    getOrders(){
        return axiosApi().get('getOrders');
    },
    /**
     * Axios function to post that an order has be marked as closed.
     * 
     * @param completed The order to to be marked as closed.
     * @returns Th closed order.
     */
    completeOrder(completed: completeOrder){
        return axiosApi().post('completeOrder', completed);
    },
    /**
     * Axios function to get Order_Product table from internal database.
     * 
     * @returns The Order_Prodcut table.
     */
    getOrderProduct(){
        return axiosApi().get('getOrderProduct')
    },
    /**
     * Axios function to remove a weight bracket.
     * 
     * @param removeW The weight bracket to be removed.
     * @returns The weight bracket that has been removed.
     */
    removeWeight(removeW: removeWeight){
        return axiosApi().post('removeWeight', removeW);
    },
    /**
     * Axios function to post a new weight bracket.
     * 
     * @param nWght New weight bracket to be added.
     * @returns New weight bracket that has been added.
     */
    insertWeight(nWght: newWeight){
        return axiosApi().post('insertWeight', nWght);
    }
}

/**
 * For typescript, ensure types are correct whenever passing an object to various axios functions.
 */

/**
 * Interface for updating inventory.
 */
interface updateInventory {
    id: number,
    quantity: number
}

/**
 * Interface for a customer ordering a product.
 */
interface orderProduct{
    customer_name: string,
    customer_email: string,
    customer_address: string,
    total_amount: Number,
    total_weight: Number,
}

/**
 * Interface for marking an order as complete/closed.
 */
interface completeOrder{
    id: Number,
    status: string
}

/**
 * Interface for adding in a new weight bracket.
 */
interface newWeight {
    weight: Number,
    cost: Number
}

/**
 * Interface for removing a weight bracket.
 */
interface removeWeight {
    id: Number
}
