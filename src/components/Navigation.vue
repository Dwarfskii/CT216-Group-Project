<script>
import app from "@/api/firebase";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import * as functions from "@/main";

export default {
    name: "Navigation",
    data() {
        return {
            isLoggedIn: false
        }
    },
    created() {
        // Check if the user is logged in
        const auth = getAuth(app);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                this.isLoggedIn = true;
            } else {
                this.isLoggedIn = false;
            }
        });
    },
    methods: {
        logout() {
            signOut(getAuth(app)).then(() => {
                // Send them back to the home page!
                this.$router.push("/");
                functions.removeTokens();
            });
        }
    }
}
</script>

<template>
    <ul>
        <li v-if="!isLoggedIn"><router-link to="/">Login</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/Registration">Registration</router-link></li>
        <li v-if="isLoggedIn"><router-link to="/Home">Home</router-link></li>
        <li v-if="isLoggedIn"><router-link to="/Search">Search</router-link></li>
        <li v-if="isLoggedIn"><router-link to="/Trending">Trending</router-link></li>
        <li v-if="isLoggedIn"><router-link to="/Feedback">Feedback</router-link></li>
        <li v-if="isLoggedIn"><router-link to="/Contact">Contact Us</router-link></li>
        <li v-if="isLoggedIn"><router-link @click="logout" to="/">Logout</router-link></li>
    </ul>
</template>