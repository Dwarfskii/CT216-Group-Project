import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createMemoryHistory }
from 'vue-router';
import routes from './router/routes';
import './assets/main.css'

let router = createRouter({
    history: createMemoryHistory(),
    routes: routes
});
const clientId = "a0c0387b7bb54be7b9794e2a3a0406af";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

let accessToken = localStorage.getItem('access_token');
let refreshToken = localStorage.getItem('refresh_token');

export { accessToken, refreshToken };

const app = createApp(App)
app.use(router);
app.mount('#app');


console.log(code);
console.log(localStorage.getItem('access_token'));
console.log(accessToken);
console.log(localStorage.getItem('refresh_token'));




// Check if a spotify code is in the url
if(!code){
    console.log("Checking for refresh token");
    console.log(await checkTokenWithRefresh(accessToken, refreshToken));
} else { // If code exists, check localstorage for an accessToken, if not, get a new one from code
    console.log("Getting access token");
    const codeVerify = await getAccessToken(clientId, code);
    if (codeVerify){
        accessToken = codeVerify;
        refreshToken = localStorage.getItem('refresh_token');
    } else {
        checkTokenWithRefresh(accessToken, refreshToken);
        accessToken = localStorage.getItem('access_token');
        refreshToken = localStorage.getItem('refresh_token');
    }
    console.log(accessToken);
}
// Check if access token is valid
async function checkTokenWithRefresh(access_token, refresh_token) {
  
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + access_token
      }
    });
    
    const data = await response.json();
    console.log(data.error);
    if (data.error != undefined){
        console.log("Access token invalid");
        getRefreshToken(refresh_token);
        return false;
    } else { return true }
}

export async function checkTokens(refresh_token) {
  
    const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
        Authorization: 'Bearer ' + accessToken
        }
    });
    console.log(refresh_token);
    const data = await response.json();
    if (data.error != undefined){
        console.log("Access token invalid");
        await getRefreshToken(refresh_token);
        accessToken = localStorage.getItem('access_token');
        refreshToken = localStorage.getItem('refresh_token');
        return false;
    } else { return true }
}
// Redirect to spotify and get access token
export async function connectAcc(){
    removeTokens();
    await redirectToAuthCodeFlow(clientId);
    accessToken = await getAccessToken(clientId, code);
    refreshToken = localStorage.getItem('refresh_token');
    console.log(accessToken);
}

async function redirectToAuthCodeFlow(clientId){
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "https://test-5a9bd.web.app/callback");
    params.append("scope", "user-read-private user-read-email user-top-read");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

async function getAccessToken(clientId, code){
    const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "https://test-5a9bd.web.app/callback");
    params.append("code_verifier", verifier);

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
    });
    const response = await result.json();
    console.log(response);
    const access_token = response.access_token;
    if (!response.error){
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);
        console.log(localStorage.getItem('access_token'));
        console.log(localStorage.getItem('refresh_token'));
    }
    return access_token;
}
// Use a refresh token to get a new access token
async function getRefreshToken(refresh_token) {

    // refresh token that has been previously stored
    const url = "https://accounts.spotify.com/api/token";
 
     const payload = {
       method: 'POST',
       headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
       },
       body: new URLSearchParams({
         grant_type: 'refresh_token',
         refresh_token: refresh_token,
         client_id: clientId
       }),
     }
     const body = await fetch(url, payload);
     const response = await body.json();
     console.log(refresh_token);
     console.log(response);
     localStorage.setItem('access_token', response.access_token);
     localStorage.setItem('refresh_token', response.refresh_token);
     console.log("New access token: "+localStorage.getItem('access_token'));
     console.log("New refresh token: "+localStorage.getItem('refresh_token'));
   }
// Get profile details
export async function fetchProfile(vueInstance) {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${accessToken}` }
    });

    const output = await result.json();
    console.log(output);
    if (output.error != undefined){
        vueInstance.profileName = "You have not connected your Spotify account";
        console.log("fetchProfile() error");
    }
    else{
        vueInstance.profileName = output.display_name;
    }
    console.log(output.display_name);
}

export async function getTopArtists(vueInstance){
    const result = await fetch("https://api.spotify.com/v1/me/top/artists", {
        method: "GET", headers: { Authorization: `Bearer ${accessToken}`}
    });
    const output = await result.json();
    vueInstance.topArtists = output.items.slice(0, 5);
}

export async function getTopTracks(vueInstance){
    const result = await fetch("https://api.spotify.com/v1/me/top/tracks", {
        method: "GET", headers: { Authorization: `Bearer ${accessToken}`}
    });
    const output = await result.json();
    vueInstance.topTracks = output.items.slice(0, 5);
}

export async function searchTrack(parameters, vueInstance){
    const result = await fetch("https://api.spotify.com/v1/search?q="+parameters+"&type=track", {
        method: "GET", headers: { Authorization: `Bearer ${accessToken}`}
    });
    const output = await result.json();
    console.log(output);
    vueInstance.searchResultTrack = output.tracks.items.slice(0, 5);
}

export async function searchTrackforTrending(parameters, vueInstance, index){
        const result = await fetch("https://api.spotify.com/v1/search?q="+parameters+"&type=track", {
            method: "GET", headers: { Authorization: `Bearer ${accessToken}`}
        });
        const output = await result.json();
        console.log(output);
        vueInstance.trackImage[index] = output.tracks.items[0].album.images[0].url;
}

export async function searchArtist(parameters, vueInstance){
    const result = await fetch("https://api.spotify.com/v1/search?q="+parameters+"&type=artist", {
        method: "GET", headers: { Authorization: `Bearer ${accessToken}`}
    });
    const output = await result.json();
    console.log(output);
    vueInstance.searchResultArtist = output.artists.items.slice(0, 5);
}

export function removeTokens(){
    console.log("Tokens removed");
    localStorage.setItem('access_token', null);
    localStorage.setItem('refresh_token', null);
    accessToken = null;
    refreshToken = null;
}