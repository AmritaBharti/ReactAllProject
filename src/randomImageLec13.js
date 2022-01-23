import React from "react";
import ReactDOM from "react-dom";
import "./style.css"

const name = "AMRITA BHARTI";
const img1 = "https://picsum.photos/200/300"
const img2 = "https://picsum.photos/250/300"
const img3 = "https://picsum.photos/300/300"
const img4 = "https://picsum.photos/200/250"
const img5 = "https://picsum.photos/200/350"
const link = "https://www.linkedin.com/in/amrita-bharti-80299a1b8/"

ReactDOM.render(
    <>
    <h1 className ="heading">{`Hello ${name}`}</h1>
    <div className ="img_div">
        <a href={link} target="myLink">
        <img src={img1} alt = "Random image"></img>
        <img src={img2} alt = "Random image"></img>
        <img src={img3} alt = "Random image"></img>
        <img src={img4} alt = "Random image"></img>
        <img src={img5} alt = "Random image"></img>
        </a>
    </div>

    </>,
    document.getElementById("root")
)