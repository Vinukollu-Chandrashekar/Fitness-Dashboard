export default function Student({student}){
    return(
        <div>
            <li>
                {
                    student.map((student,index)=>(
                        <div key={index}>
                            <ul type = "None" style={
                                {
                                    border:"3px solid green",
                                    borderRadius:"5px",
                                    margin:"15px",
                                    padding:"5px",

                                }
                            }>
                                <li>Name: {student.name}</li>
                                <li>Age: {student.age}</li>
                                <li>Rollno.{student.rollno}</li>
                                <li>Email:{student.email}</li>
                            </ul>
                                        
                        </div>
                    ))
                }
            </li>
        </div>
    )
}