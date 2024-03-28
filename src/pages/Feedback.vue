<script setup>
import Navigation from '@/components/Navigation.vue';
</script>
<script>
import app from '@/api/firebase';
import { getFunctions, httpsCallable } from "firebase/functions";

export default {
    data(){
        return{
            feedback : ''
        }
    },
    methods: {
        postFeedback() {
            console.log(this.feedback);
            const functions = getFunctions(app);
            const uploadFeedback = httpsCallable(functions, 'uploadFeedback');
            uploadFeedback({
                "feedback" : this.feedback
            })
            .then((result) => {
                console.log(result);
                alert("Thank you for sending your feedback");
            });
            this.feedback = "";
        }
    }
}
</script>
<template>
    <Navigation/>
    <div class="whiteBox">
        <h1> FEEDBACK SECTION </h1>
        <textarea class="feedbackInput" placeholder="Enter your feedback" v-model="feedback"></textarea>
        <br>
        <button class="submitFeedbackButton" @click="postFeedback">Submit Feedback</button>
    </div>
</template>

<style>
@import '../assets/main.css';
</style>