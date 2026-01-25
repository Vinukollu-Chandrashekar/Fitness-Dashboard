import { useState } from "react";
import { useFormStatus } from "react-dom"

export default function OwnCode(){
    const[users,setUsers]=useState([]);
    const[user,setUser]=useState();
    const[email,setEmail]=useState();
    const HandleAddingUser=()=>{
        setUsers([user,email]);
    }

    const ExistingOnes=()=>{
        users.map((item,index)=>(
            <h3 key={index}>{item}</h3>
        ))
    }
    const HandleFun=(event)=>{
        event.preventDefault();
        
    }
    const Myfun=()=>{
        return(
            <>
                <input type="text" onChange={(event)=>setUser(event.target.value)} value={user} placeholder="Enter Name" required />
                <br /><br />
                <input type="email" onChange={(event)=>setEmail(event.target.value)} value={email} placeholder="Enter Gmail" required/>
                <br /><br />
                <input type="password" placeholder="Enter Password" required />
                <br /><br />
                <button type='button' onClick={HandleAddingUser} >Add user</button>
                <button type="button" onClick={ExistingOnes}>Existing Users</button>
            </>
        )
    }
    return(
        <>
            <form onSubmit={HandleFun}>
                <Myfun/>
            </form>
        </>
    )
}