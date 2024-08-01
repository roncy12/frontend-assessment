// src/App.js
import React from 'react';
import './assets/scss/components.scss';
import Carousel from './components/carousel.jsx';
import Cards from './components/cards.jsx';
import Accordion from './components/accordion.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>

        <main className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accordion" element={<AccordionPage />} />
          </Routes>
        </main>
        <footer>
          <nav>
            <ul>
              <li>
                <Link to="/" className='text-blue-500'>Exercise 1</Link>
              </li>
              <li>
                <Link to="/accordion" className='text-blue-500'>Exercise 2</Link>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Carousel />
      <Cards />
    </>
  );
}

function AccordionPage() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

export default App;
