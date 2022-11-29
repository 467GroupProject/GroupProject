<template>
    <v-container fluid class="text-center">
        <v-card>
            <v-card-title>List of Open Orders</v-card-title>
            <v-table>
                <tbody>
                    <tr>
                        <td>Order Number</td>
                        <td>Total Amount</td>
                        <td>Total Weight</td>
                        <td></td>
                    </tr>
                    <tr v-for="o in orderStore.openOrders" key="o.id">
                        <td>{{ o.id }}</td>
                        <td>${{ o.total_amount }}</td>
                        <td>{{ o.total_weight }} lb(s)</td>
                        <td><v-btn @click="onClick(o.id)">Complete Order</v-btn></td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>
    </v-container>
    
</template>

<script lang="ts">
import { useOrderStore } from '@/stores/orderStore';
import authenticationServie from '@/services/authenticationService'
export default{
    setup() {
        const orderStore = useOrderStore();
        orderStore.fill();

        return { orderStore };
    },
    methods: {
        async onClick(pid: Number){
            await(authenticationServie.completeOrder({
                    id: pid,
                    status: 'closed'
                })
            )
        }
    },
    data() {
        return{
            orderProd: []
        }
    },
    mounted() {
        authenticationServie.getOrderProduct()
            .then(response => (this.orderProd = response.data))
            .catch(error => console.log(error))
    }
}
</script>

<style scoped>
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, .05)
}
</style>