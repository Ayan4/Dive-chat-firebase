import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9QNb_iFdDMpiW-6NjEnmWRuYJ7uw57ww",
  authDomain: "dive-chat-6ddd4.firebaseapp.com",
  projectId: "dive-chat-6ddd4",
  storageBucket: "dive-chat-6ddd4.appspot.com",
  messagingSenderId: "10261036016",
  appId: "1:10261036016:web:4d520cbb31511906157b35"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export { auth };
