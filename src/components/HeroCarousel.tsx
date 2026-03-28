import React, { useState, useEffect } from 'react';
import carousel1 from '../assets/carousel1.jpg';
import carousel2 from '../assets/carousel2.jpg';
import carousel3 from '../assets/carousel3.jpg';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      image: carousel1,
      title: "Excellence in Education",
      subtitle: "Shaping tomorrow's leaders through quality education and innovation"
    },
    {
      image: carousel2,
      title: "Modern Learning Environment",
      subtitle: "State-of-the-art facilities and resources for comprehensive learning"
    },
    {
      image: carousel3,
      title: "Technology Integration",
      subtitle: "Preparing students for the digital future with advanced technology"
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [slides.length, isPaused]);

  // Respect prefers-reduced-motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsPaused(true);
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      setIsPaused(!isPaused);
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen overflow-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Hero carousel"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentSlide}
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
      ))}

      {/* Content Overlay */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="section-container text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to{' '}
            <span className="text-gradient-primary bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
              Amsteck
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 opacity-90 animate-slide-up">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button className="btn-primary text-lg px-8 py-4">
              Explore Programs
            </button>
            <button className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Virtual Tour
            </button>
          </div>
        </div>
      </div> */}

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}

      {/* Screen Reader Only Controls */}
      <div className="sr-only">
        <h2>Carousel Controls</h2>
        <p>Press spacebar to pause/resume automatic slideshow</p>
        <p>Current slide: {currentSlide + 1} of {slides.length}</p>
        <p>{slides[currentSlide].title}: {slides[currentSlide].subtitle}</p>
      </div>
    </section>
  );
};

export default HeroCarousel;