//1. import routes
import { Route, Routes } from 'react-router-dom'

// 3. import all pages
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import './App.css'

// 5.import header and footer
import Header from './components/Header'
import Footer from './components/Footer'






function App() {


  return (
    <>
    
    {/* 2.set paths for landing page, home and history.It should wriiten inside routes*/}

    {/* 6. use header */}

    <Header />

    <Routes>
    
    {/* 4.give path for all pages  using route tag with path and element attribute*/}
    <Route path='/' element={<Landing/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/history' element={<History/>} />
    </Routes>

    {/* 6.use footer */}

    <Footer />
    </>
  )
}

export default App
