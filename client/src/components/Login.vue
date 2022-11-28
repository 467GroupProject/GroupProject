<template>
    <v-card class="mx-auto px-6 py-8" max-width="344">
        <v-form
            v-model="form"
            @submit.prevent="onSubmit"
        >
            <v-text-field
            v-model="email"
            :rules="[() => !!email || 'This field is required']"
            class="mb-2"
            clearable
            label="Email"
            ></v-text-field>

            <v-text-field
            v-model="password"
            :rules="[() => !!password || 'This field is required']"
            clearable
            label="Password"
            placeholder="Enter your password"
            ></v-text-field>

            <br>

            <v-btn
            :disabled="!form"
            block
            color="success"
            size="large"
            type="submit"
            variant="elevated"
            >
            Log In
            </v-btn>
        </v-form>
    </v-card>
  </template>
<script lang="ts">
export default{
    data(){
        return{
            form: '',
            email: '',
            password: '',
        }
    }
}
</script>