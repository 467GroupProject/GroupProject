<template>
    <v-container fluid class="text-center">
        <v-card>{{orderProd}}</v-card><br><br>
        <v-card>{{currentOrder}}</v-card>
        <v-card>
            <v-card-title>List of All Orders</v-card-title>
            <v-table>
                <tbody>
                    <tr>
                        <td>Order Number</td>
                        <td>Total Amount</td>
                        <td>Total Weight</td>
                        <td>Purchase Date</td>
                        <td>Order Status</td>
                        <td></td>
                    </tr>
                    <tr v-for="o in orderStore.allOrders" key="o.id">
                        <td>{{ o.id }}</td>
                        <td>${{ o.total_amount }}</td>
                        <td>{{ o.total_weight }} lb(s)</td>
                        <td>{{ o.date }}</td>
                        <td>{{ o.status }}</td>
                        <td><v-btn @click="onClick(o)">Details</v-btn></td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>
        <v-dialog v-model="dialog" width="75%">
            <v-card>
                <v-card-text>Product List</v-card-text>
                <v-div v-for="product in orderProd">
                    <v-div v-if="product.order_id == currentOrder.id">
                        <v-card-text>{{ product.product_id }}</v-card-text>
                    </v-div>
                </v-div>
                <v-card-actions>
                    <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script lang="ts">
import { useOrderStore } from '@/stores/orderStore'
import authenticationServie from '@/services/authenticationService'


export default{
    setup() {
        const orderStore = useOrderStore();
        orderStore.fill();

        return { orderStore };
    },
    methods: {
        async onClick(order){
            this.dialog = true;
            this.currentOrder = order;
        }
    },
    data() {
        return{
            orderProd: [],
            currentOrder: null,
            dialog: false,
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

