import Header from './components/Header';
import MainBody from './components/MainBody';
import About from './pages/About';
import { FeedbackProvider } from './context/FeedbackContext';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainBody />} />
          <Route path='/about' element={<About />} />
        </Routes>  
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
