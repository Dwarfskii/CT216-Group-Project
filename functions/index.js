/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
// Callback function -- please run this code for me Firebase when a request is made
exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});

exports.echofunction = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        response.send(request.query.data);
    })
});

exports.postcomment = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        const currentTime = admin.firestore.Timestamp.now();
        request.body.timestamp = currentTime;
        return admin.firestore().collection('comments').add(request.body).then((
        ) => {
            response.send({ data: "Saved in the database" });
        });
    })
});

exports.securefunction =
    functions.https.onCall((data, context) => {
        // context.auth contains information about the user, if they are logged in etc.
        if(typeof context.auth === undefined)
        {
            // request is made from user that is logged in
            return "User is logged in"
        }
        else
        {
            return "User is not logged in"
        }
});

exports.uploadUserID = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        const uid = request.body.data.uid;
        return admin.firestore().collection('Users').doc(uid).set(request.body.data)
            .then(() => {
                response.send({ data :"Saved in the database" });
            })
            .catch(error => {
                console.error("Error writing document:", error);
                response.send({ error : error.message });
            });
    });
});

exports.addSpotifyRefreshToken = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        const uid = request.body.data.uid;
        const refreshToken = request.body.data.refreshToken;
        return admin.firestore().collection('Users').doc(uid).update({"spotifyRefreshToken" : refreshToken})
            .then(() => {
                response.send({ data: "Returned successfully!" });
            })
            .catch(error => {
                console.error("Error returning document:", error);
                response.send({ error : error.message });
            });
    });
});

exports.getRefreshToken = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        const uid = request.body.data.uid;
        const docRef = admin.firestore().collection('Users').doc(uid)
        const docSnapshot = await docRef.get();
        console.log(docSnapshot);
        const refreshToken = docSnapshot.data();
        console.log(refreshToken);
        response.send({ data: refreshToken });
    });
});

exports.uploadFeedback = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        const currentTime = admin.firestore.Timestamp.now();
        request.body.data.timestamp = currentTime;
        return admin.firestore().collection('Feedback').add(request.body.data)
            .then(() => {
                response.send({ data: "Uploaded successfully!" });
            });
    });
});


