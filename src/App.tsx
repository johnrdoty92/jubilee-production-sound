import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Help } from './pages/Help/Help';
import { SoundSetup } from './pages/SoundSetup/SoundSetup';
import { ThemeProvider } from './theme/theme';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline/>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SoundSetup />} />
          <Route path="/help" element={<Help/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
