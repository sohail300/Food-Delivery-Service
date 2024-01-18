import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/HomePage';
import Help from './pages/HelpPage';
import Offer from './pages/OfferPage';
import Cart from './pages/CartPage';
import Signin from './pages/SigninPage';
import Restaurant from './pages/RestaurantPage';

function App() {

    return (
        <>
                <RecoilRoot>
                    <BrowserRouter>
                        <Navbar />
                        <Routes>
                            <Route element={<Home />} path='/' />
                            <Route element={<Help />} path='/help' />
                            <Route element={<Offer />} path='/offer' />
                            <Route element={<Cart />} path='/cart' />
                            <Route element={<Signin />} path='/signin' />
                            <Route element={<Restaurant />} path='/restaurant/:resId' />
                        </Routes>
                        <Footer />
                    </BrowserRouter>
                </RecoilRoot>
        </>
    )
}

export default App;