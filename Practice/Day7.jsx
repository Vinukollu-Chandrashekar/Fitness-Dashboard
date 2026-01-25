// Reuse components in loop

// .Make Component
// .Apply map for loop in jsx
// .Render component in loop
// .Pass data in the component loop
// .Add style
import { useEffect, useState } from "react";
import User from "./ExtraComponent"
export default function ReuseComponent(){
     const Arr=[
        {
            name:'chandu',
            id:'C8',
            age:'22',
            year:'IV'
        },
        {
            name:'Siddu',
            id:'67',
            age:'22',
            year:'IV'
        },
        {
            name:'Aryan',
            id:'95',
            age:'21',
            year:'IV'
        },
        {
            name:'Ajay',
            id:'LE-11',
            age:'22',
            year:'IV'
        },
    ]
    return(
        <>
            <h2>Reuse component in loop</h2>
            {
                Arr.map((item)=>(
                    <div key={item.id}>
                        <User data={item}/>
                    </div>
                ))
            }
        </>
    )
} 

// Task :

// Make Component
// Where clock color can change with props


export function DropDown(){
    const[color,setColor]=useState('red');
    return(
        <>
            <h3>Choose the color</h3>
            <select onChange={(event)=>setColor(event.target.value)}>
                <option value="Yellow">Yellow</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="White">White</option>
            </select>
            <Clock color={color}/>
            
        </>
    )
}


export function Clock({color}){
    const[time,setTime]=useState(0);
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);
    },[])
    return(

        <>
            <h1>Clock</h1>
            <h1 
            style={{
                color:color,
                border:"2px solid black",
                width:'300px',padding:"10px",
                backgroundColor:'black',
                borderRadius:"10px",}}>
            {time}</h1>

        </>
    )
}

// Hooks concept:

// .What are hooks
// .Why we need hooks
// .History of Hooks
// .Some hooks name
// .How to identify Hooks

// UseEffect: 

// .What is use of useEffect
// .syntax of useEffect
// .Use effect with State
// .use effect with Props

export function UseEffect(){
    const[data,setData]=useState(0)
    const[count,setCount]=useState(0);
    function Click(){
        console.log("Button clicked");
    }
    
    useEffect(()=>{
        Click();
    },[])
    useEffect(()=>{
        counterFunction();
        Datacount();
    },[count,data])
    
    function counterFunction(){
        console.log("counter: ",count)
    }
    function Datacount(){
        console.log("Data",data);
    }
    return (
        <>
            <button onClick={()=>setCount(count+1)}>Counter:{count}</button>
            <button onClick={()=>setData(data+1)}>Data: {data}</button>
            
        </>
    )
}
