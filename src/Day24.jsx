// Layout and Index Routes:

import Department from "./Day23_Department";
import Student from "./Day23_Student";
import Home from "./Day22_Home";
import About from "./Day22_about";
import Login from "./Day22_Login";
import { BrowserRouter,Routes,Route } from "react-router";
import NavBar from "./Day22_NavBar";
import College from "./Day23_College";
// .What is Layout Routes
// .Example of Layout Routes
// .Index Routes
// .Example of Index Routes

export default function LayoutRoutes(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<NavBar/>}>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Route>
                    
                

                <Route path='/college' element={<College/>}>
                    <Route index element={<Student/>}/>
                    <Route path='department' element={<Department/>}/>
                </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}