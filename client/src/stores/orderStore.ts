import { defineStore } from "pinia";
import authenticationService from "@/services/authenticationService";
import { useStorage } from "@vueuse/core";

export const useOrderStore = defineStore('orders', {
    /**
     * Save state of open orders and all orders.
     * 
     * @returns List of all open orders and all orders in the internal database.
     */
    state: () => ({
        openOrders: useStorage('openOrders', [] as Orders[]),
        allOrders: useStorage('allOrders', [] as Orders[]),
    }),
    actions: {
        /**
         * Fill the array of both open orders and all orders.
         */
        async fill(){
            this.openOrders = (await authenticationService.getOrders()).data;
            this.allOrders = (await authenticationService.getAllOrders()).data;
        }
    }
})

/**
 * Interface for orders, both open and all.
 */
interface Orders {
    id: Number,
    customer_name: String,
    customer_email: String,
    total_amount: Number,
    total_weight: Number,
    status: String,
    date: Date
}
