import { Routes, Route, Navigate } from "react-router-dom";
import FitnessDashboardNav from "./Fitness_nav";
import FHome from "./FHome";
import FWorkout from "./FWorkout";
import FBmi from "./FBmi";
import FAbout from "./FAbout";
import './Fitness.css'
export default function FdMain() {
  return (
    <Routes>
      <Route element={<FitnessDashboardNav />}>
        <Route path="/home" element={<FHome />} />
        <Route path="/workout" element={<FWorkout />} />
        <Route path="/bmi" element={<FBmi />} />
        <Route path="/about" element={<FAbout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
