const User=({data})=>{
    return(
        <div style={{border:"2px solid black",borderRadius:"5px",padding:"5px",margin:"15px"}}>
            <h3 >Name:<span style={{color:"green"}}>{data.name}</span></h3>
            <h3>Age:<span style={{color:"green"}}>{data.age}</span></h3>
            <h3 >Id:<span style={{color:"green"}}>{data.id}</span></h3>
            <h3 >year:<span style={{color:"green"}}>{data.year}</span></h3>
        </div>
    )
}
export default User;

