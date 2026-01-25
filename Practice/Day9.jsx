// Handle props sideffects with useEffect in Component
// .Make Component
// .Pass Component
// .Apply useEffect to handle sideffects
// .How to pass props as dependency in useEffect 


import { useState } from "react";
import Counter from "./Counter"
export default function PropsUseeffect(){
    const [count,setCount]=useState(0);
    const [data,setData]=useState(0)
    return(
        <>
           <h2>UseEffect concept using Props</h2> 
           <button onClick={()=>setCount(count+1)}>Count {count}</button>
           <button onClick={()=>setData(data+1)}>Data {data}</button>
            <Counter count={count} data={data}/>
        </>
    )
}