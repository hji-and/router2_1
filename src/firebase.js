// Firebase 설정 파일
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase 설정 정보
// 실제 프로젝트에 맞게 수정해야 합니다
const firebaseConfig = {
  apiKey: "AIzaSyANaM8HHNzx88dKnWOoBraQPOhURBIhtFk",
  authDomain: "router-homework.firebaseapp.com",
  projectId: "router-homework",
  storageBucket: "router-homework.firebasestorage.app",
  messagingSenderId: "1032498449397",
  appId: "1:1032498449397:web:51bd8f086be22220f96ebc",
  measurementId: "G-BZWN03PTY0"
  //   apiKey: "YOUR_API_KEY",
  //   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  //   projectId: "YOUR_PROJECT_ID",
  //   storageBucket: "YOUR_PROJECT_ID.appspot.com",
  //   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  //   appId: "YOUR_APP_ID",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 데이터베이스 초기화
export const db = getFirestore(app);
export default app;
