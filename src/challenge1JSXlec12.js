import React from "react";
import ReactDOM from "react-dom";

const fn = "Amrita";
const ln = "Bharti";

var todayDate = new Date().toLocaleDateString();
var todayTime = new Date().toLocaleTimeString();

// today.getHours() – This uses the today variable to display the current hour. This uses a 24-hour clock.
// today.getMinutes() – Displays the current minute reading.
// today.getSeconds() – Displays the current seconds reading.

ReactDOM.render(
    <>
    <h1>{ `My name is ${fn} and my last name is ${ln}`}</h1>
    <p> {`Current Date is ${todayDate}`}</p>
    {/* <p>{`current time is ${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`}</p>  */}
    <p>{`Current time is ${todayTime}`}</p>
    </>,
    document.getElementById("root")
);