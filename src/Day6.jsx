// Handle Radio and Drop down

// Make Radio buttons
// Get radio button values in state
// Default selection of radio button
// Make dropdown
// Get dropdown value in state
// Default selection in dropdown

import { useState } from "react";
import Jsx from "./JSX/Jsx_sample";
export default function Radio(){
    const[btn,setBtn]=useState('Male');
    const[city,setCity]=useState()
    return(
        <>
            <h3>Day6 Radio button concept</h3>
            <input type="radio" checked={btn=="Male"} id="male" name="gender" onChange={(event)=>setBtn(event.target.value)} value="Male"/>
            <label htmlFor="male">Male</label>
            <br /><br />
            <input checked={btn=="Female"} type="radio" id="female" name="gender" onChange={(event)=>setBtn(event.target.value)} value="Female"/>
            <label htmlFor="female">Female</label>
            <br />
            <h3>Gender Selected: {btn}</h3>
            <br />

            <hr />
            <h3>Drop down</h3>
            <select onChange={(event)=>setCity(event.target.value)} defaultChecked="Delhi">
                <option value="Hyderabad">Hyderabad</option>
                <option value="Delhi">Delhi</option>
                <option value="Punjab">Punjab</option>
                <option value="Bangolore">Bangolore</option>
            </select>

            <h3>Selected city: {city}</h3>
            <br />
            <hr />
        </>
    )
}

// Loop in jsx with map function

// What is Array
// Make Array
// Make Table in Jsx
// Use Map function for Looping

// making normal data

export function Table(){
    const Arr=[
        {
            name:'chandu',
            id:'C8',
            age:'22',
            year:'IV'
        },
        {
            name:'Siddu',
            id:'67',
            age:'22',
            year:'IV'
        },
        {
            name:'Aryan',
            id:'95',
            age:'21',
            year:'IV'
        },
        {
            name:'Ajay',
            id:'LE-11',
            age:'22',
            year:'IV'
        },
    ]
    return(
        <>
        <h3>Dummy data</h3>
            <table border='5' margin='5px'>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Id</td>
                        <td>Age</td>
                        <td>Year</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Chandu</td>
                        <td>C8</td>
                        <td>22</td>
                        <td>IV</td>
                    </tr>

                    <tr>
                        <td>Siddu</td>
                        <td>67</td>
                        <td>22</td>
                        <td>IV</td>
                    </tr>
                    <tr>
                        <td>Aryan</td>
                        <td>95</td>
                        <td>21</td>
                        <td>IV</td>
                    </tr>
                    <tr>
                        <td>Ajay</td>
                        <td>LE-11</td>
                        <td>22</td>
                        <td>IV</td>
                    </tr>   
                </tbody>

            </table>
            <br /><br />

            <h3>Data using Map function</h3>
            <table border="5">
                
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Id</td>
                        <td>Age</td>
                        <td>Year</td>
                    </tr>
                </thead>
                
                <tbody>
                   {
                    Arr.map((item)=>(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.id}</td>
                            <td>{item.age}</td>
                            <td>{item.year}</td>
                        </tr>
                    ))
                   }
                </tbody>
            </table>
        </>
    )
}