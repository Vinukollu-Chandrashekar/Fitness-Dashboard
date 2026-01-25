// 404 Page and Redirection:

// .What is 404 page 
// .Make Route for 404 page
// .Make 404 page
// .Redirect from 404
import Home from "./Day22_Home"
import Login from "./Day22_Login"
// import About from "./Day22_about"
import NavBar from "./Day22_NavBar"
import PageNotFoundComponent from "./Day23_sub1"
import { BrowserRouter,Routes,Route, Navigate } from "react-router"
import College from "./Day23_College"
import Student from "./Day23_Student"
import Department from "./Day23_Department"
// export default function PageNotFound(){
//     return(
//         <>
//             <BrowserRouter>
//                 <NavBar />
//                 <Routes>
//                     <Route path='/' element={<Home/>}/>
//                     <Route path='/about' element={<About/>}/>
//                     <Route path='/login' element={<Login/>}/>
//                     <Route path="/*" element={<Navigate to={'/'}/>}/>
//                     <Route path='/*' element={<PageNotFoundComponent/>}/>

//                 </Routes>
//             </BrowserRouter>

//         </>
//     )
// }




// part 2:

// Nested Navigation With React Router:

// .What is Nested Navigation
// .Make Some Pages for Nested Navigation
// .Make Routes For Nested Navigation

export default function NestedRouting(){
    return(
        <>
            <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/* <Route path="/about" element={<About/>}/> */}
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/college" element={<College/>}>
                        <Route path="student" element={<Student/>}/>
                        <Route path="department" element={<Department/>}/>
                    </Route>
                    <Route path='/*' element={<PageNotFoundComponent/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}