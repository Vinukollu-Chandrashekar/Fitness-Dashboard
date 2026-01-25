export default function FAbout() {
    return (
        <>
            <div className="home-title" >
                <h1>Fitness Dashboard</h1><br />
                <p>
                    <b>Fitness Dashboard </b> is a simple and interactive web application designed to help users track their daily workouts, calculate calories burned, and understand their Body Mass Index (BMI).
                    This app focuses on consistency, awareness, and motivation rather than complexity.
                </p>
            </div>

            <div className="d-flex ms-auto gap-5 flex-wrap mt-4">
                <div className="card bg-dark text-primary fw-semibold" style={{ flexBasis: "250px" }}>
                    <div className="card-body">
                        <h5>Workout Tracking</h5><br />
                        <p>
                            Log your daily activities and stay consistent
                        </p>
                    </div>
                </div>

                <div className="card bg-dark text-primary fw-semibold" style={{ flexBasis: "250px" }}>
                    <div className="card-body">
                        <h5>Calories Calculation</h5><br />
                        <p>
                            Instant calorie estimation based on workouts
                        </p>
                    </div>
                </div>
                
                <div className="card bg-dark text-primary fw-semibold" style={{ flexBasis: "250px" }}>
                    <div className="card-body">
                        <h5>BMI Analysis</h5>
                        <p>Understand your health category in seconds</p><br />
                    </div>
                </div>
            </div>
        </>
    )
}