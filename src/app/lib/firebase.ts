// lib/firebase.ts
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCjZdCYsSwRo09XRHuloJxNt9rNNZwbWYw',
  authDomain: 'wedding-aed58.firebaseapp.com',
  projectId: 'wedding-aed58',
  storageBucket: 'wedding-aed58.appspot.com',
  messagingSenderId: '539945611731',
  appId: '1:539945611731:web:282e6d4c6f265b1c293f26',
  measurementId: 'G-VWK765Y41Y',
}

const app = initializeApp(firebaseConfig)

export const storage = getStorage(app)
export const db = getFirestore(app)
