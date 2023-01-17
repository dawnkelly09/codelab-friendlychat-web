/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const firebaseConfig = {
  apiKey: "AIzaSyBGmVISdteHKPmjZR0ZSxv6OZ2VEoZRr2M",
  authDomain: "friendlychat-78d36.firebaseapp.com",
  projectId: "friendlychat-78d36",
  storageBucket: "friendlychat-78d36.appspot.com",
  messagingSenderId: "95895238806",
  appId: "1:95895238806:web:59458eff449306809a2ab7"
};


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}