import React from 'react';
import ProfileCard from './components/ProfileCard';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

export default function App() {
  // User Profile data variables
  const profileData = {
    name: 'Alex Morgan',
    title: 'Software Developer',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
    bio: 'Passionate software developer building simple, user-friendly web applications using React and Tailwind CSS.',
    image: '/avatar.png',
    skills: [
      { name: 'React', color: 'blue' },
      { name: 'JavaScript', color: 'amber' },
      { name: 'Tailwind CSS', color: 'cyan' },
      { name: 'Node.js', color: 'emerald' },
      { name: 'HTML & CSS', color: 'indigo' },
      { name: 'Git', color: 'rose' }
    ],
    socialLinks: [
      { name: 'GitHub', url: 'https://github.com', platform: 'github' },
      { name: 'LinkedIn', url: 'https://linkedin.com', platform: 'linkedin' },
      { name: 'Twitter', url: 'https://twitter.com', platform: 'twitter' },
      { name: 'Portfolio', url: 'https://example.com', platform: 'website' }
    ],
    copyright: '© 2026 Alex Morgan. All rights reserved.'
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between items-center px-4 py-8">
      {/* Main Profile Card Container */}
      <main className="w-full flex-1 flex flex-col items-center justify-center">
        <ProfileCard
          name={profileData.name}
          title={profileData.title}
          email={profileData.email}
          phone={profileData.phone}
          bio={profileData.bio}
          image={profileData.image}
          skills={profileData.skills}
          socialLinks={profileData.socialLinks}
        />
      </main>

      {/* Footer Component */}
      <Footer name={profileData.name} copyrightText={profileData.copyright} />
    </div>
  );
}
