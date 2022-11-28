import { defineStore } from "pinia";
import authenticationService from "@/services/authenticationService";
import { useStorage } from "@vueuse/core";

export const useWeightStore = defineStore('weight', {
    state: () => ({
        weightBrackets: useStorage('weightBrackets', [] as Weight[])
    }),
    actions:{
        async fill(){
            this.weightBrackets = (await authenticationService.weights()).data;
        }
    }
});

interface Weight {
    id: number,
    weight: number,
    cost: number
};