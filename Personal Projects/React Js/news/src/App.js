
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Headers from './Headers';
import News from './Pages/News';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
      <Router>
      <Headers />
        <Routes>
          <Route path='/news' element={<News />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
