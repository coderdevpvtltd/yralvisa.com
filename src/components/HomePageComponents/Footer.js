// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 py-4 mt-5 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="mb-3 py-3">
            <h6 className="font-bold mb-4">Company</h6>
            <ul className="list-none">
              <li className="mb-3"><a href="/careers" className="text-gray-900 no-underline">Careers</a></li>
              <li className="mb-3"><a href="/blog" className="text-gray-900 no-underline">Blog</a></li>
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">Newsroom</a></li>
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">Contact</a></li>
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">Partners</a></li>
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">Inwards Out</a></li>
            </ul>
          </div>

          <div className="mb-3 py-3">
            <h6 className="font-bold mb-4">Products</h6>
            <ul className="list-none">
              <li className="mb-3"><a href="/product-page" className="text-gray-900 no-underline">yralvisa</a></li>
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">For Travel Agents</a></li>
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">Security</a></li>
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">Transparency</a></li>
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">Visa Pre Approval</a></li>
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">Vaya</a></li>
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">-1% Club</a></li>
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">U.S. Mock Interview</a></li>
            </ul>
          </div>

          <div className="mb-3 py-3">
            <h6 className="font-bold mb-4">Tools</h6>
            <ul className="list-none">
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">Visa Photo Creator</a></li>
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">Schengen Cover Letter</a></li>
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">Schengen Invitation Letter</a></li>
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">Visa Eligibility Quiz</a></li>
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">Visa Glossary</a></li>
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">UAE Status Checker</a></li>
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">Vietnam Status Checker</a></li>
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">Passport Mobility Index</a></li>
              <li className="mb-3"><a href="#" className="text-gray-900 no-underline">Schengen Appointment Checker</a></li>
            </ul>
          </div>

          <div className="mb-3 py-3">
            <h6 className="font-bold mb-4">Offices</h6>
            <ul className="list-none text-gray-900">
              <li className="mb-3">📍 7 Khullar Farms, Mandi Rd, Mehrauli, New Delhi, Delhi 110030</li>
              <li>📍 447 Broadway STE 851, New York, NY, 10013</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-gray-100 text-gray-900 py-2 mt-3 border-t">
          <div className="md:w-1/2 mb-3 md:mb-0">
            <p className="mb-3 text-gray-900">
              <br />
              © Atlys, All rights reserved •
              <a href="#" className="text-gray-900 no-underline ml-2">Privacy</a> •
              <a href="#" className="text-gray-900 no-underline ml-2">Terms</a>
            </p>
          </div>

          <div className="md:w-1/4">
            <div className="flex gap-2">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  width="100"
                />
              </a>
            </div>
          </div>

          <div className="md:w-1/4">
            <div className="flex md:justify-end gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-900"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-900"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-900"><FaTwitter /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-900"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;