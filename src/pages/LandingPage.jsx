import React, { useContext } from 'react';
import { ThemeContext } from '../App.jsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from 'flowbite-react';
import { FaUsers, FaChartLine, FaMobileAlt, FaQuoteLeft } from 'react-icons/fa';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import heroPic from '../assets/heropic.png';
import featurePic from '../assets/feature.png';

const LandingPage = () => {
  const { darkMode } = useContext(ThemeContext);

  // Carousel settings for testimonials and team
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // Sample data (replace with API calls to FastAPI)
  const features = [
    {
      icon: <FaUsers className="w-8 h-8 text-white" />,
      title: 'Community-Driven Quizzes',
      description: 'Join a vibrant community to create and explore quizzes across various categories.',
      bgColor: 'bg-blue-500',
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-white" />,
      title: 'Progress Tracking',
      description: 'Monitor your quiz performance with detailed analytics and dashboards.',
      bgColor: 'bg-gray-500',
    },
    {
      icon: <FaMobileAlt className="w-8 h-8 text-white" />,
      title: 'Cross-Platform Access',
      description: 'Enjoy ABC-Quizzy on any device—desktop, tablet, or mobile.',
      bgColor: 'bg-yellow-500',
    },
  ];

  const team = [
    {
      name: 'Aaditya B Chatterjee',
      role: 'CEO, Founder, Lead Developer',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/the-platenet/refs/heads/main/aadi.jpg?auto=format&fit=crop&w=300&q=80',
      linkedin: 'https://www.linkedin.com/in/aaditya-bachchu-chatterjee-0485933b/',
    },
    { name: 'Santosh Bhandari', role: 'AI Specialist', image: 'https://images.unsplash.com/photo-1567784177951-6fa58317e16b?auto=format&fit=crop&w=300&q=80', linkedin: '#' },
    { name: 'Shreya Kiki', role: 'UI/UX Developer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80', linkedin: '#' },
  ];

  const testimonials = [
    {
      quote: 'ABC-Quizzy has transformed the way I learn! The quizzes are engaging and fun.',
      name: 'Sumit Patel',
      role: 'Computer Programming Quizzer',
      image: 'https://imgs.search.brave.com/9tOkDoTL8tbUcZO07nFG1mnjM1DUdcCnLTGFnhoVl8w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/OTQyMDM0My9waG90/by9zbWlsaW5nLW1h/bi1vdXRkb29ycy1p/bi10aGUtY2l0eS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/OGwtZ09ib0dFRlN5/Q0ZYcjA5RWd1RG1W/MEUwYkZUNXVzQW1z/MXd5RkJoOD0',
    },
    {
      quote: 'The platform’s design is sleek, and the community feature is fantastic!',
      name: 'Arjun Mehta',
      role: 'Science & Tech Enthusiast',
      image: 'https://imgs.search.brave.com/My0pGNVU_s6U4mXtUXogLqvwYeroIBkPHylKHccYNtc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTc4NjI5MjEtMzc4/MjljNzkwZjE5P2Zt/PWpwZyZxPTYwJnc9/MzAwMCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE0zeDhiV0Z1ZkdW/dWZEQjhmREI4Zkh3/dw.jpeg',
    },
    {
      quote: 'Its better than playing any indoor games. Enjoyed and learnt a lot!',
      name: 'Sohan Singh',
      role: 'Telangana High Court Lawyer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${heroPic})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in">
            Welcome to ABC-Quizzy
          </h1>
          <p className="text-lg sm:text-2xl mb-8 text-gray-100 animate-fade-in delay-100">
            Play, Think and Learn with Interactive Quizzes!
          </p>
          <div className="transform hover:scale-105 transition-transform">
              <Button
                size="xl"
                gradientMonochrome="info"
                href="/sign-up"
                className="animate-fade-in delay-200"
              >
                Get Started Now
              </Button>
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl font-extrabold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Why Choose ABC-Quizzy?
          </h2>
          <p className={`text-center text-lg mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Discover the features that make learning fun and engaging.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className={`flex-shrink-0 w-12 h-12 ${feature.bgColor} flex items-center justify-center mr-4 shadow-md`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-80 md:h-96">
              <img
                src={featurePic}
                alt="Features"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl font-extrabold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Meet Our Team
          </h2>
          <p className={`text-center text-lg mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            The passionate people behind ABC-Quizzy.
          </p>
          <Slider {...sliderSettings}>
            {team.map((member, index) => (
              <div key={index} className="px-4">
                <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center p-6 transform hover:scale-105 transition-transform duration-300`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{member.name}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                  >
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl font-extrabold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            What Our Users Say
          </h2>
          <p className={`text-center text-lg mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Hear from our community of quiz enthusiasts.
          </p>
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className={`bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300`}>
                  <FaQuoteLeft className="text-blue-600 dark:text-blue-400 text-3xl mb-4" />
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{testimonial.quote}</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Ready to Quiz?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Join ABC-Quizzy today and start creating and solving quizzes!
          </p>
          <Button
            size="xl"
            gradientDuoTone="cyanToBlue"
            href="/register"
            className="transform hover:scale-105 transition-transform w-1/2 mx-auto"
          >
            Register Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;