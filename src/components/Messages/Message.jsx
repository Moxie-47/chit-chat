import {auth} from '../../firebase-config';

import '../../styles/Chat.css';

export const Message = ({message}) => {
    let isSentByCurrentUser = false;

    const name = auth.currentUser.displayName;

    if (message.user === name){
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{message.user}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{message.text}</p>
                    </div>
                </div>
            )
            : (
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{message.text}</p>
                    </div>
                    <p className="sentText pl-10 ">{message.user}</p>
                </div>
            )
    );
}