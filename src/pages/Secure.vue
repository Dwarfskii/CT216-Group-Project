<script setup>
import Navigation from '@/components/Navigation.vue';
</script>
<script>
import app from '../api/firebase';
import { getFunctions, httpsCallable, connectFunctionsEmulator }
    from "firebase/functions";
export default {
    name: "Secure",
    created() {
        // Call secure function and load some data
        const functions = getFunctions(app);
        if (window.location.hostname === 'localhost') // Checks if working locally
        connectFunctionsEmulator(functions, "localhost", 5001);
        const secureFunction = httpsCallable(functions, 'securefunction');
        secureFunction()
            .then((result) => {
                // Read result of the Cloud Function.
                /** @type {any} */
                console.log(result);
            });
    }
}
</script>
<template>
    <Navigation />
</template>