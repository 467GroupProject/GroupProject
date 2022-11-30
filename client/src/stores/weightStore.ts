import { defineStore } from "pinia";
import authenticationService from "@/services/authenticationService";
import { useStorage } from "@vueuse/core";

export const useWeightStore = defineStore('weight', {
    /**
     * Save state of weight weight bracket.
     * 
     * @returns The weight bracket in the internal databse.
     */
    state: () => ({
        weightBrackets: useStorage('weightBrackets', [] as Weight[])
    }),
    actions:{
        /**
         * Fill the weight bracket array.
         */
        async fill(){
            this.weightBrackets = (await authenticationService.weights()).data;
        }
    }
});

/**
 * Interface for weight bracket.
 */
interface Weight {
    id: number,
    weight: number,
    cost: number
};