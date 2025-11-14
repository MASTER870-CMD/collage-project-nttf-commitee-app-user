// functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.sendPushOnMessage = functions.firestore
  .document("messages/{messageId}")
  .onCreate(async (snap, context) => {
    const messageData = snap.data();
    const payload = {
      notification: {
        title: messageData.title,
        body: messageData.body,
      },
    };

    // Get all user tokens
    const tokensSnapshot = await admin.firestore().collection("userTokens").get();
    const tokens = tokensSnapshot.docs.map((doc) => doc.data().token);

    if (tokens.length > 0) {
      await admin.messaging().sendToDevice(tokens, payload);
      console.log("✅ Notifications sent to", tokens.length, "users.");
    }
  });
