<script setup>
import Navigation from '@/components/Navigation.vue';
</script>
<script>
import app from '@/api/firebase';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { httpsCallable, getFunctions } from 'firebase/functions';
export default {
    name: "Registration",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        register() {
            const auth = getAuth(app);
            let uid;
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user)
                    console.log(user.uid);
                    uid = user.uid;
                    console.log(uid);
                    const functions = getFunctions(app);
                    const uploadUserID = httpsCallable(functions, 'uploadUserID');
                    console.log("uid: "+uid);
                    uploadUserID({ "uid" : uid });
                    console.log(uid);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode)
                    console.log(errorMessage)
                    alert("Email or password is incorrect, please make sure there is an \'@\' and \'.\' as well as atleast 6 characters in your password. Error message: "+ errorMessage);
                });
        }
    }
}
</script>
<template>
    <Navigation />
    <div class="loginSpotify">
    <h1>Register a new account</h1>
        <!-- Login form with email and password fields -->
        <form @submit.prevent="login">
            <input type="email" placeholder="Email" v-model="email" required>
            <input type="password" placeholder="Password" v-model="password" required>
            <button @click="register" class="btn btn-primary">Register</button>
        </form>
    </div>
</template>