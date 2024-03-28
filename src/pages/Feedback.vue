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
            });
        }
    }
}
</script>
<template>
    <Navigation/>
    <h1> FEEDBACK SECTION </h1>
    <div class="feedbackBox">
        <textarea class="feedbackInput" placeholder="Enter your feedback" v-model="feedback"></textarea>
        <button class="submitFeedbackButton" @click="postFeedback">Submit Feedback</button>
    </div>
</template>

<style>
@import '../assets/main.css';
</style>