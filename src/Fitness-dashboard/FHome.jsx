import { useEffect, useState } from "react"

export default function FHome() {
    const [time, setTime] = useState();
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleString())
        })
    })
    return (
        <>
            <div className="home-title">
                <h2 >Welcome to Your Fitness Dashboard</h2>
                <h3>{time}</h3>
                <br /><br />
                <p>
                    <b>Your fitness journey starts with one small step.</b><br />
                    You don’t need a perfect plan or a perfect body —
                    just show up today and stay consistent.<br></br>
                    This dashboard is here to help you track, improve, and stay motivated.
                </p>
            </div>
            <br /><br />
            <div className="d-flex ms-auto gap-5 flex-wrap">

                <div className="card bg-dark text-primary shadow" style={{ flexBasis: "280px" }}>
                    <div className="card-body">
                        <h5>Today's Focus</h5>
                        <p>Be active for at least 20 to 30 minutes.</p>
                    </div>
                </div>

                <div className="card bg-dark text-primary shadow" style={{ flexBasis: "280px" }}>
                    <div className="card-body">
                        <h5>Motivation</h5>
                        <p>Consistency beats intensity.</p>
                    </div>
                </div>

                <div className="card bg-dark text-primary shadow" style={{ flexBasis: "280px" }}>
                    <div className="card-body">
                        <h5>Quick Tip</h5>
                        <p>Stretch after workouts.</p>
                    </div>
                </div>

            </div>


        </>
    )
}