// Pass functions in component as props :

// .Why we need to pass function as props
// .Make parent and child component
// .Call function from parent to child component


export default function PassFun({display,name}){
    return(
        <>
            <button onClick={()=>{display(name)}}>Display</button>
        </>
    )
}


// forwardRef
export function ForwardRef({ref,handle}){
  return(
    <>
      <h2>Forward Ref concept in react js:</h2>
      <input type="text" ref={ref} />
      <button onClick={handle}>Update</button>
      
    </>
  )
}