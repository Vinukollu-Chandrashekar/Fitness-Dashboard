// External css in react JS:

// How we write external File
// Make css File
// Write style in css file 
// right way to import css file 
import { useState } from "react";
import "./Css/styling.css"
import Part2 from "./day12_p2";
export default function External(){
    const[grid,setGrid]=useState(false);
    return(
        <>
        <h1>Hello welcome to External Css styling</h1>
        <button className="btn" onClick={()=>setGrid(!grid)}>Show users</button>
        {
            grid?<Part2 />:null
        }
        </>
    )
}