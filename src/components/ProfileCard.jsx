import React from 'react';
import Skills from './Skills';
import SocialLinks from './SocialLinks';

const MailIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function ProfileCard({ image, name, title, email, phone, bio, skills, socialLinks }) {
  return (
    <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 text-gray-900">
      <div className="flex flex-col items-center text-center">
        {/* Profile Image */}
        {image && (
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border border-gray-200 mb-4"
          />
        )}

        {/* Name & Title */}
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">
          {name}
        </h1>
        {title && (
          <p className="text-sm font-medium text-blue-600 mt-0.5">
            {title}
          </p>
        )}

        {/* Contact Info: Email & Phone Number */}
        <div className="w-full bg-gray-50 border border-gray-100 rounded-lg p-3 my-4 flex flex-col gap-2 text-xs text-gray-600">
          {email && (
            <div className="flex items-center justify-center gap-2">
              <MailIcon className="w-4 h-4 text-gray-400 shrink-0" />
              <a href={`mailto:${email}`} className="hover:text-blue-600 transition-colors font-medium">
                {email}
              </a>
            </div>
          )}
          {phone && (
            <div className="flex items-center justify-center gap-2">
              <PhoneIcon className="w-4 h-4 text-gray-400 shrink-0" />
              <a href={`tel:${phone}`} className="hover:text-blue-600 transition-colors font-medium">
                {phone}
              </a>
            </div>
          )}
        </div>

        {/* Bio */}
        {bio && (
          <p className="text-sm text-gray-600 leading-relaxed mb-5 text-center">
            {bio}
          </p>
        )}

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-5" />

        {/* Skills */}
        <div className="w-full mb-5">
          <Skills skills={skills} />
        </div>

        {/* Social Links */}
        <div className="w-full">
          <SocialLinks socialLinks={socialLinks} />
        </div>
      </div>
    </div>
  );
}
