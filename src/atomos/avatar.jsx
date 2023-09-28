import React from "react";

function Avatar ({imageSrc,description}){
    return(
        <div className="Avatar">
            <img src={imageSrc} alt={description} width="600px" height="400px"/>
        </div>
    )
}

export default Avatar;