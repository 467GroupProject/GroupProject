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
                        <td><v-btn @click="onClick(o)">Complete Order</v-btn></td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>


        <v-dialog v-model="close_confirmation_popup" width="40%">
                <v-card>
                    <v-container fluid>
                        <v-card-title class="text-center">
                        Order Filling: {{curr_order.id}}
                        </v-card-title>

                        <v-card-text>
                            {{curr_order}}

                            <div class="text-left">
                                <v-card-h1 class="font-weight-bold">
                                    Packing List:
                                </v-card-h1>
                                <p>

                                </p>
                            </div>
                               
                                
                            <div class="text-left">
                                <v-card-h1 class="font-weight-bold">
                                    Invoice:
                                </v-card-h1>
                                <p>
                                    
                                </p>
                            </div>


                            <div class="text-left">
                                <v-card-h1 class="font-weight-bold">
                                    Shipping Label:
                                </v-card-h1>
                                <p class="text-sm-left">
                                    {{curr_order.customer_name}}<br/>
                                    {{curr_order.customer_address}}<br/>
                                    Confirmation email will be sent to {{curr_order.customer_email}}
                                </p>
                            </div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn width="50%" color="green"  @click="test_dialog2 = true"> Confirm & Close </v-btn>
                            <v-btn width="50%" color="red"  @click="close_confirmation_popup = false">Cancel</v-btn>
                        </v-card-actions>
                    </v-container>

                    
                </v-card>

        </v-dialog>
        
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
        async onClick(order){
            this.close_confirmation_popup = true;
            this.curr_order = order;
            //await(authenticationServie.completeOrder({
            //        id: pid,
            //        status: 'closed'
            //    })
            //)
        }
    },
    data() {
        return{
            orderProd: [],
            close_confirmation_popup: false,
            test_dialog2: false,
            curr_order: null,
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