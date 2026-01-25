import { useState } from "react"
import { Link } from "react-router-dom"
export default function Users(){
    const[users,setUsers]=useState([
        {id:1, name:'chandu'},
        {id:2, name:'siddu'},
        {id:3, name:'aryan'},
        {id:4, name:'ajay'},
        {id:5, name:'teja'},
    ])
    return(
        <>
            <h2>Users List Page</h2>
                {
                    users.map((item)=>(
                        <div key={item.id} style={{marginLeft:'15px'}}>
                            <Link className="nav-link text-primary fw-semibold text-decoration-none" to={'/in/user/users/'+item.id}>{item.name}</Link>
                        </div>
                        
                        
                    ))
                }
                 <h2>Users List With Names</h2>
                {
                    users.map((item)=>(
                        <div key={item.id} style={{marginLeft:'15px'}}>
                            <Link className="nav-link text-primary fw-semibold text-decoration-none" to={'/in/user/users/'+item.id+'/?'+item.name}>{item.name}</Link>
                        </div>
                        
                        
                    ))
                }
        </>
    )
}