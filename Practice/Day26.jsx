// React Router Optional Segment:

// .What is Optional Segment
// .Static Optional Segment
// .Dynamic Optional Segment

import { Navigate } from "react-router";
import Department from "./Day23_Department";
import Student from "./Day23_Student";
import Home from "./Day22_Home";
import About from "./Day22_about";
import Login from "./Day22_Login";
import { BrowserRouter,Routes,Route } from "react-router";
import NavBar from "./Day22_NavBar";
import College from "./Day23_College";
import Users from "../src/Users";
import PageNotFound from "./Day23_sub1";
import UserDetails from "../src/UserDetails";

export default function OptionalSegment(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<NavBar/>}>
                        <Route path="in">
                            <Route path="/in/user">
                                <Route path='/in/user/home' element={<Home/>}/>
                                <Route path='/in/user/about' element={<About/>}/>
                                <Route path='/in/user/login' element={<Login/>}/>
                                <Route path="/in/user/users/:id" element={<UserDetails/>}/>
                                <Route path="/in/user/users/list?" element={<Users/>}/>
                            </Route>
                        </Route>
                    </Route>
                    
                    <Route path='/college' element={<College/>}>
                        <Route index element={<Student/>}/>
                        <Route path='department' element={<Department/>}/>
                    </Route>
                    <Route path="/" element={<Navigate to='/in/user/home'/>}/>
                    <Route path="/*" element={<PageNotFound/>}/>
                </Routes>
                
            </BrowserRouter>
        </>
    )
}




