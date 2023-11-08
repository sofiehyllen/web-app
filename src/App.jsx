// Denne side er kodet af: Karoline Lerche & Sofie Hyllen


import { Routes, Route, BrowserRouter } from "react-router-dom"; 
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
import ExercisesPage from './pages/ExercisesPage'
import MeditationPage from './pages/MeditationPage'
import RatingDelete from "./components/RatingDelete";
import UserModal from "./pages/UserModal";
import { AnimatePresence } from "framer-motion";




function App() {
  return (
    <section>
        {/* Indlejrer BrowserRouter til at omgive ruteindholdet */}
        <BrowserRouter>
            {/* Navigation komponent */}
            <Navigation/>
            {/* AnimatePresence for at håndtere tilstedeværelse af animerede elementer */}
            <AnimatePresence>
                {/* Routes for at definere forskellige stier og komponenter */}    
                <Routes> 
                    <Route path="/" element={<UserModal/>} /> 
                    <Route path="/homepage" element={<HomePage/>} /> 
                    <Route path="/sleeptrackpage" element={<SleeptrackPage/>} /> 
                    <Route path="/menupage" element={<MenuPage/>} /> 
                    <Route path="/soundpage" element={<SoundPage/>} />
                    <Route path="/toolpage" element={<ToolPage/>} />
                    <Route path="/statisticspage" element={<StatisticsPage/>} />
                    <Route path="statisticspage/posts/:postId" element={<RatingDelete />} />
                    <Route path="/userpage" element={<UserPage/>} />
                    <Route path="/sleepingpage" element={<SleepingPage/>} />
                    <Route path="/forestpage" element={<ForestPage/>} />
                    <Route path="/exercises" element={<ExercisesPage/>} />
                    <Route path="/meditation" element={<MeditationPage/>} />
                    <Route path="/usermodal" element={<UserModal/>} />
                    <Route path="/*" element={<HomePage/>}/> {/* Fallback rute til hjemmesiden */}
                </Routes> 
            </AnimatePresence>
        </BrowserRouter>
    </section>
  )
}

export default App
