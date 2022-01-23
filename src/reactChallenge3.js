import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

var time = new Date(2022,1,22,5);
time = time.getHours();

const greetingArea ={
    border: '1px solid pink',
    height:'100px',
    width:'400px',
    margin:'auto',
    marginTop:'15%',
    borderRadius:'28%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'lightpink'

}
var lg ={
    color:'yellow'
}

var lastGreet ="xyz";

if(time >=1 && time <12){
    lastGreet =" Morning";
    lg.color ='green'
}
else if(time >=12 && time <19){
    lastGreet ="After Noon";
    lg.color ='orange'
}
else{
    lastGreet ="Night"
    lg.color ='black'
}

ReactDOM.render(
    <>
    <div style={greetingArea}>
     <h1>Hello Maim ,</h1>   
    <h1 style={{color:'red',padding:'10px 10px'}}>Good</h1>
    <h1 style={lg}>{`${lastGreet}`}</h1>
    </div>
    </>,
    document.getElementById("root")
);

// if(time === "12:00:00" && time <= "11:00:00"){
//     ReactDOM.render(
//         <>
//         <div style={greetingArea}>
//         <h1 style={{color:'cayan'}}>Good</h1>
//         <h1 style={{color:'green'}}>Morning</h1>
//         </div>
//         </>,
//         document.getElementById("root")
//     );
// }
// else if(time > "11:59:59" && time <= "19:00:00"){
//     ReactDOM.render(
//         <>
//         <div style={greetingArea}>
//         <h1 style={{color:'cayan'}}>Good</h1>
//         <h1 style={{color:'orange'}}>AfterNoon</h1>
//         </div>
//         </>,
//         document.getElementById("root")
//     );

// }
// else{
//     ReactDOM.render(
//         <>
//         <div style={greetingArea}>
//         <h1 style={{color:'cayan'}}>Good</h1>
//         <h1 style={{color:'black'}}>Night</h1>
//         </div>
//         </>,
//         document.getElementById("root")
//     );



