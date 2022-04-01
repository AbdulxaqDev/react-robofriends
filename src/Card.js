import React, {Component} from "react";

const Card = () => {
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5" >
            <img src='https://robohash.org/test?200x200' alt="robot friend photo" />
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
    )
}

export default Card;