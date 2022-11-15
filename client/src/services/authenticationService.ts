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
    }
}