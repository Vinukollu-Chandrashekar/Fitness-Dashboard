// Component life cycle in react 


// .What is life cycle in react
// .What is life cycle component in react
// .Phase of life cycle
// .How to use useEffect to handle lifecycle
import Count from "./Counter";
import { useState,useEffect } from "react";
import  Styling  from "../src/styling";
export default function Mounting(){
    const[count,setCount]=useState(0);
    const[data,setData]=useState(0);
    const[display,setDisplay]=useState(true);
    const[frnd,setFrnd]=useState(false);

  

    return(
        <>
            <button onClick={()=>setCount(count+1)}>Count: {count}</button>
            <button onClick={()=>setData(data+1)}>Data:{data}</button>
            {
                display?<Count count={count} data={data}/>:null
            }
            <button onClick={()=>setDisplay(!display)}>Toggle</button>
            <button onClick={()=>setFrnd(!frnd)}>Show Users</button>
            {
                frnd? <Styling />:null
            }
            
        </>
    )
}
