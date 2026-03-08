// ╔══════════════════════════════════════════════════════════════════════╗
// ║  Firebase 설정 — ISAplan                                             ║
// ╚══════════════════════════════════════════════════════════════════════╝

import { initializeApp }              from 'https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js';
import { getAuth, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js';
import { getFirestore }                from 'https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js';
import { getAnalytics }                from 'https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js';

const firebaseConfig = {
  apiKey:            "AIzaSyBv_MfhYNgHmiul8osGR_tlNoms8e08D_g",
  authDomain:        "isaplan-6a20c.firebaseapp.com",
  projectId:         "isaplan-6a20c",
  storageBucket:     "isaplan-6a20c.firebasestorage.app",
  messagingSenderId: "410607299778",
  appId:             "1:410607299778:web:2a104acd969342c7509f5b",
  measurementId:     "G-5KTXXFX336",
};

const app = initializeApp(firebaseConfig);

export const auth           = getAuth(app);
export const db             = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const analytics      = getAnalytics(app);
