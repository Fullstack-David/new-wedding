import { auth } from "@/app/firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";

export async function sendResetEmail(email: string): Promise<void> {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Återställningsmail skickat!");
  } catch (error) {
    console.error("Fel vid utskick av mail:", error);
    throw error;
  }
}
