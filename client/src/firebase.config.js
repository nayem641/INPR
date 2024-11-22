// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCuifsxlUAtel39ApnTX6OWdSoLjPQloTA",
//   authDomain: "inprbook.firebaseapp.com",
//   projectId: "inprbook",
//   storageBucket: "inprbook.appspot.com",
//   messagingSenderId: "850628140844",
//   appId: "1:850628140844:web:c1f4dc36df50f43d041689",
// };

// const inprDB = initializeApp(firebaseConfig);
// export default 



// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAWhzc5qrDWxNpueUl9iGDJ6beNd3-TBlk",
  authDomain: "inpr-e0814.firebaseapp.com",
  projectId: "inpr-e0814",
  storageBucket: "inpr-e0814.firebasestorage.app",
  messagingSenderId: "1009214148935",
  appId: "1:1009214148935:web:7158df3cb1fdd71825bc62"
};

const app = initializeApp(firebaseConfig);
const inprDB= getFirestore(app);
const storage = getStorage(app);

export { inprDB, storage };
