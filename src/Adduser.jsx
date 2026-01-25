import { useState } from "react";
import StudentProfile from "./SimpleProject";

export default function Adduser({ users }) {
    const [showForm, setShowForm] = useState(false);
    const [showUsers, setShowUsers] = useState(false);

    return (
        <>
            <h2>Actions</h2>

            <button onClick={() => setShowForm(true)}>Add user</button>
            <button onClick={() => setShowUsers(!showUsers)}>Existing students</button>

            {showForm && <StudentProfile />}

            {showUsers && (
                <div>
                    <h3>Existing Users</h3>

                    {users.map((user, index) => (
                        <div key={index} style={{ border: "1px solid gray", margin: "10px", padding: "5px" }}>
                            <p>Name: {user.name}</p>
                            <p>DOB: {user.dob}</p>
                            <p>Email: {user.email}</p>
                            <p>Pwd: {user.pwd}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
