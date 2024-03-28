<script setup>
import Navigation from '@/components/Navigation.vue';
</script>
<script>
import app from "@/api/firebase"
import { getAuth } from "firebase/auth";
import * as jsFunctions from '@/main';
import { httpsCallable, getFunctions } from 'firebase/functions';
import { accessToken, refreshToken } from '@/main';
export default {
    data() {
        return {
            topArtists: [],
            topTracks: [],
            profileName: "You have not connected your Spotify account"
        }
    },
    mounted() {
        jsFunctions.getTopArtists(this);
        jsFunctions.getTopTracks(this);
        jsFunctions.fetchProfile(this);
        this.getRefr();
    },
    methods: {
        async getRefr(){
            const auth = getAuth();
            const uid = auth.currentUser.uid;
            const functions = getFunctions(app);
            console.log("Refresh token:"+refreshToken);
            if(await jsFunctions.checkTokens(refreshToken)){
                console.log("uploading refresh token");
                const addSpotifyRefreshToken = httpsCallable(functions, 'addSpotifyRefreshToken');
                addSpotifyRefreshToken({ "uid" : uid, "refreshToken" : refreshToken });
                jsFunctions.getTopArtists(this);
                jsFunctions.getTopTracks(this);
                jsFunctions.fetchProfile(this);
            }
        }
    }
}
</script>

<template>

    
    <head>
        <title> Home Page</title>
        <link rel="stylesheet" type="text/css" href="software dev test.css">
    </head>

    <body>
        <Navigation />
        <div class="whiteBox">
        <header class="mainSubject">
            <h1>Spotify</h1>
            
            
        </header>
        <h2 id="displayName">{{ profileName }}</h2>
            
        <button type="button" class="btn btn-primary, spotify" @click="jsFunctions.connectAcc">Connect Spotify Account</button>
        </div>
        <br>
        <br>
        <div>
            <table class="example">
                <tr class="example">
                    <th class="example">
                        <h1>Top 5 Artists</h1>
                    </th>
                    <th class="example">
                        <h1 class="songs">Top 5 Tracks</h1>
                    </th>
                </tr>
                <tr class="example">
                    <td>
                        <table>
                            <tr class="info">
                                <th class="info">Picture</th>
                                <th class="info">Name</th>
                                <th class="info">Genres</th>
                            </tr>
                            <tr class="info" v-for="(artist, index) in topArtists" :key="index">
                                <td class="info" ><img :src="artist.images[0].url" class="centre"></td>
                                <td class="info">{{ artist.name }}</td>
                                <td class="info"> Genres: {{  artist.genres.join(", ") }}
                                </td> 
                            </tr>
                        </table>
                    </td>
                    <td>
                        <table>
                            <tr class="info">
                                <th class="info">Album Photo</th>
                                <th class="info">Song Name</th>
                                <th class="info">Artist</th>
                            </tr>
                            <tr class="info" v-for="(track, index) in topTracks" :key="index">
                                <td class="info" ><img :src="track.album.images[0].url" class="centre"></td>
                                <td class="info">{{ track.name }}
                                <audio controls :src="track.preview_url" type="audio/mpeg"></audio></td>
                                <td class="info"> {{  track.artists[0].name }}
                                </td> 
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </body>
</template>