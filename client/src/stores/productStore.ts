/**
 * Use Pinia to store all products in the legacy database and inventory
 * in the internal database as gobal states.
 */

import { defineStore } from 'pinia';
import authenticationService from '@/services/authenticationService';
import { useStorage } from '@vueuse/core'

/**
 * Define a store of product.
 */
export const useProductStore = defineStore('product', {
  /**
   * Save the state of the product list and inventory list.
   * 
   * @returns List of all the prodcuts in the legacy database and list of
   * all inventory in the internal database.
   */
  state: () => ({
      productList: useStorage('productList', [] as Product[]),
      iventoryList: useStorage('inventoryList', [] as Inventory[]),

  }),
  actions:{
    /**
     * Fill up both the prodcutList and inventoryList array by querying both
     * the legacy and internal database.
     */
    async fill() {
      this.productList = (await authenticationService.product()).data;
      this.iventoryList = (await authenticationService.inventory()).data;
    }
  }
});

/**
 * As per the Pinia documentation, not needed to make the state compatiable
 * with TypeScript, but did it just in case.
 */
interface Product {
  number: number,
  description: string,
  price: number,
  weight: number,
  pictureURL: string
}

/**
 * Interface for inventory.
 */
interface Inventory {
  id: number,
  quantity: number
}