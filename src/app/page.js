'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        const { clientX, clientY } = e;
        glowRef.current.style.background = `radial-gradient(circle 600px at ${clientX}px ${clientY}px, rgba(99, 102, 241, 0.15), transparent 80%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Animation - Glowing Effect */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-all duration-300"
      />
      
      {/* Static Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 px-6 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm animate-fade-in">
          <span className="text-sm sm:text-base text-purple-300">We are here to redefine the digital future</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-6 animate-fade-in-up leading-tight">
          Transforming Ideas
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            into Reality
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-12 animate-fade-in-up animation-delay-200">
          We create smart, AI-driven products that help businesses innovate, grow, and lead in a digital-first world.
        </p>

        {/* CTA Button */}
        <Link
          href="/dashboard"
          className="group relative px-8 py-4 rounded-full border-2 border-purple-500 bg-purple-500/10 text-white font-medium text-lg hover:bg-purple-500/20 hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-400"
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
        </Link>

      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </main>
  );
}
