import ScrollToBottom from "react-scroll-to-bottom";
import { Message } from "./Message";

import '../../styles/Chat.css';

export const Messages = ({messages}) => {
    return (
        <ScrollToBottom className="messages">
            {messages.map((message) => <div key={message.id}><Message message={message}/></div>)}
        </ScrollToBottom>
    );
}