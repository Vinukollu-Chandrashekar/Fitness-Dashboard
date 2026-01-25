import Student from "./Student";


export default function College({college}){
    return(
        <div>
            
                    <ul>
                        <li>Place:  {college.Place}</li>
                        <li>Website:{college.Website}</li>
                        <li><h3>Student Details:</h3></li>
                        <Student student={college.Student}/>   
                    </ul>
                 
        </div>
    )
}