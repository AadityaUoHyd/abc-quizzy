import React, { useContext } from 'react';
import { ThemeContext } from '../App.jsx';
import { Card, Button } from 'flowbite-react';
import { FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa';

const recommendedBooks = [
  {
    title: "Think Like a Programmer: An Introduction to Creative Problem Solving",
    author: "V. Anton Spraul",
    description: "A great book for understanding the core thought processes behind programming.",
    link: "https://freecomputerbooks.com/Think-Like-A-Programmer-An-Introduction-To-Creative-Problem-Solving.html",
    image: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38",
  },
  {
    title: "The Constitution of India",
    author: "Government of India",
    description: "The supreme law of India. Essential for understanding Indian Polity.",
    link: "https://legislative.gov.in/sites/default/files/COI.pdf",
    image: "https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976",
  },
  {
    title: "Principles of Economics",
    author: "Alfred Marshall",
    description: "A foundational text in classical economics.",
    link: "https://www.gutenberg.org/ebooks/15461",
    image: "https://plus.unsplash.com/premium_photo-1748969164545-22680ccccd3b",
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    description: "An accessible exploration of cosmology and black holes.",
    link: "https://www.amazon.com/Brief-History-Time-Stephen-Hawking/dp/0553380168",
    image: "https://images.unsplash.com/photo-1570676765227-b25aa08d9752",
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    description: "Ancient Chinese military treatise, public domain.",
    link: "https://www.gutenberg.org/ebooks/132",
    image: "https://images.unsplash.com/photo-1630343710506-89f8b9f21d31",
  },
  {
    title: "OpenStax Chemistry 2e",
    author: "OpenStax",
    description: "Free, peer-reviewed chemistry textbook.",
    link: "https://openstax.org/details/books/chemistry-2e",
    image: "https://images.unsplash.com/photo-1598646506899-ac6be1000c2f",
  },
];


export default function BooksRecommended() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-3">
            <FaBookOpen className="text-blue-600" />
            Books Recommended
          </h1>
          <p className={`mt-4 text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Enhance your knowledge with these recommended books and resources for quiz preparation.
            <br />
            <em className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              (Links provided are to legal sources for free access or purchase info. Please verify terms.)
            </em>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendedBooks.map((book, index) => (
            <Card key={index} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg`}>
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/400x200?text=No+Image";
                }}
              />
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                {book.title}
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-3`}>
                <strong>Author:</strong> {book.author}
              </p>
              <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                {book.description}
              </p>
              {book.link && (
                <Button
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="blue"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
                >
                  <FaExternalLinkAlt />
                  View/Download
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
