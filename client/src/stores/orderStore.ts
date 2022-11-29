import { defineStore } from "pinia";
import authenticationService from "@/services/authenticationService";
import { useStorage } from "@vueuse/core";

export const useOrderStore = defineStore('orders', {
    state: () => ({
        openOrders: useStorage('openOrders', [] as Orders[])
    }),
    actions: {
        async fill(){
            this.openOrders = (await authenticationService.getOrders()).data
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