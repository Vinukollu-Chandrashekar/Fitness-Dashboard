import FitnessDashboardNav from "./Fitness_nav";
import FHome from "./FHome";
import FBmi from "./FBmi";
import FAbout from "./FAbout";
import FWorkout from "./FWorkout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function FdMain() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FitnessDashboardNav />}>
          <Route path="/home" element={<FHome />} />
          <Route path="/bmi" element={<FBmi />} />
          <Route path="/workout" element={<FWorkout />} />
          <Route path="/about" element={<FAbout />} />
        </Route>

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}
