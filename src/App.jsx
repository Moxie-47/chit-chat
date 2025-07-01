import React, { useState, useRef } from "react";
import { Auth } from "./components/Auth";
import { Chat } from "./components/Chat";
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState("");
  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };

  if (!isAuth) {
    return <Auth setIsAuth={setIsAuth} />;
  }

  return (
    <>
      {room ? (
        <Chat room={room} signOut={signUserOut} />
      ) : (
        <div>
          <input ref={roomInputRef} placeholder="Room" />
          <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
          <button onClick={signUserOut}>Log Out</button>
        </div>
      )}
    </>
  );
}

export default App;
