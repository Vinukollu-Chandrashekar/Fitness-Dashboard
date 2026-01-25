import { useRef, useState } from "react"
import LiftingState2 from "./Day20_sub2"
export default function LiftingState1({setUser}){
    const inputRef=useRef(null);
    const Handlebtn =()=>{
        inputRef.current.value='';
        alert('user successfully added');
    }
    return(
        <>
            <br></br>
            <h1>Add user</h1>
            <input type="text" ref={inputRef} onChange={(event)=>setUser(event.target.value)} placeholder="Enter Name" />
            <br />
            <br />
            <button onClick={Handlebtn}>Add</button>
            <hr />
        </>
    )
}