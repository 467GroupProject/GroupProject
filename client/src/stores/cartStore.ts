import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [] as cart[]
    }),
    actions:{
        addToCart(id: number, quantity: number){
        }
    },
    getters:{
        count: (state) => state.cart.length,
        isEmpty: (state) => state.cart.length == 0
    }
})

interface cart {
    id: number,
    quantity: number
}