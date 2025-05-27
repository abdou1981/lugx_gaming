import {Navbar, Footer, Main} from './components/index'
import { Home, ContactUs, OurShop, Product } from './pages/index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/ourshop" element={<OurShop />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </Main>
        <Footer />
      </Router>           
    </>
  )
}

export default App
