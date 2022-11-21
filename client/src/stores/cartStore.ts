/**
 * Use Pinia to store the cart as global state.
 */

import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';
import { useProductStore } from "./productStore";

const productStore = useProductStore();
productStore.fill();

/**
 * Define the state of a cart.
 */
export const useCartStore = defineStore('cart', {
    /**
     * Save the state of a cart.
     * 
     * @returns A cart containing what a user has put into a shopping cart.
     */
    state: () => ({
        cart: useStorage('cart', [] as Cart[])
    }),
    actions:{
        /**
         * Add product to a shopping cart.
         * 
         * @param cart Cart object contaning the product number and quanitiy.
         */
        addToCart(cart: Cart){
            // find index of a product in cart
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
            // loop through the cart and add up all the quantity
            for(const x in this.cart)
            {
                counter += this.cart[x].quantity
            }
            return counter;
        },
        total(): number {
            let totalCost: number = 0;
            for(const x in this.cart)
            {
                // get the ID number of product in the cart
                let index: number = this.cart[x].id;
                // use that ID number to get the price from the product in the legacy database
                let cost: number = productStore.productList[index].price;
                // multiply price x quantity and accumualte on totalCost
                totalCost += cost * this.cart[x].quantity;
            }
            return parseFloat(totalCost.toFixed(2));
        },
        taxes(): number {
            let tax: number = 0;
            // I think this is Illinois tax rate?
            tax = this.total * 0.0625;
            return parseFloat(tax.toFixed(2));
        },
        grandTotal(): number {
            // Add up tax amount and total
            let grand: number = this.taxes + this.total;
            return parseFloat(grand.toFixed(2));
        },
        weight(): number {
            let totalWeight: number = 0;
            for(const x in this.cart)
            {
                let index: number = this.cart[x].id;
                let pWeight: number = productStore.productList[index].weight;
                totalWeight += pWeight * this.cart[x].quantity
            }
            return totalWeight;
        }
    }
})

/**
 * The interface of a Cart object.
 */
interface Cart {
    id: number,
    quantity: number
}