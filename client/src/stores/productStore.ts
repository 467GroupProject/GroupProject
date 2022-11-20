/**
 * Use Pinia to store gobal states of all products in the legacy database
 * and inventory in the internal database.
 */

import { defineStore } from 'pinia';
import authenticationService from '@/services/authenticationService';
import { useStorage } from '@vueuse/core'

export const useProductStore = defineStore('product', {
  state: () => ({
      productList: useStorage('productList', [] as product[]),
      iventoryList: useStorage('inventoryList', [] as inventory[]),

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
interface product {
  number: number,
  description: string,
  price: number,
  weight: number,
  pictureURL: string
}

interface inventory {
  id: number,
  quantity: number
}