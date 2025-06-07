import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App.jsx';
import { Card, Button, Label, TextInput, Textarea } from 'flowbite-react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaQuestionCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function Contact() {
  const { darkMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Placeholder for backend API call
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      toast.success('Message sent successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <FaEnvelope className="text-5xl text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contact Us
          </h1>
          <p className={`mt-4 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Have questions or feedback? Reach out to us, and we’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg`}>
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" value="Your Name" className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                <TextInput
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1"
                  placeholder="Aadi Raj"
                />
              </div>
              <div>
                <Label htmlFor="email" value="Your Email" className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                <TextInput
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1"
                  placeholder="example@domain.com"
                />
              </div>
              <div>
                <Label htmlFor="message" value="Your Message" className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1"
                  placeholder="Type your message here..."
                  rows={5}
                />
              </div>
              <Button
                type="submit"
                color="blue"
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg`}>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-600 text-xl mr-3" />
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <a href="mailto:support@abcquizzy.com" className="hover:underline">support@abcquizzy.com</a>
                  </p>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-blue-600 text-xl mr-3" />
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    +91 (900) 000-0000
                  </p>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-blue-600 text-xl mr-3" />
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    123 Learning Lane, HiTech City, Hyderabad
                  </p>
                </div>
              </div>
            </Card>

            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg`}>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center`}>
                    <FaQuestionCircle className="text-blue-600 mr-2" />
                    How do I reset my password?
                  </h3>
                  <p className={`mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Use the "Forgot Password" link on the login page to receive a reset link via email.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center`}>
                    <FaQuestionCircle className="text-blue-600 mr-2" />
                    Can I suggest new quiz categories?
                  </h3>
                  <p className={`mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Yes! Send your suggestions via this contact form, and we’ll consider them for future updates.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center`}>
                    <FaQuestionCircle className="text-blue-600 mr-2" />
                    Is my data secure?
                  </h3>
                  <p className={`mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    We use industry-standard encryption to protect your data. See our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> for details.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}