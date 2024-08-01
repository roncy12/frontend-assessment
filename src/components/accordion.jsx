import React, { useState, useEffect } from 'react';
import dataJSON from '../assets/data.json';
import parse from 'html-react-parser';  // Import the parser

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      if (isNowMobile !== isMobile) {
        setIsMobile(isNowMobile);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="container mx-auto p-4 tabAccordion-container">
      {isMobile ? (
        <div className='tabAccordion-content'>
          {dataJSON.map((item, index) => (
            <div key={index}>
              <button
                className={`w-full text-left p-2 border-b border-gray-300 ${
                  index === activeIndex ? 'bg-blue-100' : 'bg-gray-200'
                }`}
                onClick={() => handleAccordionClick(index)}
              >
                {item.title}
              </button>
              <div
                className={`accordion-content ${index === activeIndex ? 'expanded' : ''}`}
              >
                {parse(item.content)}  {/* Parse and render HTML content */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="tabAccordion-content flex border-b border-gray-300">
            {dataJSON.map((item, index) => (
              <button
                key={index}
                className={`flex-1 p-2 text-center ${
                  activeIndex === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200'
                }`}
                onClick={() => handleTabClick(index)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div
            className={`tab-content ${dataJSON[activeIndex] ? 'show' : ''} p-4 border-t border-gray-300`}
          >
            {dataJSON[activeIndex] && parse(dataJSON[activeIndex].content)}  {/* Conditional rendering */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
