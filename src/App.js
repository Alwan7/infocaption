import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Homepage from './Pages/Homepage'
function App() {
  return (
    <Router>
         <Routes>
                  <Route path="/" element={<Homepage />} />                                 
          </Routes>
     
    </Router>
  );
}

export default App;
