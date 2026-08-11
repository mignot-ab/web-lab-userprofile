import React from 'react';

export default function Footer({ name, copyrightText }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-8 text-center text-xs text-gray-500 py-4">
      <p>
        {copyrightText || `© ${currentYear} ${name || 'User Profile'}. All rights reserved.`}
      </p>
    </footer>
  );
}
