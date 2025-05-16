import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import openRoles from '../../careersData';

// You can keep your existing CSS or convert it to Tailwind
import './corevalus.css';

const useFadeInOnScroll = () => {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

const CareersSection = () => {
  const [coreValuesRef, coreValuesVisible] = useFadeInOnScroll();
  const [selectedDepartment, setSelectedDepartment] = useState('All departments');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const departments = [
    'All departments',
    'Engineering',
    'Growth',
    'Marketing',
    'Operations',
    'Sales',
  ];

  const filteredRoles =
    selectedDepartment === 'All departments'
      ? openRoles
      : openRoles.filter((role) => role.department === selectedDepartment);

  const londonRoles = openRoles.filter(role =>
    role.location.toLowerCase().includes('london')
  );

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-white border-b py-3 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="font-bold text-black">
              atlys<sup>®</sup> VISAS ON TIME
            </Link>
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
            <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:items-center`}>
              <div className="flex flex-col md:flex-row text-black font-semibold">
                <Link to="/about-us" className="md:ml-4 mt-2 md:mt-0">About Us</Link>
                <button 
                  onClick={() => document.getElementById('core-values')?.scrollIntoView({ behavior: 'smooth' })}
                  className="md:ml-4 mt-2 md:mt-0 text-left"
                >
                  Core Values
                </button>
                <Link to="/careers" className="md:ml-4 mt-2 md:mt-0">Open Roles</Link>
                <Link to="/perks" className="md:ml-4 mt-2 md:mt-0">Perks</Link>
                <Link to="/contact" className="md:ml-4 mt-2 md:mt-0">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Careers Header */}
      <div id="careers" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Your journey to making a more open world begins here.</h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Open Roles
              </button>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img src="/assets/images/company/careers.webp" alt="Careers" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div id="our-mission" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img src="/assets/images/company/missiom.webp" alt="Mission" className="w-full" />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">Our Story & Mission</h2>
              <p className="mb-3">Atlys' mission is to enable every person on earth to travel freely.</p>
              <p className="mb-3">
                Atlys was <strong>founded in 2021</strong> with the vision of simplifying the visa process. 
                Our motto is: <strong>"Treat your customer like your date."</strong>
              </p>
              <p>
                We automate the pain point of visas to enable efficient travel. One customer has applied for 
                32 visas through Atlys in a year. We've processed <strong>1.2 million visas</strong> globally.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div 
        id="core-values" 
        ref={coreValuesRef} 
        className={`py-12 bg-white fade-in-section ${coreValuesVisible ? 'is-visible' : ''}`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
            <div>
              <img src="/assets/images/company/corevalue02.webp" alt="" className="h-20 mx-auto mb-3" />
              <h5 className="text-lg font-bold">Treat The Customer Like Your Date</h5>
              <p>Impress customers like you're on a date.</p>
            </div>
            <div>
              <img src="/assets/images/company/corevalue03.webp" alt="" className="h-20 mx-auto mb-3" />
              <h5 className="text-lg font-bold">Move at the Speed of Light</h5>
              <p>Speed up learning and innovation by moving fast.</p>
            </div>
            <div>
              <img src="/assets/images/company/corevalue05.webp" alt="" className="h-20 mx-auto mb-3" />
              <h5 className="text-lg font-bold">Conquer, Not Compete</h5>
              <p>Dominate markets with focus and boldness.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <img src="/assets/images/company/corevalue06.webp" alt="" className="h-20 mx-auto mb-3" />
              <h5 className="text-lg font-bold">Be Your Self, Not Your Selfie</h5>
              <p>Authenticity drives diversity and growth.</p>
            </div>
            <div>
              <img src="/assets/images/company/corevalue07.webp" alt="" className="h-20 mx-auto mb-3" />
              <h5 className="text-lg font-bold">Celebrate Breaking</h5>
              <p>Move fast and break things — that's how we learn.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Open Roles */}
      <div id="open-roles" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Open Roles</h2>
          <div className="flex justify-center flex-wrap mb-8">
            {departments.map((dept) => (
              <button
                key={dept}
                className={`m-1 px-4 py-2 rounded ${
                  selectedDepartment === dept
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setSelectedDepartment(dept)}
              >
                {dept}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredRoles.map((role) => (
              <div key={role.id} className="bg-white p-6 rounded border shadow-sm h-full">
                <h5 className="font-bold text-lg">{role.title}</h5>
                <p className="text-gray-500 mb-1">{role.location} | {role.type}</p>
                <p className="text-sm mb-4">{role.description}</p>
                <button className="text-blue-600 border border-blue-600 hover:bg-blue-50 text-sm px-3 py-1 rounded">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engineering Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left side - Images */}
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-1">
                  <img
                    src="/assets/images/company/eng03.webp"
                    alt="Team collaboration"
                    className="rounded object-cover h-80 w-full"
                  />
                </div>
                <div className="col-span-1 flex flex-col space-y-3">
                  <img
                    src="/assets/images/company/eng02.webp"
                    alt="Team discussion"
                    className="rounded object-cover h-40 w-full"
                  />
                  <img
                    src="/assets/images/company/eng01.webp"
                    alt="All you need is a passport"
                    className="rounded object-cover h-40 w-full"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Text */}
            <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
              <h2 className="text-4xl font-bold mb-4">Engineering at Atlys</h2>
              <p className="text-xl mb-3">
                We're a lean, high-performing group of just{" "}
                <strong>24 engineers</strong>, each taking on some of the hardest
                roles in the industry to build exceptional products at lightning
                speed. With an <strong>acceptance rate of only 0.2%</strong>, we're
                intentional about bringing on the best talent to drive our mission
                forward.
              </p>
              <p className="text-xl mb-3">
                We aim to keep our engineering team small, staying under 30 to
                maintain our agility and focus. If you thrive on challenges and are
                passionate about making a real impact, we'd love for you to join us.
              </p>
              <p className="text-xl mb-6">
                Check out our tech blog to see what we're working on—from our latest
                projects to engineering best practices and the stories behind our
                success.
              </p>
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded text-lg"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Perks Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex justify-center">
            <h2 className="text-4xl font-bold text-center">We Got You Covered</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6">
            <div>
              <img src="/assets/images/company/got01.webp" alt="Unlimited PTO" className="mb-3 w-16" />
              <h5 className="text-lg font-bold">Unlimited Paid Time Off (PTO)</h5>
              <p>We offer unlimited PTO, empowering you to take vacations, personal days, or sick leave whenever needed.</p>
            </div>
            <div>
              <img src="/assets/images/company/got07.webp" alt="Growth" className="mb-3 w-16" />
              <h5 className="text-lg font-bold">Invest in Your Growth</h5>
              <p>Your professional development matters. We provide access to training programs, conferences, and workshops to help you learn and grow.</p>
            </div>
            <div>
              <img src="/assets/images/company/got03.webp" alt="Health Insurance" className="mb-3 w-16" />
              <h5 className="text-lg font-bold">Comprehensive Health Insurance</h5>
              <p>Your health is our priority. We offer comprehensive health insurance plans to ensure you and your family are well taken care of.</p>
            </div>
            <div>
              <img src="/assets/images/company/got04.webp" alt="Well-being" className="mb-3 w-16" />
              <h5 className="text-lg font-bold">Prioritize Your Well-being</h5>
              <p>Stay fit with reimbursed gym memberships (up to USD 50/ INR 3,000 per month) and enjoy a monthly spa visit (up to USD 50/ INR 3,000).</p>
            </div>
            <div>
              <img src="/assets/images/company/got05.webp" alt="Mindfulness" className="mb-3 w-16" />
              <h5 className="text-lg font-bold">Mindfulness Matters</h5>
              <p>Get your annual Headspace meditation subscription covered to help you stay centered and focused.</p>
            </div>
            <div>
              <img src="/assets/images/company/got06.webp" alt="Supportive Environment" className="mb-3 w-16" />
              <h5 className="text-lg font-bold">Thrive in a Supportive Environment</h5>
              <p>We foster a culture of continuous learning and well-being, ensuring our employees feel valued and supported in all aspects of their lives.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersSection;
