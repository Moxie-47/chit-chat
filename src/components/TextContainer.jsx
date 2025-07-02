import "../styles/Chat.css";

export const TextContainer = () => {
    return (
        <div className="textContainer">
            <div>
                <h1>Samvaad <span role="img" aria-label="emoji">💬</span></h1>
                <h2>Real Time Chat Application</h2>
                <h2>- Created with React, Firebase, and <span role="img" aria-label="emoji">❤️</span></h2>
                <h2>- Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
                <br/><br/><br/>
                <p>Created by: <a href="https://github.com/moxie-47" style={{textDecoration: 'none', color: '#2979FF'}}>Prashant</a></p>
            </div>
        </div>
    );
}