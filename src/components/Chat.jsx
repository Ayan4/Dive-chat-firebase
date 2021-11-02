import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Chat({ user }) {
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("signed out");
      })
      .catch(error => {
        // An error happened.
        console.log("error occured in signing out");
      });
  };

  return (
    <div className="border border-red-500 p-5 m-auto flex flex-col items-start">
      <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="dp" />
      <p>Name: {user.displayName}</p>
      <p>email: {user.email}</p>
      <button
        onClick={signOutHandler}
        className="px-4 py-3 bg-gray-600 m-8 text-white"
      >
        Sign Out
      </button>
      <p>Some content</p>
    </div>
  );
}

export default Chat;
