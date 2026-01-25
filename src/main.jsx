import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppFitness from './Fitness-dashboard/AppFitness.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppFitness />
  </StrictMode>
)
