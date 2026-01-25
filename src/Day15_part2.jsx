import { useState } from "react"

export default function Test(){
    const [name,setName]=useState();
    const [pwd,setPwd]=useState();
    const [id,setId]=useState();
    const [email,setEmail]=useState();
    const [submitted,setSubmitted]=useState(false);
    const HandleFun=(event)=>{
        event.preventDefault();
        setSubmitted(true);
    }
    return(
        <>
        <h2>Controlled components </h2>
            <form action="" onSubmit={HandleFun}>
                <input type="text" onChange={(event)=>setName(event.target.value)} value={name} placeholder="Enter Name" />
                <br /><br />

                <input type="number" onChange={(event)=>setId(event.target.value)} value={id} placeholder="Enter Id" />
                <br /><br />

                <input type="email" onChange={(event)=>setEmail(event.target.value)} value={email} placeholder="Enter Email" />
                <br /><br />

                <input type="password" onChange={(event)=>setPwd(event.target.value)} value={pwd} placeholder="Enter Password" />
                <br /><br />

                <button type="submit">Login</button>
            </form>

            <br /><br />
            {
                setSubmitted&&(
                <>

                <h4>Name: {name}</h4>
                <h4>Id: {id}</h4>
                <h4>Email: {email}</h4>
                <h4>Password: {pwd}</h4>
                </>
                

            )}
            
        </>
    );
}