import { CssBaseline } from '@mui/material';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Help } from './pages/Help/Help';
import { SoundSetup } from './pages/SoundSetup/SoundSetup';
import { ThemeProvider } from './theme/theme';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline/>
      <Header/>
      <HashRouter>
        <Routes>
          <Route path="/" element={<SoundSetup />} />
          <Route path="/help" element={<Help/>} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
