import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Added from './Components/Added';
import Update from './Components/Update';
import Reades from './Components/Reades';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/added' element={<Added />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/read/:id' element={<Reades />} />
      </Routes>
    </div>
  );
}

export default App;
