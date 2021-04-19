import React from "react"
import adPic from "../Images/KW66.jpg"


const Advertisement = () => {
    return (
        <div>
        <img src={adPic} height={360} width={1290} style={{
          paddingTop: 20,
          paddingLeft:85,
        }} alt=""/>
      </div>
    );
}
export default Advertisement;