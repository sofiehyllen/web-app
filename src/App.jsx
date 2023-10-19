
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import Navigation from './components/Navigation';
import SleeptrackPage from './pages/SleeptrackPage';
import SoundPage from './pages/SoundPage';

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
            </Routes> 
        </BrowserRouter>
        
    </section>
  )
}

export default App
