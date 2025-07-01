import back from '../../src/icons/back.png';
import logout from '../../src/icons/logout.png';
import "../styles/Chat.css";

export const InfoBar = ({room, signOut}) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <div
                    onClick={() => {window.location.reload(false)}}
                    className="backIcon"
                >
                    <a href='/'>
                        <img src={back} alt="back icon" />
                    </a>
                </div>
                <h3>{room.toUpperCase()}</h3>
            </div>
            <div className="rightInnerContainer">
                <div onClick={signOut}>
                    <a href='/'>
                        <img src={logout} alt="logout icon" />
                    </a>
                </div>
                
            </div>
        </div>
    );
}