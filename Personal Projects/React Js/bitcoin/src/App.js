
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Coin from './components/Coin'
import Exchange from './components/Exchange'
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/coin' element={<Coin />} />
          <Route path='/exchange' element={<Exchange />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
