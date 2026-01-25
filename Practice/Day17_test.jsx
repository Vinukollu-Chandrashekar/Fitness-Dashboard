import { useState } from "react";
import { useFormStatus } from "react-dom";
export default function Manual(){
    const[enabled,setEnabled]=useState(true);
    const handlebtn=async(event)=>{
        event.preventDefault();
        setEnabled(false);
        await new Promise((res)=>setTimeout(res,1000));
        setEnabled(true);
    }   
    return(
        <>
                <h1>Mannual</h1>
                <form action="" onSubmit={handlebtn}>
                <input type="text" placeholder="Enter Name" required /><br /><br />
                <input type="email" placeholder="Enter Email" required/><br /><br />
                <button disabled={!enabled}>{enabled?'Submit':'submitting'}</button>
                </form>
            
        </>
    )
}

//  Auto using useFormStatus():

export function Auto(){
 
    const Handle =async ()=>{
        await new Promise((res)=>setTimeout(res,1000));
    }
    function Code(){
        const {pending}=useFormStatus();
        return(
            <>
                <input type="text" placeholder="Enter Name" /><br /><br />
                <input type="email" placeholder="Enter Email" /><br /><br />
                <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>
            
            </>
        )
    }
    return(
        <>
            <hr /><br /><br />
            <h1>Auto</h1>
            <form action={Handle}>
                <Code />
            </form>
        </>
    )
}