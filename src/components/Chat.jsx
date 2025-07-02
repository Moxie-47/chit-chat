import React, { useState, useEffect } from "react";
import {addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy} from 'firebase/firestore';
import { auth, db} from '../firebase-config';

import { InfoBar } from "./InfoBar";
import { Messages } from "./Messages/Messages";
import { TextContainer } from "./TextContainer";
import "../styles/Chat.css"; 

export const Chat = ({room, signOut}) => {
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const messagesRef = collection(db, "messages");

    useEffect(() => {
        const queryMessages = query(messagesRef, where("room", "==", room), orderBy("createdAt"));
        const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id});
            });
            setMessages(messages);
        });
        return () => unsuscribe();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newMessage === "") return;

        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        });

        setNewMessage("");
    };

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room = {room} signOut = {signOut}/>

                <Messages messages={messages}/>

                <form onSubmit={handleSubmit} className="form">
                    <input 
                        className="input" 
                        placeholder="Type message..."
                        onChange={(e) => setNewMessage(e.target.value)}
                        value={newMessage}
                    />
                    <button type="submit" className="sendButton">
                        Send
                    </button>
                </form>
            </div>
            <TextContainer/>
        </div>
    );
}