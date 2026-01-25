import { useState } from "react"

export default function LiftingState2({user}){
    const [state,setState]=useState(false);
    const HandleBtn=async()=>{   
        setState(true);
        await new Promise(res=>setTimeout(res,1000));
        setState(false);
    }
    return(
        <>
            <h1>Display User</h1>
            <br />
            <button onClick={HandleBtn}>Display User</button>
            {
                state&&(
                    user.map((item,index)=>(
                        <h3 key={index}>{item}</h3>
                    ))
                )
            }
        </>
    )
}