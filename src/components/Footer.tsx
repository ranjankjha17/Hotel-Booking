import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm">
              Experience comfort and luxury at affordable prices with our carefully curated
              selection of hotels across the country.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center"><Phone size={16} className="mr-2" /> +1 234 567 890</p>
              <p className="flex items-center"><Mail size={16} className="mr-2" /> support@oyo.com</p>
              <p className="flex items-center"><MapPin size={16} className="mr-2" /> 123 Hotel Street, City</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} OYO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}