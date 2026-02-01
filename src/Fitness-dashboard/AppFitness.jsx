import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FitnessDashboardNav from "./Fitness_nav";
import FHome from "./FHome";
import FWorkout from "./FWorkout";
import FBmi from "./FBmi";
import FAbout from "./FAbout";
import Footer from "./Footer";
import './Fitness.css'

export default function AppFitness() {
  return (
    <BrowserRouter>
      <FitnessDashboardNav />

      {/* BACKGROUND CONTAINER */}
      <main className="app-content">
        <Routes>
          <Route path="/" element={<FHome />} />
          <Route path="/home" element={<FHome />} />
          <Route path="/workout" element={<FWorkout />} />
          <Route path="/bmi" element={<FBmi />} />
          <Route path="/about" element={<FAbout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
