// UseTransitionHook in react Js:

import { useState, useTransition } from "react"

// .What is useTransition?
// .Example
//     .Make button and apply logic
//     .Apply useTransition

// Using State
export default function Transition(){
    const[pending,setPending]=useState(false);
    const Handle = async() =>{
        setPending(true);
        await new Promise((res)=>setTimeout(res,1000));
        setPending(false);
    }
    return(
        <>
            <h1>UseTransition Hook concept in react JS using State:</h1>
            <button disabled={pending} onClick={Handle}>Click Me</button>
        </>
    )
}


// Using useTransition Hook:


export function TransitionHook(){
    const[pending,setTransition]=useTransition();
    const HandleBtn = () =>{
        setTransition(async()=>{
            await new Promise((res)=>setTimeout(res,2000));
        })
    }
    return(
        <>
            <hr /><br /><br />
            <h1>UseTransition Hook</h1>
            {
                pending?
                <img src="https://imgs.search.brave.com/F0Skl_dwO_H4J_7R-HgFJ8gliHzlAMJ99pbnEstRUWA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIuZ2lwaHkuY29t/L21lZGlhL3YxLlky/bGtQVGM1TUdJM05q/RXhhR04yTVRobllu/UnpaRFYwWW5kcmVq/RmllWEI2TmpNNGNt/cGxOSGR2YlROeWJY/bHJiRE14TUNabGNE/MTJNVjluYVdaelgz/TmxZWEpqYUNaamRE/MW4vRmFBeGRQV1o3/SEtHbWxua3U3LzIw/MC5naWY.gif" alt="sorry" />:null
            }
            <button disabled={pending} onClick={HandleBtn}>Click Me</button>
        </>
    )
}

