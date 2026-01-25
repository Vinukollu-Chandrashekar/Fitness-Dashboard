import { useState } from "react"

export default function FBmi() {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmi, setBmi] = useState();
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');
    const [ShowPopUp, setShowPopUp] = useState(false);
    const BMI = (event) => {
        event.preventDefault();
        if (!height || !weight) {
            alert("Please Enter Valid Details");
        }
        else {
            const Meters = height / 100;
            const Height_Meters = Meters * Meters;
            const Bmi = weight / Height_Meters;
            setBmi(Bmi);
            if (Bmi < 18.5) {
                setCategory('Under Weight');
                setMessage("😕 You are underweight. Don't worry — consistency and good nutrition will help you gain strength!");
            }
            else if (Bmi >= 18.5 && Bmi <= 24.9) {
                setCategory('Normal Weight');
                setMessage("🎉 Congrats! You are in a healthy range. Keep going and stay consistent 💪");
            }
            else if (Bmi >= 25 && Bmi <= 29.9) {
                setCategory('Over Weight');
                setMessage("🙂 You're doing good! A little more activity and balance will get you to your goal.")

            }
            else if (Bmi >= 30) {
                setCategory('Obese');
                setMessage("🔥 Every journey starts with one step. Stay consistent — you can do this!");
                
            }
            setShowPopUp(true);
        }

    }
    function Modal({ category, message, onClose }) {
        return (
            <div className="modal-backdrop-custom">
                <div className="modal-box-custom">
                    <h3 className="text-primary">{category}</h3>
                    <p className="mt-3">{message}</p>
                    <button onClick={onClose} className="btn btn-primary mt-3">Close</button>
                </div>
            </div>
        );
    }


    return (
        <>
            <div className="home-title">
                <h2>Welcome To BMI Page</h2><br />
                <p><b>Body Mass Index (BMI)</b> is a simple health indicator that helps you understand whether your body weight is appropriate for your height.
                    It is calculated using your height and weight and gives a general idea about your physical fitness level.
                    BMI can help identify if you are underweight, in a healthy range, overweight, or obese.
                    While it does not measure body fat directly, it is a useful tool for tracking overall health and fitness goals.
                </p>
            </div>

            <form action="" className="form-control border border-4 bg-dark rounded shadow-lg w-25">
                <label className="form-label text-primary fw-semibold mb-3">Weight:</label><br />
                <input type="number" placeholder="Enter Weight" className="form-input rounded p-2 w-50 border border-2 shadow" onChange={(event) => setWeight(event.target.value)} value={weight} /><br />
                <label className="form-label text-primary fw-semibold mb-3 mt-2">Height in cm: </label><br />
                <input type="number" placeholder="Enter Height in cm" className="form-input rounded p-2 w-50 border border-2 shadow" onChange={(event) => setHeight(event.target.value)} value={height} /><br />
                <button className="mb-3 btn btn-primary rounded p-1 mt-4 w-50 mx-auto justify-content-center d-flex" onClick={BMI}>Know Your Bmi</button>
            </form>
            
            {ShowPopUp && (
                <Modal
                    category={category}
                    message={message}
                    onClose={() => setShowPopUp(false)}
                />
            )}

        </>
    )
}