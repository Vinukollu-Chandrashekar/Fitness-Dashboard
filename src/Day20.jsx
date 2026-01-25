    // Lifting state up in react Js:

    // .What is lifting Stateup 
    // .Make two Component
    // .Share data between two Component

    
    import { useActionState, useState } from "react";
    import LiftingState1 from "./Day20_sub1"
    import LiftingState2 from "./Day20_sub2";
    export default function LiftingStateUp(){
        const[user,setUser]=useState([]);
        return(
            <>
                <h2>Lifting state up concept in react js:</h2>
                <LiftingState1 setUser={setUser}/>
                <LiftingState2 user={user}/>        
            </>
        )
    }


    

// Part 2:

// updating objects in state:

// .Make object in state
// .Display object values
// .Update object Key
// .Update nested object key


export function UpdatingObjects(){
    
    const[user,setUser]=useState({
        Name:'chandu',
        Address:{
            City:"Hyderabad",
            State:'Telangna',
            Country:'India'
        }
    })

    const Handle = (val) =>{
        user.Name=val;
        setUser({...user});

    }

    const HandleCity = (val)=>{
        user.Address.City=val;
        setUser({...user});
    }
    return(
        <>  
            <hr /><hr /><br /><br />
            <h1>Updating Objects in react JS:</h1>
            <input type="text" placeholder="Update Name" onChange={(event)=>Handle(event.target.value)} />
            <br /><br />
            <input type="text" placeholder="Update city" onChange={(event)=>HandleCity(event.target.value)} />
            <br /><br />
            <h2>Name:{user.Name}</h2>
            <h2>{user.Address.City}</h2>
            <h2>{user.Address.State}</h2>
            <h2>{user.Address.Country}</h2>

        </>
    )
}



// Part3

// Updating Array in state:

// .Make Array in state
// .Display Array data on UI
// .Update Array Data
// .Update object of Array


export function UpdateArray(){
    const [users,setUsers]=useState([
        'chandu','ajay','siddu','aryan','teja'
    ]);
    const handle=(name)=>{
        users[users.length-1]=name;
        setUsers([...users]);
    }



    const[data,setData]=useState([
        {Name:'chandu',Age:'23'},
        {Name:'siddu',Age:'23'},
        {Name:'aryan',Age:'22'},
        {Name:'ajay',Age:'23'},
    ])
    const HandleAge=(val)=>{
        data[data.length-1].Age=val;
        setData([...data])
    }

    return(
        <div>
            <hr /><hr /><br /><br />
            <h2>Updating Array in react Js:</h2>
            <input type="text" placeholder="Enter Name" onChange={(event)=>handle(event.target.value)} />
            <br /><br />
            {
                users.map((item,index)=>(
                    <h3 key={index}>{item}</h3>
                ))
            }
            <hr />
            <input type="number" placeholder="Enter Age" onChange={(e)=>HandleAge(e.target.value)} />
            {
                data.map((item,index)=>(
                    <h3 key={index}>{item.Name},{item.Age}</h3>

                ))
            }
        </div>
    )
}



// Part4

// useActionState Hook:

// .What is use of useActionState Hook
// .Make input form
// .Example of useActionState Hook 

export function UseActionStateHook(){
    const HandleSubmit=(previousData,formData)=>{
        let Name=formData.get('name');
        let Password=formData.get('password');
        if(Name && Password){
            return{message:'Data Submitted',Name,Password};
        }
        else{
            return{error:'Please Enter Valid Details'};
        }
    }
    const[Data,action,pending]=useActionState(HandleSubmit);
    return(
        <>
            <hr /><br /><br />
            <h1>useActionState Hook in react Js:</h1>
            <form action={action}>
                <input type="text" className='form-control w-25 mt-2' placeholder="Enter Name" name="name"/>
                <br /><br />
                <input type="password" className='form-control w-25 mt-1'  placeholder="Enter Password" name="password" />
                <br /><br />
                <button  className='btn btn-primary padding:none'disabled={pending}>{pending?"Submitting Data...":'Submit'}</button>
            </form>
            {
                Data?.error && (
                    <div className="alert alert-danger mt-3 w-25" role="alert">{Data.error}</div>
                )
            }
            {
                Data?.message && (
                    <div className="alert alert-success mt-3 w-25" role="alert">{Data.message}</div>
                )
            }
            <h3>Name: {Data?.Name}</h3>
            <h3>Password: {Data?.Password}</h3>
        </>
    )
}