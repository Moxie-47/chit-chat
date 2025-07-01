import React, { useState, useEffect } from "react";
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { auth, db } from '../firebase-config';

export const Chat = ({ room, signOut }) => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "==", room), orderBy("createdAt"));
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, [room]);

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
    <div>
      <div>
        <h3>{room}</h3>
        <button onClick={signOut}>Log Out</button>
      </div>
      <div>
        {messages.map((msg) => (
          <div key={msg.id}>
            <b>{msg.user}:</b> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input value={newMessage} onChange={e => setNewMessage(e.target.value)} placeholder="Type message..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
