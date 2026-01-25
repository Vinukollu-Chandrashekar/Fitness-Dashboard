// // import { Link } from "react-router";
import { Outlet } from "react-router-dom";
// // export default function NavBar(){
// //     return(
// //         <>
// //             <div className="Header">
// //                 <div className="logo">
// //                     <Link to={"/"}><h4>Logo</h4></Link>
// //                 </div>
// //                 <div className="SubHeader">
// //                     <ul>
// //                         <li>
// //                             <Link to={'/'}><h4>Home</h4></Link>
// //                         </li>
// //                         <li>
// //                             <Link to={'/login'}><h4>Login</h4></Link>
// //                         </li>
// //                         <li>
// //                             <Link to={'/about'}><h4>About</h4></Link>
// //                         </li>
// //                     </ul>
// //                 </div>
// //             </div> 
// //         </>
// //     )
// // }



// import { Link } from "react-router-dom";

// export default function NavBar() {
//     return (
//         <nav className="navbar navbar-expand-lg bg-info navbar-light px-5">
//             <Link className="navbar-brand" to="/">Logo</Link>

//             <div className="collapse navbar-collapse show">
//                 <ul className="navbar-nav ms-auto gap-4">
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/">Home</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/login">Login</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/about">About</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to='/college'>College</Link>
//                         {/* <ul className="navbar-nav ms-auto gap-3">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to='student'>Student</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link">Department</Link>
//                             </li>
//                         </ul> */}
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }

import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
        
        <div>
            <nav className="navbar navbar-expand-lg bg-info px-5">
            <Link className="navbar-brand" to="/in/user/home">Logo</Link>

            <ul className="navbar-nav ms-auto gap-4">

                <li className="nav-item">
                    <Link className="nav-link text-dark" to="/in/user/home">Home</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link text-dark" to="/in/user/login">Login</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link text-dark" to="/in/user/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark px-3" to="/in/user/users">Users</Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link text-dark"
                        to="/college"
                    >
                        College
                    </Link>

                    
                    <ul className="dropdown-menu bg-info border-0 ">
                        <li className="nav-item">
                            <Link className="nav-link text-dark px-3" to="/college/student">
                                Student
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark px-3" to="/college/department">
                                Department
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link className="nav-link text-dark px-3" to='/in/user/users/list'>List</Link>
                </li>
                

            </ul>
        </nav>
        <Outlet/>
        </div>
        </>
        
    );
}
