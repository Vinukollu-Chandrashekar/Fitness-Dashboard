import { useParams } from "react-router"

export default function UserDetails(){
    const Params=useParams();
    return(
        <>
            <h2>Users Details Page</h2>
            <br />
            <br />
            <h3>User Id:{Params.id}</h3>
            {/* <h3>User Name: {item.name}</h3> */}
        </>
    )
}