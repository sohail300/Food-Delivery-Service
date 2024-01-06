import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';

function App(){
    
    return (
        <>
        <Theme accentColor="ruby" grayColor="sand" radius="large" scaling="95%">
        <Navbar />
        <Home />
        <Footer />
        </Theme>
        </>
    )
}

export default App;