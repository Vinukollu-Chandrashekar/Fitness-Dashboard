import { useEffect } from "react";

export default function Count({count,data}){
      const handlecount=()=>{
        console.log("count btn clicked");
    }
    const handledata=()=>{
        console.log("Data btn clicked");
    }
    useEffect(()=>{
        handlecount();
        
    },[])

    useEffect(()=>{
        handledata();
    } ,[data])
    
    return(
        <>
            <h4>Count: {count}</h4>
            <h4>Data: {data}</h4>
        </>
    )
}