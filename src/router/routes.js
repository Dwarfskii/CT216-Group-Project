import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../api/firebase"

function isAuth(to, from, next) {
    console.log("Checking auth");
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user);
            // User is signed in so continue to desired page
            return next();
            // ...
        } else {
            // User is signed out
            // Send them back to the home page or maybe the login page
            return next({ path: '/Login' });
        }
    });
}

function loadPage(component) {
    // '@' is aliased to src/components
    return () => import(/* webpackChunkName: "[request]" */
        `@/pages/${component}.vue`)
}

export default [
    { path: '/', component: loadPage('Login') },
    { path: '/PageTwo', component: loadPage('PageTwo') },
    { path: '/Blog', component: loadPage('Blog') },
    { path: '/Registration', component: loadPage('Registration') },
    { path: '/Home', component: loadPage('Home') },
    { path: '/Secure', component: loadPage('Secure') },
    { path: '/Search', component: loadPage('Search')},
    { path: '/Trending', component: loadPage('Trending')},
    { path: '/Feedback', component: loadPage('Feedback')},
    { path: '/Contact', component: loadPage('Contact')}
]