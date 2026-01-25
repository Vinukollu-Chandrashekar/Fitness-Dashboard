import { useState } from "react";
import Adduser from "./Adduser";

export default function StudentProfile() {
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [users, setUsers] = useState([]);

    const handlebtn = () => {
        const newUser = {
            name,
            dob,
            email,
            pwd,
        };

        setUsers([...users, newUser]);
        {
            if(name,pwd,email,dob==""){
                alert("Enter Details First");
            }
            else{
                alert("Successfully submitted the form")
            }
        }
        

        setName("");
        setDob("");
        setEmail("");
        setPwd("");
    };

    return (
        <div style={{ border: "2px solid black", padding: "10px", borderRadius: "20px" }}>
            <h1>Student Profile</h1>

            <label>Name: </label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <br /><br />

            <label>DOB: </label>
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
            <br /><br />

            <label>Email: </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <br /><br />

            <label>Password: </label>
            <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} />
            <br /><br />

            <button onClick={handlebtn}>Submit</button>

            <Adduser users={users} />
        </div>
    );
}
