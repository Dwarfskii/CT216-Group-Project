<script setup>
import Navigation from '../components/Navigation.vue';
</script>
<script>
import * as functions from '@/main.js';
export default {
    data() {
        return {
            searchResultTrack: [],
            searchResultArtist: [],
            input: ''
        }
    },
    methods: {
        async searchTrack(){
            console.log(this.input)
            await functions.searchTrack(this.input, this);
            console.log(this.searchResultTrack);
        },
        async searchArtist(){
            console.log(this.input)
            await functions.searchArtist(this.input, this);
            console.log(this.searchResultArtist);
        }
    }
}
</script>
<template>
    <Navigation />
    <div class="searchArtist" v-if="searchArtist">
    <h1>Search</h1>
    <!-- Search form with input field -->
      <input type="text" placeholder="Search" v-model="input" required>
      <div>
        <button type="submit" @click="searchTrack">Search for Track</button>
        <button type="submit" @click="searchArtist">Search for Artist</button>
      </div>
<br>
<br>
<table class="example">
            <tr class="example">
                <th class="example">
                    <h1>Tracks</h1>
                </th>
                <th class="example">
                    <h1 class="songs">Artists</h1>
                </th>
            </tr>
            <tr class="example">
                <td>
                    <table>
                        <tr class="info">
                            <th class="info">Picture</th>
                            <th class="info">Name</th>
                        </tr>
                        <tr class="info" v-for="(output, index) in searchResultTrack" :key="index">
                            <td class="info" ><img :src="output.album.images[0].url" class="centre"></td>
                            <td class="info">{{ output.name }}</td>
                        </tr>
                    </table>
                </td>
                <td>
                    <table>
                        <tr class="info">
                            <th class="info">Picture</th>
                            <th class="info">Name</th>
                        </tr>
                        <tr class="info" v-for="(output, index) in searchResultArtist" :key="index">
                            <td class="info" ><img :src="output.images[0].url" class="centre"></td>
                            <td class="info">{{ output.name }}</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
  </div>
</template>