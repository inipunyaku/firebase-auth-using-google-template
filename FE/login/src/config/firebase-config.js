// firebase-config.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDxsDvPCBkDCAhGddZ0qyIdEwxLdcVSo_0",
  authDomain: "kelompok-keahlian.firebaseapp.com",
  projectId: "kelompok-keahlian",
  storageBucket: "kelompok-keahlian.appspot.com",
  messagingSenderId: "44042625667",
  appId: "1:44042625667:web:55d66d392a2949182571b6",
  measurementId: "G-WREV77H45S",
};

const app = initializeApp(firebaseConfig);

export { app };
