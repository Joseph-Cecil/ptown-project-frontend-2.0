import './App.css'
import '@mantine/core/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { DeliveryDetails } from './pages/DeliveryDetails';
import { BadgeCard } from './components/BadgeCard';
import { FormComponent } from './components/Form';


function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/delivery-details' element={<DeliveryDetails/>}/>
      <Route path='/success' element={<BadgeCard/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
