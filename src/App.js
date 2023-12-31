
import './App.css';
import Home from "./pages/Home/Home"
import List from "./pages/List/List"
import Hotel from './pages/hotel/Hotel';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
