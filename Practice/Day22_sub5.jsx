import { useContext } from "react"
import { SubjectContext } from "./Day22_sub1"

export default function Subject(){
    const subject = useContext(SubjectContext);
    return(
        <>
            <div className="form-control bg-red mt-4">
                <h2>Subject is: {subject}</h2>
            </div>
        </>
    )
}