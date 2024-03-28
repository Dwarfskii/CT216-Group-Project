<script setup>
import Navigation from '@/components/Navigation.vue';
</script>
<script>
import app from "@/api/firebase"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useRouter, useRoute } from 'vue-router'
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    created(){
        const router = useRouter();
        const auth = getAuth(app);
        console.log(auth);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("logged in");
                router.push("/Home");
            } else {
                console.log("logged out");
            }
        });
    },
    methods: {
        login() {
            const auth = getAuth(app);
            signInWithEmailAndPassword(auth, this.email, this.password).then((userCredential) => {
                // Signed in
                let user = userCredential.user;
                console.log(user);
                this.$router.push({path: '/Home'})
            }).catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                alert("Email or password is incorrect. Error message: "+errorMessage);
            });
        }
    }
}
</script>

<template>
    <Navigation />
    <div class="loginSpotify">
    <h1>Login to your account</h1>
        <!-- Login form with email and password fields -->
        <form @submit.prevent="login">
            <input type="email" placeholder="Email" v-model="email" required>
            <input type="password" placeholder="Password" v-model="password" required>
            <button @click="login" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<style>
@import '../assets/main.css';
</style>