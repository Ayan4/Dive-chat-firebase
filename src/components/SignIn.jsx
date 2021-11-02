import {
  GoogleAuthProvider,
  signInWithRedirect
  // onAuthStateChanged,
  // getRedirectResult
} from "firebase/auth";
import { auth } from "../firebase";

function SignIn() {
  const provider = new GoogleAuthProvider();
  const signInHandler = () => {
    signInWithRedirect(auth, provider);
  };

  return (
    <div>
      <button className="px-4 py-3 bg-pink-400 m-8" onClick={signInHandler}>
        Sign in with Google
      </button>
    </div>
  );
}

export default SignIn;
