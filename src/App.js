
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Jobs from './components/pages/Jobs';
import { useState } from 'react';
//import Jobs from "./components/Jobs/Jobs"

function App() {
  const [menu, setMenu] = useState("");
  
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Search />
        <Hero />
        <Feature />
        <Footer />
        <Routes>
          <Route path='/jobs' element={<Jobs/>}>Jobs</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App