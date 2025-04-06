
import './App.css';
import  Login  from './Pages/Login/Login';
import Nav from './Pages/Landing Page/Nav'
import MovieCard from './Pages/Landing Page/Movie'
import Back from './components/Begning'
import Begning from './components/Begning'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



// function App() {
//   return (
//  <>

//   <Login/>





//  </>
//   );
// }
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/begning" element={<Begning />} />
      </Routes>
    </Router>
  );
}

export default App;
