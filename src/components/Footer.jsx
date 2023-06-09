import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="p-10 max-sm:px-2 border-t">
      <div className="container mx-auto flex max-md:flex-col items-center justify-between">
        <div className="text-lg font-bold tracking-wider">
          <Link to="/">AQUA STORE</Link>
        </div>
        <div className="text-gray-500 max-sm:text-sm max-sm:mt-2">© 2023 Aqua Store. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;