import './App.css'
import Restaurant from './components/Restaurant';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Youtube from './components/Youtube';
import UserContextProvider from './ContextAPI/UserContextProvider';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {

  return (
    <UserContextProvider>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Restaurant/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path="/youtube" element={<Youtube/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>      
    </UserContextProvider>
  )
}

export default App
