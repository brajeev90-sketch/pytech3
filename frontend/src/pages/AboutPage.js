import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Award, Users, Target, Heart, CheckCircle2 } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project we undertake',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority, and we work closely with you',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results and ROI',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Transparent communication and honest business practices',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About PyTech Digital - Leading Digital Agency in India</title>
        <meta
          name="description"
          content="Learn about PyTech Digital, a leading digital agency in India offering branding, web design, app development, and digital marketing services since 2014."
        />
        <link rel="canonical" href="https://pytech.digital/about" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 via-blue-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                About PyTech Digital
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Your trusted partner for comprehensive digital solutions across India
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                  Founded in 2014, PyTech Digital started with a simple mission: to help businesses across India
                  succeed in the digital world. Based in Noida, we've grown from a small team to a full-service
                  digital agency serving clients across India.
                </p>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                  Over the years, we've completed hundreds of successful projects, from stunning websites and
                  mobile apps to comprehensive digital marketing campaigns. Our commitment to quality, innovation,
                  and client satisfaction has made us a trusted partner for businesses of all sizes.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Today, we're proud to serve clients in over 50 cities across India, helping them achieve their
                  digital goals and grow their businesses.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="Our team"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                    <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose PyTech Digital?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Expert team of professionals with 10+ years of experience',
                'Comprehensive digital solutions under one roof',
                'Proven track record with 500+ successful projects',
                '24/7 customer support and ongoing maintenance',
                'Competitive and transparent pricing',
                'Latest technology and industry best practices',
                'Customized solutions tailored to your business',
                'On-time delivery and project management',
              ].map((reason, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-cyan-600 mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help your business grow and succeed in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919205222170"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call +91 9205 222 170
              </a>
              <a
                href="mailto:info@pytechdigital.com"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>

        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;