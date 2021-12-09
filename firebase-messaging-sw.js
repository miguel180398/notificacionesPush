importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js'); 
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"); 


const firebaseConfig = {
          apiKey: "AIzaSyA-MKzbTOyPC73xOJZ2EjBi5KqHArwcBaE",
          authDomain: "pruebanotificacionespush-f9ef1.firebaseapp.com",
          databaseURL: "https://pruebanotificacionespush-f9ef1-default-rtdb.firebaseio.com",
          projectId: "pruebanotificacionespush-f9ef1",
          storageBucket: "pruebanotificacionespush-f9ef1.appspot.com",
          messagingSenderId: "444419119429",
          appId: "1:444419119429:web:d9ccd1cc778de55f66862c"
        };
        firebase.initializeApp(firebaseConfig);

        const messaging =firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log('Handling background message ', payload);

  return self.registration.showNotification(payload.data.title, {
    body: payload.data.body,
    icon: payload.data.icon,
    tag: payload.data.tag,
    data: payload.data.link,
  });
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(self.clients.openWindow(event.notification.data));
});
