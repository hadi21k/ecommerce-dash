import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const login = async (
  e: React.FormEvent<HTMLFormElement>,
  email: string,
  password: string
) => {
  e.preventDefault();
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("login success");
  }
};
