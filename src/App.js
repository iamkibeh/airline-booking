import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css'
import Features from './components/pages/Features'
import Footer from './components/pages/Footer'
import HeroSection from './components/pages/HeroSection'
import Navbar from './components/pages/Navbar'
import Services from './components/pages/Services'

function App() {
  const theme = createTheme({
    palette: {
      background: {
        paper: '#fff',
      },
      primary: {
        main: '#173A5E',
        secondary: '#46505A',
      },
    },
    typography: {
      fontFamily: 'Nunito',
    },
  })
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Navbar />
        <HeroSection />
        <Services />
        <Features />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App
