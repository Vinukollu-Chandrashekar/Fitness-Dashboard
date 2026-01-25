// Day 4

// Props in React
// Make Component
// Pass data bw components
//     var,obj,array
// receive and display data
// pass data in component with click


function Props({name,id,age}){
    return(
        <>
            <h1>Props concept</h1>
            <h3>Name:{name}</h3>
            <h3>Id:{id}</h3>
            <h3>Age:{age}</h3>
        </>
    )
}
export default Props;

// objects of props

export function Obj({student}){
    return(
        <div>
            <hr />
            <h3>Props using objects</h3>
            <h3>{student.name}</h3>
            <h3>{student.age}</h3>
            <h3>{student.id}</h3>
        </div>
    )
}

export function Arrays({arr}){
    return(
        <>
            <hr />
            <h3>Props using arrays</h3>
            <h3>{arr[0]}</h3>
            <h3>{arr[1]}</h3>
            <h3>{arr[2]}</h3>
            <h3>{arr[3]}</h3>
        </>
    )
}

// props using click button

export function Btn({name}){
    return(
        <>
            <h2>Name:{name}</h2>
        </>
    )
}

// more about props:

// Default props
// pass jsx with props
// change style with props 

export function DefaultProps({Name="sumith"}){
    return(
        <>
        <hr />
            <h3>Hello,{Name}</h3>
            <hr />
        </>
    )
} 

// Jsx with props

export function JsxProps({children}){
    return(
        <div style={{color:"green",width:"400px",border:"2px solid black"}}>
            {children}
        
            <h2>Hello bro</h2>
        </div>
    )
}