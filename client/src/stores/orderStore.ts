import { defineStore } from "pinia";
import authenticationService from "@/services/authenticationService";
import { useStorage } from "@vueuse/core";

export const useOrderStore = defineStore('orders', {
    state: () => ({
        openOrders: useStorage('openOrders', [] as Orders[]),
        allOrders: useStorage('allOrders', [] as Orders[]),
//        orderProducts: userStorage('orderProducts', [] as OrderProducts[]),
    }),
    actions: {
        async fill(){
            this.openOrders = (await authenticationService.getOrders()).data;
            this.allOrders = (await authenticationService.getAllOrders()).data;
//            this.orderProducts = (await authenticationService.getOrderProducts()).data;
        }
    }
})

interface Orders {
    id: Number,
    customer_name: String,
    customer_email: String,
    total_amount: Number,
    total_weight: Number,
    status: String,
    date: Date
}
