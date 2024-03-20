import './App.css'
import Restaurant from './components/Restaurant';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Youtube from './components/Youtube';

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Restaurant/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path="/youtube" element={<Youtube/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
