// Nested Looping:

// .Understand array structure for nested Looping
// .Make outer loop and inner loop 
// .Make component for outer and inner loop
import College from "./College"
export default function NestedLooping(){
    const CollegeData=[
        {
            Name:"Sreyas",
            Place:"Nagole",
            Website:"www.sreyas.com",
            Student:
            [
                {
                name:"chandrashekar",
                age:22,
                rollno:"22VE1A66C8",
                email:"chandra@gmail.com"
            },
            {
                name:"siddhartha",
                age:22,
                rollno:"22VE1A6667",
                email:"siddu@gmail.com"
            },
            {
                name:"aryan",
                age:21,
                rollno:"22VE1A6695",
                email:"aryan@gmail.com"
            },
            {
                name:"ajay",
                age:21,
                rollno:"23VE5A6611",
                email:"ajay@gmail.com",
            }
            ]
        
        },


        {
            Name:"Avanthi",
            Place:"Gunthapalli",
            Website:"www.avanthi.com",
            Student:
            [
                {
                name:"ashwin",
                age:22,
                rollno:"22VE1A66C5",
                email:"ashwin@gmail.com"
                },
                {
                name:"nagamanohar",
                age:22,
                rollno:"22VE1A66c1",
                email:"mano@gmail.com"
                },
                {
                name:"sudharshan",
                age:21,
                rollno:"22VE1A6698",
                email:"laxshmisudha@gmail.com"
                },
                {
                name:"kiranmai",
                age:21,
                rollno:"23VE5A6690",
                email:"kiran@gmail.com",
                }
            ]
        },


        {
            Name:"Mallareddy",
            Place:"Maisammaguda",
            Website:"www.mallareddy.com",
            Student:
            [
                {
                name:"kalyan",
                age:22,
                rollno:"22VE1A6680",
                email:"kalyan@gmail.com"
            },
            {
                name:"vikram",
                age:22,
                rollno:"22VE1A6678",
                email:"vikky@gmail.com"
            },
            {
                name:"nihalpandey",
                age:21,
                rollno:"22VE1A6600",
                email:"pandey@gmail.com"
            },
            {
                name:"praveen",
                age:21,
                rollno:"23VE5A6622",
                email:"veen@gmail.com",
            }
            ]
        },


        {
            Name:"Brilliant",
            Place:"Inamguda",
            Website:"www.brilliant.com",
            Student:
            [
                {
                name:"pavankumar",
                age:22,
                rollno:"22VE1A6610",
                email:"kumar@gmail.com"
            },
            {
                name:"sunil",
                age:22,
                rollno:"22VE1A6687",
                email:"sunil@gmail.com"
            },
            {
                name:"girish",
                age:21,
                rollno:"22VE1A6615",
                email:"greatgirish@gmail.com"
            },
            {
                name:"mahesh",
                age:21,
                rollno:"23VE5A6601",
                email:"mahesh@gmail.com",
            }
            ]
        }
    ]
    return(
        <>
            <h2>Nested Looping Concept</h2>
        {
            CollegeData.map((college,index)=>(
                <div style={{
                    backgroundColor:"#ccc",
                    padding:"10px",
                    border:"3px solid black",
                    margin:'10px',
                    borderRadius:"15px",
                    width:'500px'

                }} key={index}>
                    <h3>College Name:{college.Name}</h3>
                    <College college={college}/>
                </div>
            ))
        }
        </>
        
    )
}