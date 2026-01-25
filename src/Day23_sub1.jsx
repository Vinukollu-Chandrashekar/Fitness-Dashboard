import { Link } from "react-router"
export default function PageNotFoundComponent(){
    return(
        <>
            <h1>Oops... </h1>
            <h2>Page Not Found</h2>
            <div>
                <Link to='/'><h4>Go to Home Page</h4></Link>
            </div>
            
            <img src="https://img.freepik.com/free-vector/404-error-design-with-astronaut_23-2147734936.jpg?t=st=1768658473~exp=1768662073~hmac=ad98b49cad483e88a96f49d832741361fa7f7e65844c957004310d48b5dce9b6" alt="" />
        </>
    )
}