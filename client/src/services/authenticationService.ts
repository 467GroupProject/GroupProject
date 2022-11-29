/**
 * Various functions to communicate to back-end
 */

import axiosApi from "./axiosApi";

export default {
    /**
     * Function to get all prodcuts from legacy database.
     * 
     * @returns All products from legacy database.
     */
    product(){
        return axiosApi().get('products');
    },
    /**
     * Function to get all inventory from internal database.
     * 
     * @returns All inventory from legacy database.
     */
    inventory(){
        return axiosApi().get('iventory');
    },
    register(credentials: Credentials){
        return axiosApi().post('register', credentials);
    },
    update(updateI: updateInventory){
        return axiosApi().post('update', updateI);
    },
    orders(orderProd: orderProduct){
        return axiosApi().post('orders', orderProd);
    },
    weights(){
        return axiosApi().get('weight');
    },
    getOrders(){
        return axiosApi().get('getOrders');
    },
    completeOrder(completed: completeOrder){
        return axiosApi().post('completeOrder', completed);
    },
    getOrderProduct(){
        return axiosApi().get('getOrderProduct')
    },
    removeWeight(removeW: removeWeight){
        return axiosApi().post('removeWeight', removeW);
    },
    insertWeight(nWght: newWeight){
        return axiosApi().post('insertWeight', nWght);
    }
}

interface Credentials {
    email: string,
    password: string,
    status: string
}
interface updateInventory {
    id: number,
    quantity: number
}

interface orderProduct{
    customer_name: string,
    customer_email: string,
    customer_address: string,
    total_amount: Number,
    total_weight: Number,
}

interface completeOrder{
    id: Number,
    status: string
}

interface newWeight {
    weight: Number,
    cost: Number
}

interface removeWeight {
    id: Number
}