import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact PyTech Digital - Get Free Consultation | +91 9205 222 170</title>
        <meta
          name="description"
          content="Contact PyTech Digital for professional digital services. Call +91 9205 222 170 or email info@pytechdigital.com. Office in Noida, serving across India."
        />
        <link rel="canonical" href="https://pytech.digital/contact" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 via-blue-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Have a project in mind? Let's discuss how we can help your business grow
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Office</h3>
                <p className="text-gray-600 text-sm">
                  2nd Floor, Plot No. 21 & 21A<br />
                  Sector 142, Noida<br />
                  Uttar Pradesh 201304
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <a href="tel:+919205222170" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  +91 9205 222 170
                </a>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:info@pytechdigital.com" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  info@pytechdigital.com
                </a>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600 text-sm">
                  Mon - Sat: 9:00 AM - 7:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactSection />

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Find Us
              </h2>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0989673293587!2d77.40197731508236!3d28.59565599398736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f8f9dd7d4f%3A0x6a7b1f3f8f6f5f8f!2sSector%20142%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="PyTech Digital Office Location"
              ></iframe>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;