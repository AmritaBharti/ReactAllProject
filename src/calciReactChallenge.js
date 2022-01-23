import React from "react";
import ReactDOM from "react-dom";
import {add,sub,mul,div} from "./AppCalciCh"

ReactDOM.render(
    <>
 <h1>Hello Amrita</h1>,
 <ol>
     <li>Sum of Two Number is      {add(20.6,10)}</li>
     <li>Subtract of Two Number is {sub(20,10)}</li>
     <li>Multifly of Two Number is {mul(20,10)}</li>
     <li>Division of Two Number is {div(207,10)}</li>    
 </ol>
 </>,
 document.getElementById("root")   
);