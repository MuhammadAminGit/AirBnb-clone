import React from 'react';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Footer = () => {
  return (
    <footer className="bg-white p-6 mt-8 shadow-md">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <h4 className="font-bold text-gray-800">Support</h4>
            <ul className="space-y-2">
              <li><a href="/help" className="text-gray-600 hover:underline">Help Center</a></li>
              <li><a href="/safety" className="text-gray-600 hover:underline">Safety Information</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800">Community</h4>
            <ul className="space-y-2">
              <li><a href="/disaster-relief" className="text-gray-600 hover:underline">Disaster Relief</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800">Hosting</h4>
            <ul className="space-y-2">
              <li><a href="/host" className="text-gray-600 hover:underline">Host Your Home</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800">About</h4>
            <ul className="space-y-2">
              <li><a href="/careers" className="text-gray-600 hover:underline">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6 border-t pt-4">
          <p className="text-gray-500">&copy; 2024 Amin, Inc. All rights reserved.</p>
          <div className="flex space-x-4">
            <IconButton href="https://www.facebook.com" target="_blank" aria-label="Facebook" size="small">
              <Facebook />
            </IconButton>
            <IconButton href="https://www.twitter.com" target="_blank" aria-label="Twitter" size="small">
              <Twitter />
            </IconButton>
            <IconButton href="https://www.instagram.com" target="_blank" aria-label="Instagram" size="small">
              <Instagram />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
