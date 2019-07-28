const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

exports.storage = functions.https.onRequest(async (req, res) => {
  const decodedToken = await admin.auth().verifyIdToken(req.query.token);
  const { uid } = decodedToken;

  const files = await admin
    .storage()
    .bucket()
    .getFiles({ prefix: `users/${uid}/plants` });

  if (!files || !files.length) {
    res.send(JSON.stringify({ storage: 0 }));
  } else {
    res.send(
      JSON.stringify({
        storage: files
          .map(file => console.log(file.metadata) || Number(1))
          .reduce((a, b) => a + b, 0)
      })
    );
  }
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
