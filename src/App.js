import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { SearchboxProvider } from './context/searchbox/SearchboxContext';

function App() {
  return (
    <SearchboxProvider>
    <Router>
    <div className='flex flex-col justify-between h-screen bg-base-200'>
    <Navbar/>
      <main className='container mx-auto px-3 pb-12'>
           <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
               
           </Routes>
      </main>
      <Footer/>
    </div>
    </Router>
    </SearchboxProvider>
  )
}

export default App;
