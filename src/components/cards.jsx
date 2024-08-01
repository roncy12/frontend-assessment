import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import cardImage from '../assets/img/400x300.png';

const sections = [
  {
    id: 1,
    content: (
      <>
        <p className="card-description text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </>
    ),
    bgColor: 'bg-white-600',
    textColor: 'text-gray',
    cardImage: cardImage,
    altImage: "Card Image 1",
    buttonText: "Read more",
    buttonLink: "#"
  },
  {
    id: 2,
    content: (
      <>
        <p className="card-description text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </>
    ),
    bgColor: 'bg-white-600',
    textColor: 'text-gray',
    cardImage: cardImage,
    altImage: "Card Image 2",
    buttonText: "Read more",
    buttonLink: "#"
  },
  {
    id: 3,
    content: (
      <>
        <p className="card-description text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      </>
    ),
    bgColor: 'bg-white-600',
    textColor: 'text-gray',
    cardImage: cardImage,
    altImage: "Card Image 3",
    buttonText: "Read more",
    buttonLink: "#"
  }
];

const Cards = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="gridCard grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map(section => (
          <motion.div
            key={section.id}
            className={`${section.bgColor} ${section.textColor} p-4 rounded-lg shadow-md flex flex-col justify-between cardItem`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={section.cardImage} alt={section.altImage} />
            {section.content}
            <a href={section.buttonLink} className="cardButton border border-gray-800 mt-4 inline-block px-6 py-2 text-gray rounded-full transition-colors duration-300 text-center">{section.buttonText}</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
