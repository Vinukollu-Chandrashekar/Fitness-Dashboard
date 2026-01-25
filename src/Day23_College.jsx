import { Link, Outlet } from "react-router-dom";

export default function College() {
    return (
        <div
            className="container-fluid d-flex flex-column align-items-center"
            style={{ minHeight: "calc(100vh - 56px)" }}
        >
            <h2 className="mb-4">College Page</h2>
            <Link to='/' className="text-decoration-none fw-semibold">Go To Home</Link><br />

            <div className="d-flex gap-5 mb-4">
                <Link
                    to=""
                    className="text-primary text-decoration-none fs-4 fw-semibold"
                >
                    Student
                </Link>

                <Link
                    to="department"
                    className="text-primary text-decoration-none fs-4 fw-semibold"
                >
                    Department
                </Link>
            </div>
            <Outlet />
        </div>
    );
}
