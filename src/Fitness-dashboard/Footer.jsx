import icon from "./Gym_icon.png";
import { Link } from "react-router";
export default function Footer() {

    return (
        <>
            <p className="Footer text-light">
                <b className="text-primary">Fitness Dashboard 
                    <Link to='/home' className="navbar-brand " >
                        <img className='img-fluid rounded-circle' height="40" width='40' src={icon} alt="sorry" />
                    </Link></b><br />
                A simple fitness tracking web app.<br/>
                Built with React & Bootstrap.<br/>
                Made for learning & practice.
            </p>
        </>
    )
}