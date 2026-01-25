// Keep your components pure:

import { useState,useRef } from "react"

// .What is pure function is
// .What is pure component 
// .Example of impure component (avoid)
// .Example of pure component



// Derived state in react Js:

// .What is Derived state
// .Understand derived state with example
// .How it improve performance

export default function Derived(){
    const[users,setUsers]=useState([]);
    const[user,setUser]=useState();
    const inputRef=useRef(null);
    const total=users.length;
    const last=users[users.length-1];
    const unique=[...new Set(users)].length;

    const HandleAddUser=()=>{
        
        
        inputRef.current.focus();
        inputRef.current.value='';
        setUsers([...users,user]);

    }
    
    return(
        <>
            <h3>Total Users: {total}</h3>
            <h3>Last User: {last}</h3>
            <h3>Unique User: {unique}</h3>
            <input type="text" ref={inputRef} placeholder="Enter Name" onChange={(event)=>setUser(event.target.value)} />
            <br /><br />
            <button onClick={HandleAddUser}>Add User</button>
            {
                    users.map((item)=>(
                        <h3>{item}</h3>
                    ))
            }
        </>
    )
}