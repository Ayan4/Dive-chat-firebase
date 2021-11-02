import SignIn from "./components/SignIn";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Something went wrong</h1>;

  return <div className="App">{user ? <Chat user={user} /> : <SignIn />}</div>;
}

export default App;
