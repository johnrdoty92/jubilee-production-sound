import { CssBaseline, Toolbar } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Troubleshooting } from './pages/Troubleshooting/Troubleshooting';
import { SoundSetup } from './pages/SoundSetup/SoundSetup';
import { ThemeProvider } from './theme/theme';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline/>
      <BrowserRouter basename={`/${import.meta.env.DEV ? ``:`jubilee-production-sound`}`}>
        <Header/>
        <Toolbar sx={theme => ({[theme.breakpoints.down(`sm`)]: {display: `none`}})}/>
        <Routes>
          <Route path="/" element={<SoundSetup />} />
          <Route path="troubleshooting" element={<Troubleshooting/>} />
        </Routes>
      </BrowserRouter>
      <Toolbar sx={theme => ({[theme.breakpoints.up(`sm`)]: {display: `none`}})}/>
    </ThemeProvider>
  );
}

export default App;
