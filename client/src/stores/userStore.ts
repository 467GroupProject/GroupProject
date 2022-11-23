import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: useStorage('user', null)
    })
})