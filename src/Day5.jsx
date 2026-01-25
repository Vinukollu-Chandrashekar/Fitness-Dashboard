// Get input field value

import { useState } from "react"

// .Make input field 
// .Define state
// .Get input field value in state
// .Display value
// .Clear input field value

function Input(){
    const [Inp,setInp]=useState("");
    const handle=()=>{
        setInp("");
    }
    return(
        <>
            <input type="text" value={Inp} onChange={(event)=>setInp(event.target.value)} placeholder="Enter name" />
            <h2>{Inp}</h2>
            <button onClick={handle}>Clear</button>
        </>
    )
}
export default Input;


// Controlled components

// .What is controlled components
// .How to identify this is a controlled components
// .Error if we dont use Controlled value property
// .Make form get input field values
// .Display input field values

export function ControlledComponents(){
    const[name,setName]=useState("")
    const[password,setpwd]=useState("")
    const[email,setemail]=useState("")
    return(
        <>
            <h3>Controlled components</h3>
            <form action="">
                <input type="text" onChange={(event)=>setName(event.target.value)} value={name} placeholder="Enter Name" />
                <br /><br />
                <input type="password" onChange={(event)=>setpwd(event.target.value)} value={password} placeholder="Enter password" />
                <br /><br />
                <input type="email" onChange={(event)=>setemail(event.target.value)} value={email} placeholder="Enter email" />
                <br /><br />
                <h3>{name}</h3>
                <h3>{password}</h3>
                <h3>{email}</h3>
                <button type="submit">submit</button>
                <button type="button" onClick={()=>{setName('');setpwd('');setemail('')}}>Clear</button>
                <hr /><hr />
            </form>
        </>
    )
}


// Handle checkbox

// .Make checkbox
// .Define checkbox
// .Get checkbox value in state
// .Remove checkbox value in state


export function Checkboxes(){
    const[val,setVal]=useState([]);
    const handlefun=(event)=>{
        if(event.target.checked){
            setVal([...val,event.target.value]);
        }
        else{
            setVal([...val.filter(item=>item!=event.target.value)]);
        }
    }
    return(
        <>
            <input type="checkbox" onChange={handlefun} id="php" value="PHP" />
            <label htmlFor="php">PHP</label>
            <br /><br />

            <input type="checkbox" onChange={handlefun} id="html" value="HTML"/>
            <label htmlFor="html">HTML</label>
            <br /><br />

            <input type="checkbox" onChange={handlefun} id="css" value="CSS" />
            <label htmlFor="css">CSS</label>
            <br /><br />

            <input type="checkbox" onChange={handlefun} id="js" value="JS" />
            <label htmlFor="js">JS</label>
            <br /><br />
            <h3>{val.toString()}</h3>
        </>
    )
}