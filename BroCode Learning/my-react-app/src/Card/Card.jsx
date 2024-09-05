import profilePic from "../assets/ProfilePic.jpg"

function Card() {

    return(
        <>
            <div className="card">
                <img 
                    alt="Profile Picture" 
                    src={profilePic} 
                    className="card-image"/>
                <h2 className="card-title">
                    Bro Code
                </h2>
                <p className="card-text">
                    I am a Full Stack Developer
                </p>
            </div>
        </>
    );

}

export default Card;