import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Help } from './pages/Help/Help';
import { SoundSetup } from './pages/SoundSetup/SoundSetup';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SoundSetup />} />
          <Route path="/help" element={<Help/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
