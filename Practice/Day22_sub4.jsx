import { useContext } from "react";
import Subject from "./Day22_sub5";
import { SubjectContext } from "./Day22_sub1";

export default function StudentComponent(){
    
    return(
        <>
            <div className="form-control bg-warning mt-4">
                <h2>Student Component</h2>
                <Subject />
            </div>
        </>
    )
}