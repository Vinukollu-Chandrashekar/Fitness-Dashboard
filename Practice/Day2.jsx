
// Day 2:

// 1.Click event and function call
    // .Diff bw js function call and react function call
    //  .make button
    //  .make button and click event
    //  .call function on click event
    //  .Arrow function
    //  .pass parameters with function call
     

// 2.Upgrade React version
    // .check current version in project
    // .Update react version 
    // .test project
    // .check documentation
    // .interview question
// without parameters:

function Button(){
    return(
        <>
            <button onClick={mybutton}>Click me</button>
        </>
    )
    
}

const mybutton=()=>{
    alert("Button clicked successfully");
}
export default Button;



// with parameters

const game=(game1,game2)=>{
    alert(game1);
    alert(game2);
}

export function Button2(){
    return(
        <div>
            <button onClick={()=>game("Gymnastics","Basketball")}>Game button</button>
        </div>
    )
}
