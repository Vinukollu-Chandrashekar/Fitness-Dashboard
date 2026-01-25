import { useState } from "react"

const useToggle=(defaultVal)=>{
    const[value,setVal]=useState(defaultVal);
    function toggleVal(val){
        if(typeof val!='boolean'){
            setVal(!value);
        }
        else{
            setVal(val);
        }
    }
    return[value,toggleVal];
}
export default useToggle;