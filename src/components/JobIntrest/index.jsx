import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const JobInterest = () => {
  const containerRef = useRef(null);
  const { darkMode } = useTheme();

  const [description, setDescription] = useState('');
  const [descIndex, setDescIndex] = useState(0);
  const descText =
    'I am particularly interested in product-facing positions where I can help make an organization-wide impact.';

  // Trigger typing animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDescription('');
          setDescIndex(0);
        }
      },
      { threshold: 0.6 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Typing effect
  useEffect(() => {
    let timeout;
    if (descIndex < descText.length) {
      timeout = setTimeout(() => {
        setDescription((prev) => prev + descText.charAt(descIndex));
        setDescIndex((prev) => prev + 1);
      }, 30);
    }
    return () => clearTimeout(timeout);
  }, [descIndex]);

  return (
    <div
      ref={containerRef}
      className={`h-screen w-screen flex items-center justify-center px-4 font-sans transition-colors duration-500 ${
        darkMode ? 'bg-black text-gray-300' : 'bg-[#FBFBFB] text-gray-800'
      }`}
    >
      <div className="max-w-3xl">
        {/* Top text */}
        <p className="text-sm mb-4">
          I'm currently looking for employment.
        </p>

        {/* Main role section */}
        <div className="text-[40px] sm:text-[44px] md:text-[48px] leading-tight font-bold">
          <span>Junior</span> : <span>&#123;</span>

          <div className="ml-6 mt-2">
            <span style={{ color: '#424bff' }} className="block">
              Front End Engineer,
            </span>
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[#c624ee] to-[#424bff]"
            >
              Technical Program
            </span>
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700"
            >
              Manager
            </span>
          </div>

          <span className="block mt-1">&#125;</span>
        </div>

        {/* Typing effect line */}
        <p className="mt-6 text-sm">
          {description}
          <span className="animate-pulse inline-block w-[1ch]">|</span>
        </p>
      </div>
    </div>
  );
};

export default JobInterest;
