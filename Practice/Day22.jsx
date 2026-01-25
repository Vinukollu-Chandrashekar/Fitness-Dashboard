// Context API:

import College from "./Day22_sub2";
import { SubjectContext } from "./Day22_sub1";
import { useState } from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router";
import Home from './Day22_Home';
import Login from './Day22_Login';
import About from "./Day22_about";
import NavBar from "./Day22_NavBar";
import './Day22_Header.css'
// .What is context API
// .How to use
// .Example
// .Update Data with context API


export default function ContextAPI() {
    const [val, setVal] = useState();
    return (
        <>
            <div className="bg-primary form-control border border 4 p-2 rounded  ">
                <SubjectContext.Provider className="provider" value={val}>
                    <select name="" id="" value={val} onChange={(event) => setVal(event.target.value)}>
                        <option value="">Select Option</option>
                        <option value="Maths">Maths</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                    </select>
                    <button onClick={() => setVal('')}>Clear Subject</button>
                    <h2>Context API </h2>
                    <College />
                </SubjectContext.Provider>
            </div>
        </>
    )
}



// Part 2

// React Router7 setup:

// .What is React Router
// .Install Router Router 7
// .Test React Router

export function ReactRouter() {
    return (
        <>
            <BrowserRouter>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Contact'>Contact</Link>
                <Routes>
                    <Route path='/' element={<h2>Home</h2>} />
                    <Route path='/About' element={<h2>About</h2>} />
                    <Route path='/Contact' element={<h2>Contact</h2>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}


// Part 3:

// Basic pages with React-Router:

// .What is BrowserRouter
// .What is Routes
// .What is Route
// .What is Link
// .Make Basic Pages
// .Make Different file for Links

export function Routing() {
    return (
        <>
            <br /><hr />

            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/about" element={<About/>} />
                </Routes>
            </BrowserRouter>
            <hr /><br />
        </>
    )
}




// Part 4

// Header with React Router:

// .Write Html for Header 
// .Add links in Header
// .Write css for Header

export function HeaderRouting(){
    return(
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}