// useId hook in react Js:

// .What is useId hook
// .How to use it 
// .Example
import useToggle from './Day21_useToggle';
import { useId, useState } from "react";
export default function UseId(){
   
    return(
        <>
            <h2>useId in react Js:</h2>
                <MyuseId />
                <hr /><br />
                <MyuseId />
        </>
    )
}

// function MyuseId(){
//     const user=useId();
//     const password=useId();
//     const skills=useId();
//     const terms=useId();
//     return(
//         <>
//             <div >
//                 <form action='w-50'>
//                     <label className="form-label" htmlFor={user}>Name</label>
//                     <input type="text" className="form-control w-25" placeholder="Enter Name" id={user} />
//                     <br /><br />

//                     <label className="form-label" htmlFor={password}>Password</label>
//                     <input type="password" className="form-control w-25" placeholder="Enter Name" id={password} />
//                     <br /><br />

//                     <label className="form-label" htmlFor={skills}>Skills</label>
//                     <input type="text" className="form-control w-25" placeholder="Enter Name" id={skills} />
//                     <br /><br />

//                     <label className="form-check-label" htmlFor={terms}>Terms and Conditions</label>
//                     <input type="checkbox" className="form-check-input" placeholder="Enter Name" id={terms} />
//                     <br /><br />
//                 </form>
//             </div>
//         </>
//     )
// }

function MyuseId() {
  const user = useId();
  const password = useId();
  const skills = useId();
  const terms = useId();

  return (
    <form className="bg-white border border-4 border-info rounded p-5 shadow-sm w-50  ">

      <div className="d-flex align-items-center mb-3">
        <label htmlFor={user} className="me-3 fw-semibold">
          Name
        </label>
        <input
          type="text"
          className="form-control w-50"
          id={user}
          placeholder="Enter Name"
        />
      </div>

      <div className="d-flex align-items-center mb-3">
        <label htmlFor={password} className="me-3 fw-semibold">
          Password
        </label>
        <input
          type="password"
          className="form-control w-50"
          id={password}
          placeholder="Enter Password"
        />
      </div>

      <div className="d-flex align-items-center mb-3">
        <label htmlFor={skills} className="me-3 fw-semibold">
          Skills
        </label>
        <input
          type="text"
          className="form-control w-50"
          id={skills}
          placeholder="Enter Skills"
        />
      </div>

      <div className="d-flex align-items-center mb-3">
        <label htmlFor={terms} className="me-3 fw-semibold">
          Terms & Conditions
        </label>
        <input
          type="checkbox"
          className="form-check-input"
          id={terms}
        />
      </div>
      <button className="btn btn-info w-50 mt-4">Submit</button>

    </form>
  );
}


// Part 2
// Make custom hook in react js:

// .What are custom Hooks
// .Make custom Hook for toggle UI

export function CustomHook(){
    const[val,setVal]=useToggle(true);
    return(
        <>
            <button onClick={setVal}>Toggle Button</button>
            <button onClick={()=>setVal(false)}>Hide Button</button>
            <button onClick={()=>setVal(true)}>Show Button</button>
            {
                val?<h2>Custom Hook in React Js</h2>:null
            }
        </>
    )
}
