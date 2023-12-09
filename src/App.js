import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import './App.css';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import NewsAndAnnouncement from './pages/NewsAndAnnouncement';
import Gallery from './pages/Gallery';
import AboutPage from './pages/AboutPage';
import Events from './pages/Events';
import StakeHolders from './pages/StakeHolders';
import Support from './pages/Support';

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };
  return (
    <div className="App h-full">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/news&announcement' element={<NewsAndAnnouncement />} />
          <Route path='/about/:info' element={<AboutPage />} />
          <Route path='/events/:info' element={<Events />} />
          <Route path='/stakeHolders/:info' element={<StakeHolders />} />
          <Route path='/support/:info' element={<Support />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
