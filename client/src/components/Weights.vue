<template>
    <v-container fluid class="text-center">
        <v-card>
            <v-card-title>Weight Brackets to Calculate Shipping</v-card-title>
            <v-table>
                <tbody>
                    <tr class="trow">
                        <td></td>
                        <td class="text-left">
                        Weight range</td>
                        <td class="text-left">
                        Price</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="trow" v-for="w in sortByWeight"
                    :key="w.id">
                        <td></td>
                        <td class="text-left">{{ w.weight }} lb(s)</td>
                        <td class="text-left">${{ w.cost }}</td>
                        <td>
                            <v-btn variant="outlined" @click="removeWeight(w.id)
                            ; refresh()"
                            >Remove</v-btn>
                        </td>
                        <td></td>
                    </tr>
                    <tr class="trow">
                        <td class="text-left">
                        Weight</td>
                        <td>
                            <v-text-field v-model="weight"
                            class="new"></v-text-field>
                        </td>
                        <td class="text-left">
                        Cost</td>
                        <td>
                            <v-text-field v-model="cost"
                            class="new"></v-text-field>
                        </td>
                        <td>
                            <v-btn @click="insertNew(
                                Number(weight), Number(cost)
                            ); refresh()">Add</v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>

    </v-container>

</template>

<script lang="ts">
import { useWeightStore } from '@/stores/weightStore';
import authenticationService from '@/services/authenticationService'

export default{
    setup(){
        const weightStore = useWeightStore();
        weightStore.fill();

        return { weightStore }
    },
    data(){
        return{
            weight: '',
            cost: ''
        }
    },
    methods: {
        async insertNew(w: Number, c: Number){
            const newInsert = await authenticationService.insertWeight({
                weight: w,
                cost: c
            })
        },
        refresh(){
            setTimeout(function() {
                location.reload()
            }, 3000)
        },
        async removeWeight(rid:Number){
            const rmWeight = await authenticationService.removeWeight({id: rid})
        }
    },
    computed: {
        sortByWeight: function(){
            return this.weightStore.weightBrackets.sort((a, b) =>
            a.weight - b.weight)
        }
    }
}
</script>

<style scoped>
    .new{
        height: 50px;
        width: 90px;
    }
    .trow{
        height: 70px;
    }
</style>