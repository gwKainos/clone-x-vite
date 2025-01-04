import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 본인의 설정 정보 사용할 것
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);