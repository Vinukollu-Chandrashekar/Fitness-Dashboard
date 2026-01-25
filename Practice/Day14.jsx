// Add bootstrap in react js:

// .What is bootstrap
// .How to install bootstrap
// .Import and use bootstrap in react js
// .Bootstrap ex button and alerts

import { useEffect, useRef, useState } from 'react';
import {Button} from 'react-bootstrap';
import {Alert} from 'react-bootstrap';
export default function Bootstraping(){
    return(
        <>
            
            <Alert variant='danger'>danger</Alert>
            <Button variant='danger'>danger</Button>
            <Button variant='warning'>warning</Button>
            <Button variant='success'>success</Button>
            <Button variant='light'>light</Button>
            <Button variant='dark'>dark</Button>
            <Button variant='info'>info</Button>
            <Button variant='link'>link</Button>
            <Button variant='primary'>primary</Button>
            <Button variant='secondart'>secondary</Button>
        </>
    )
}


// Part 2
// UseRef hook in react:

// .What is useRef
// .Learn how to use useRef
// .Control input field with useRef
// .Hide and show input field with useRef

export function UseRef(){
    const inputRef = useRef(null);
    const handlefun=()=>{
        inputRef.current.focus();
        inputRef.current.style.color='blue';
    }
    return(
        <>
            <h3>Use Ref concept in react.js</h3>
            <input type="text" ref={inputRef} placeholder='Enter name' />
            <br /><br />
            <button onClick={handlefun}>Click me</button><br /><br /><hr />
        </>
    )
}

// Ex2

export function Own(){
    const [val,setVal]=useState(0);
    const Ref=useRef(null);
    const [allval,setAllval]=useState([])
    const Handlefun=()=>{
        setAllval([...allval,val]);
        
    }
    useEffect(()=>{
        Ref.current = val;
    },[val])
    return(
        <>
            <button onClick={Handlefun}>Existing ones</button>
            <button onClick={()=>setVal(val+1)}>update Me</button><br /><br />
            <h3>Previous:{Ref.current} | Current:{val}</h3>
            <h3>Existing values:
                {
                allval?allval:null
            }
            </h3>
            
        </>
    )
}