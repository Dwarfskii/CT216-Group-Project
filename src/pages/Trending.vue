<script setup>
import Navigation from '@/components/Navigation.vue';
</script>

<template>
    <Navigation />

        <table class="example">
            <tr class="example">
                <h1>Trending Songs from LastFM</h1>
            </tr>
            <tr class="example">
                <td>
        <table class="info2">
          <thead>
            <tr class="info">
              <th class="info">Picture</th>
              <th class="info">Song Name</th>
              <th class="info">Artist name</th>
            </tr>
          </thead>
          <tr class="info" v-for="song in songs" :key="song.id">
            <td class="info"><img :src="song.image" :alt="song.songName" class="centre"></td>
            <td class="info">{{ song.songName }}</td>
            <td class="info">{{ song.artist }}</td>
          </tr>
        </table>
                </td>
            </tr>
        </table>
</template>

<script>
import * as functions from "@/main";

export default {
  data() {
    return {
      songs: [],
      trackImage: []
    }
  },
  mounted() {
    fetch("https://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&limit=10&api_key=d748d4cd70fc353d795543ac56292dd8&format=json&format=json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch top tracks data.");
        }
        return response.json();
      })
      .then(async data => {
        for (let i = 0; i < 10; i++){
          console.log("i: "+i+" "+data.tracks.track[i].name);
          await functions.searchTrackforTrending(data.tracks.track[i].name, this, i);
          console.log(this.trackImage[i]);
          this.songs = data.tracks.track.map((track, i) => ({
            image: this.trackImage[i],
            songName: track.name,
            artist: track.artist.name,
            id: i + 1,
          }));
        };
      })
      .catch(error => {
        console.error("Failed to load data:", error);
      });
  }
}
</script>

<style>
@import '../assets/main.css';
</style>