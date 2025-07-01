import React, {useState, useRef} from "react";

import "./App.css";
import "./styles/Join.css";

import { Auth } from "./components/Auth";
import { Chat } from "./components/Chat";

import {signOut} from 'firebase/auth';
import {auth} from './firebase-config';

import Cookies from 'universal-cookie';
const cookies = new Cookies()

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
    return (
      <div>
        <Auth setIsAuth = {setIsAuth}/>
      </div>
    );
  }

  return (
  <>
    {room ? (
    <div>
      <Chat room = {room} signOut = {signUserOut}/>
    </div>
    ) : (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join Room</h1>
        <div>
          <input 
            placeholder="Room" 
            className="joinInput mt-20" 
            type="text" 
            ref={roomInputRef} />
        </div>

        <button 
          className={'button mt-20'} 
          onClick={() => setRoom(roomInputRef.current.value)}
          style={{cursor: 'pointer'}}
        >Enter Chat
        </button>

        <button 
          className={'button-red mt-20'} 
          onClick={signUserOut}
          style={{cursor : 'pointer'}}
        >Log Out
        </button>
      </div>
    </div>
    )}
  </>
  );
}

export default App;
