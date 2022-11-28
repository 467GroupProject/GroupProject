/**
 * Use Pinia to store the cart as global state.
 */

import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';
import { useProductStore } from "./productStore";
import { useWeightStore } from "./weightStore";

const productStore = useProductStore();
productStore.fill();

const weightStore = useWeightStore();
weightStore.fill();

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
        /**
         * Clear the entire contents of a shopping cart.
         */
        clearCart(){
            this.cart.splice(0, this.cart.length)
        },
        /**
         * Update the quantity of a prodcut in a shopping cart.
         * 
         * @param cart Cart object, which is a product, whose quantity 
         * will be updated.
         */
        updateCart(cart: Cart){
            const i = this.cart.findIndex(s => s.id == cart.id)
            if(i > -1){
                this.cart[i].quantity = cart.quantity
            }
        }
    },
    getters:{
        /**
         * Check if a cart is empty.
         * 
         * @param state State of cart object
         * @returns True if a cart is empty.
         */
        isEmpty: (state) => state.cart.length == 0,
        count(): number {let counter: number = 0;
            // loop through the cart and add up all the quantity
            for(const x in this.cart)
            {
                counter += this.cart[x].quantity
            }
            return counter;
        },
        /**
         * Get the total number of products in a shopping cart.
         * 
         * @returns The total products in a shopping cart.
         */
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
        /**
         * Calculate the grand total of shopping cart.
         * 
         * @returns The grand total of a shopping cart.
         */
        grandTotal(): number {
            // Add up tax amount and total
            let grand: number = this.shipping + this.total;
            return parseFloat(grand.toFixed(2));
        },
        /**
         * Get the weight of all prodcuts in a shopping cart.
         * 
         * @returns The combined total weight of all products in a
         * shooping cart.
         */
        weight(): number {
            let totalWeight: number = 0;
            for(const x in this.cart)
            {
                let index: number = this.cart[x].id;
                let pWeight: number = productStore.productList[index].weight;
                totalWeight += pWeight * this.cart[x].quantity
            }
            return totalWeight;
        },
        /**
         * Calculate shipping cost based on weight of all products in shipping cart.
         * 
         * @returns The total shipping cost.
         */
        shipping(): number{
            let shippingCost: number = 0;
            for(const x in weightStore.weightBrackets)
            {
                let weightB: number = weightStore.weightBrackets[x].weight;
                if(this.weight >= weightB)
                {
                    shippingCost = weightStore.weightBrackets[x].cost;
                }
            }
            return shippingCost;
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