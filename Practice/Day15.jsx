// Uncontrolled components:

// .What is uncontrolled component
// .Make uncontrolled component with query selector
// .Make uncontrolled component with useRef

import { useRef, useState } from 'react';
export default function Uncontrolled(){
    const inputName=useRef(null);
    const inputPwd = useRef(null);
    const [name,setName]=useState();
    const[pwd,setPwd]=useState();
    const HandleSubmit = (event)=>{
        event.preventDefault();
        const user = document.querySelector('#name').value;
        const pwd = document.querySelector('#pwd').value;
        console.log(user,pwd);
    }

    const HandleRef=(event)=>{
        event.preventDefault();
        
        const user = inputName.current.value;
        const pwd = inputPwd.current.value;
        console.log(user,pwd);
    }


    const HandleControlled = (event)=>{
        event.preventDefault();
        
    }
    return(
        <>
            <h2>Uncontrolled components in react js</h2>
            <form action="" method='post' onSubmit={HandleSubmit}>
                <input type="text" id="name" placeholder="Enter name" />
                <br /><br />
                <input type="password" id="pwd" placeholder="Enter password" />
                <br /><br />
                <button >Submit</button>
            </form>

            {/* Ex2 */}


            <hr />
            <h1>Handling Uncontrolled components using UseRef</h1>
            <form action="" method='post' onSubmit={HandleRef}>
                <input type="text" ref={inputName} placeholder="Enter Name" />
                <br /><br />
                <input type="password" ref={inputPwd} placeholder="Enter Password" />
                <br /><br />
                <button type="submit">Submit</button>

            </form>

            {/* Ex3 */}
            <hr />
            <h1>Handling controlled components</h1>
            <form action="" onSubmit={HandleControlled}>
                <input type="text" onChange={(event)=>setName(event.target.value)} placeholder='Enter Name' value={name}/>
                <br /><br />
                <input type="password" onChange={(event)=>setPwd(event.target.value)} placeholder='Enter Password' value={pwd}/>
                <br /><br />
                <button type='submit'>Submit</button>
            </form>

            {
                name&&pwd?
                <h3>Name: {name} | Password: {pwd}</h3>:null
            }
        </>
    )
}



