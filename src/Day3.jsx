// State in react Js


// .Why state required
// .What is state
// .How to use state
// .What are hooks
// .Example of state
// .State in different Component
// .Multiple states

// State 1
import React, { Component, use, useState } from "react";

function States(){
    const [fruit,setFruit]=useState("Orange")
    const HandleFunctions=()=>{
        setFruit("Apple")
    }
    return(
        <>
            <h2>States in React Js</h2>
            <h3>{fruit}</h3>
            <button onClick={HandleFunctions}>Change Fruit</button>
            <br /><br />
        </>
    )
}
export default States;  

// state2 or Example 2:

export function StateExample(){

    const[Count,SetCount]=useState(0);
    const HandleSetCount=()=>{
        SetCount(Count+1);    
    }
    return(
        <div>
            <h2>Count: {Count}</h2>
            <button onClick={HandleSetCount}>Update Count</button>
            <br /><br />
        </div>
    )
}



// Toggle or hide and show in React

// .Define state
// .Update state on button click
// .add condition for Toggle
// .hide and show Component
// .task for you
// .interview question

export function Toggle(){
    const [Btn,setBtn]=useState(true);
    return(
        <>
            <button onClick={()=>setBtn(!Btn)}>Toggle btn</button>
            {
                Btn?<h4>Chandu</h4>:null
            }
            <br /><br />

        </>
    )
}

// multiple conditions 

export function Multiple(){
    const [Count,SetCount]=useState(0)
    return(
        <>
            <h2>Count:{Count}</h2>
            <button onClick={()=>SetCount(Count+1)}>Click Me</button>
            {
                Count==0?<h3>Condition 0</h3>:
                Count==1?<h3>Condition 1</h3>:
                Count==2?<h3>Condition 2</h3>:
                Count==3?<h3>Condition 3</h3>:
                Count==4?<h3>Condition 4</h3>:
                Count==5?<h3>Condition 5</h3>:<h3>Other condition</h3>
            }
        </>
    )
}