import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Latest from "./pages/Latest";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Latest />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
