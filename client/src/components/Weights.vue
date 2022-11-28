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
                    <tr class="trow">
                        <td></td>
                    </tr>
                    <tr class="trow">
                        <td></td>
                        <td class="text-left">
                        Weight</td>
                        <td>
                            <v-text-field
                            class="new"></v-text-field>
                        </td>
                        <td class="text-left">
                        Cost</td>
                        <td>
                            <v-text-field
                            class="new"></v-text-field>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>

    </v-container>

</template>

<script lang="ts">
import { useWeightStore } from '@/stores/weightStore';

export default{
    setup(){
        const weightStore = useWeightStore();
        weightStore.fill();

        return { weightStore }
    }
}
</script>

<style scoped>
    .new{
        height: 50px;
        width: 60px;
    }
    .trow{
        height: 70px;
    }
</style>