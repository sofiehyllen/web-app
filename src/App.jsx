
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import Navigation from './components/Navigation';
import SleeptrackPage from './pages/SleeptrackPage';
import SoundPage from './pages/SoundPage';
import StatisticsPage from './pages/StatisticsPage';
import ToolPage from './pages/ToolPage';
import UserPage from './pages/UserPage';
import SleepingPage from './pages/SleepingPage';
import ForestPage from './pages/ForestPage';
import Exercises from './pages/ExercisesPage'
import Meditation from './pages/Meditation'
import UserModal from "./pages/UserModal";




function App() {
  return (
    <section>
        <BrowserRouter>
            <Navigation/>
            <Routes> 
                <Route exact path="/" element={<HomePage/>} /> 
                <Route exact path="/homepage" element={<HomePage/>} /> 
                <Route exact path="/sleeptrackpage" element={<SleeptrackPage/>} /> 
                <Route exact path="/menupage" element={<MenuPage/>} /> 
                <Route exact path="/soundpage" element={<SoundPage/>} />
                <Route exact path="/toolpage" element={<ToolPage/>} />
                <Route exact path="/statisticspage" element={<StatisticsPage/>} />
                <Route exact path="/userpage" element={<UserPage/>} />
                <Route exact path="/sleepingpage" element={<SleepingPage/>} />
                <Route exact path="/forestpage" element={<ForestPage/>} />
                <Route exact path="/exercises" element={<Exercises/>} />
                <Route exact path="/meditation" element={<Meditation/>} />
                <Route exact path="/usermodal" element={<UserModal/>} />
            </Routes> 
        </BrowserRouter>
        
    </section>
  )
}

export default App
