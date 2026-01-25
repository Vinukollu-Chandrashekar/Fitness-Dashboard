import { useState } from "react";

export default function FWorkout(){
    const[Workout,setWorkout]=useState('');
    const[Duration,setDuration]=useState('');
    const[Workouts,setWorkouts]=useState([]);
    const[Calories,setCalories]=useState(0);
    const[WorkoutsTillNow,setWorkoutsTillNow]=useState(false);
    
    const HandleBtn=(event)=>{
        event.preventDefault();
        if(!Workout||!Duration){
            alert('Please Enter Valid Details');
        }   
        const CPM = {
            Cardio: 8,
            Running: 10,
            Cycling: 7,
            Yoga: 4,
            Strength: 6,
            Swimming:9,
        };
        const calculatedCalories = Number(Duration)*CPM[Workout];
        setCalories(calculatedCalories);
        const NewItem={
            Workout,
            Duration,
            Calories:calculatedCalories,
        }
        
  setWorkouts([...Workouts,NewItem]);
            alert('Data Has Been Submitted');
            setWorkout('');
            setDuration('');
            
    }
    const TotalWorkouts=Workouts.reduce((total, item) => {
  return total + item.Calories;
}, 0);

    return(
        <>
            <form className="form-control border border-4 border-radius 5 align-items-center w-50 bg-dark mb-4" style={{maxWidth:'500px'}} action="">
                <h3 className="workout-title mb-3 bg-secondary rounded p-2">Add Workout</h3>
                <label className="form-label p-2 rounded text-primary fw-semibold mb-3">Workout Name: </label>
                <select name="workout" className="form-select" id="" onChange={(event)=>setWorkout(event.target.value)} value={Workout} >
                    <option value="" className="form-option">Workout</option>
                    <option value="Cardio" className="form-option">Cardio</option>
                    <option value="Running" className="form-option">Running</option>
                    <option value="Cycling" className="form-option">Cycling</option>
                    <option value="Yoga" className="form-option">Yoga</option>
                    <option value='Strength' className="form-option">Strength</option>
                    <option value='Swimming' className="form-option">Swimming</option>
                </select><br />
                <label className="form-label text-primary fw-semibold mb-3">Duration: </label>
                <select className="form-select rounded p-1" onChange={(event)=>setDuration(event.target.value)} value={Duration} >
                    <option value="" className="form-option">Mins</option>
                    <option value="5" className="form-option">5</option>
                    <option value="10" className="form-option">10</option>
                    <option value="15" className="form-option">15</option>
                    <option value="20" className="form-option">20</option>
                    <option value="25" className="form-option">25</option>
                    <option value="30" className="form-option">30</option>
                    <option value="35" className="form-option">35</option>
                    <option value="40" className="form-option">40</option>
                    <option value="45" className="form-option">45</option>
                    <option value="50" className="form-option">50</option>
                    <option value="60" className="form-option">60</option>
                    
                </select>
                <button className=" mb-3 d-flex btn btn-primary w-50 justify-content-center mt-4 p-2 mx-auto" onClick={HandleBtn}>Add Workout</button>
            </form>
            <br />
           <button className="mb-3 d-flex btn btn-primary w-25 justify-content-center mt-4 p-2 mx-auto" onClick={()=>setWorkoutsTillNow(!WorkoutsTillNow)}>Workouts Till Now</button>
            {
                WorkoutsTillNow?
                <div className="card border border-2 primary bg-dark text-light rounded shadow w-50 container-fluid">
                <div className="card-title">
                    <h2>Workouts Till Now</h2>
                </div>
                <div className="card-body">
                    
                    {
                        Workouts.map((item,index)=>(
                            
                                <div className="mb-3">
                                    <h5 key={index}>Workout {index+1}: {item.Workout} | {item.Duration}Mins | {item.Calories}Kcal</h5><br />
                                </div>
                        ))
                    }
                    <h4 className="text-light mx-5">Total Calories Burned : {TotalWorkouts}Kcal</h4>
                </div>
            </div>:null
        
            }
            
        </>
    )
}