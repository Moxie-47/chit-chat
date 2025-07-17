import {auth, provider} from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';

import "../styles/Join.css";

import Cookies from 'universal-cookie';
const cookies = new Cookies()

export const Auth = ({setIsAuth}) => {
    
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">sumvaad</h1>
                <button 
                    className={'button mt-20'} type="submit" onClick={signInWithGoogle}
                    style={{cursor : 'pointer'}}
                >Sign In
                </button>
            </div>
        </div>
    );
}
