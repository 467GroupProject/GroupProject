<template>
    <v-card class="mx-auto text-center" max-width="500px">
        <v-card-title>Register</v-card-title>
        <v-text-field
            type="email"
            name="email"
            placeholder="email"
            v-model="email"

        />
        <v-card-text></v-card-text>
        <v-text-field
            type="password"
            name="password"
            placeholder="password"
            v-model="password"
        />
        <v-card-text></v-card-text>
        <v-btn @click="register">
            <font-awesome-icon icon="fa-sold fa-user-plus" />
            &nbsp;Register</v-btn>
        <v-card-text></v-card-text>
    </v-card>

</template>

<script lang="ts">
import authenticationService from '@/services/authenticationService';
import { useUserStore } from '@/stores/userStore';
const userStore = useUserStore();

export default{
    setup(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        async register(){
            const response = await authenticationService.register({
                email: this.email,
                password: this.password,
                status: 'customer'
            })
            console.log(response.data)
        }
    }
}
</script>