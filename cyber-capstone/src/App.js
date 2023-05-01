
import './index.css';
import { Navigate, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Apply from './Apply';

function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path='home' element={<Home/>}/>
          <Route path='apply' element={<Apply/>}/>
        </Routes>
    </div>
  );
}

export default App;
