import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCLpBcGtN8p_HB3xheq--gYWrXJgUvBLqQ",
  authDomain: "blog-images-anv.firebaseapp.com",
  projectId: "blog-images-anv",
  storageBucket: "blog-images-anv.appspot.com",
  messagingSenderId: "557761242521",
  appId: "1:557761242521:web:27c5b5f9149112697d1f08",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
