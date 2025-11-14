// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBLd5AduriTjMVeX4tAL0J-Hh4pWJ84s2k",
  authDomain: "collage-project-f641d.firebaseapp.com",
  projectId: "collage-project-f641d",
  storageBucket: "collage-project-f641d.firebasestorage.app",
  messagingSenderId: "716092619839",
  appId: "1:716092619839:web:7bf0cb23898c367ea0cc8a"
});
// U2hhc2hhbmsgR293ZGEgbmIgJiAoQ0tQKSBtYQ==
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("📩 Background message received:", payload);
  const { title, body } = payload.notification || {};
  const notificationTitle = title || "New Message";
  const notificationOptions = {
    body: body || "You have a new message",
    icon: "/logo.png",
    badge: "/logo.png"
  };

  // ✅ Must return promise
  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// U2hhc2hhbmsgR293ZGEgbmIgJiAoQ0tQKSBtYQ== <!-- Project by cp08 Shashank Gowda NB | Class Head Chrissi K (CKP) -->