/**
 * Use Pinia to store the cart as global states.
 */

import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: useStorage('cart', [] as Cart[])
    }),
    actions:{
        addToCart(cart: Cart){
            // find index of an product in cart
            const i = this.cart.findIndex(s => s.id == cart.id)
            // if product is already in cart, update quantity
            if(i > -1){
                this.cart[i].quantity += 1
            // else put product into cart
            } else {
                this.cart.push(cart)
            }
        },
        // skeleton code, implement later
        clearCart(){
            this.cart.pop();
        }
    },
    getters:{
        isEmpty: (state) => state.cart.length == 0,
        count(): number {let counter: number = 0;
            for(const x in this.cart)
            {
                counter += this.cart[x].quantity
            }
            return counter;
        }
    }
})

interface Cart {
    id: number,
    quantity: number
}