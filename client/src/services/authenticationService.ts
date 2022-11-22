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
    processCC(){
        return axiosApi().post('http://blitz.cs.niu.edu/creditcard');
    },
    register(credentials: Credentials){
        return axiosApi().post('register', credentials);
    },
    update(updateI: updateInventory){
        return axiosApi().post('update', updateI);
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