import React from 'react';
import { Computer, Users, Car, BookOpen, ArrowRight } from 'lucide-react';

const HighlightsGrid = () => {
  const highlights = [
    {
      icon: Computer,
      title: 'Computer Lab',
      description: 'State-of-the-art computer laboratory with latest hardware and software for hands-on learning',
      image: 'computer-lab-bg.jpg'
    },
    {
      icon: Users,
      title: 'Seminar Hall',
      description: 'Modern seminar hall equipped with audiovisual systems for conferences and presentations',
      image: 'seminar-hall-bg.jpg'
    },
    {
      icon: Car,
      title: 'Parking Space',
      description: 'Spacious and secure parking facilities for students, staff, and visitors',
      image: 'parking-bg.jpg'
    },
    {
      icon: BookOpen,
      title: 'College Library',
      description: 'Comprehensive library with extensive collection of books, journals, and digital resources',
      image: 'library-bg.jpg'
    }
  ];

  return (
    <section id="facilities" className="section-spacing bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Prime Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our world-class facilities designed to enhance your learning experience
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl card-elevated card-hover-lift h-80"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                index % 2 === 0 ? 'from-primary to-primary-light' : 'from-secondary to-secondary-light'
              }`}></div>
              
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                {/* Icon */}
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <highlight.icon className="w-6 h-6" />
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">{highlight.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Interactive Element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
                <div className="h-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Explore all our facilities and see what makes Amsteck special
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Take Virtual Tour
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default HighlightsGrid;