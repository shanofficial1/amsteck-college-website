import React from 'react';
import { Award } from 'lucide-react';

const RecognitionGrid = () => {
  // Placeholder recognition data - these would be replaced with actual logos
  const recognitions = [
    { name: 'NAAC Accreditation', alt: 'NAAC A+ Grade accreditation logo' },
    { name: 'UGC Recognition', alt: 'University Grants Commission recognition' },
    { name: 'ISO 9001:2015', alt: 'ISO 9001:2015 quality certification' },
    { name: 'AICTE Approval', alt: 'All India Council for Technical Education approval' },
    { name: 'Industry Partner 1', alt: 'Technology industry partnership logo' },
    { name: 'Industry Partner 2', alt: 'Corporate partnership certification' },
    { name: 'Excellence Award', alt: 'Educational excellence award 2023' },
    { name: 'Best College Award', alt: 'Best college in region award' }
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Recognition & Accreditations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence is recognized by leading educational bodies and industry partners
          </p>
        </div>

        {/* Recognition Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {recognitions.map((recognition, index) => (
            <div
              key={index}
              className="card-elevated card-hover-lift p-6 flex flex-col items-center justify-center text-center h-32 group"
            >
              {/* Placeholder Logo */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-primary" />
              </div>
              
              {/* Recognition Name */}
              <span className="text-xs text-muted-foreground font-medium leading-tight">
                {recognition.name}
              </span>

              {/* Hidden alt text for accessibility */}
              <span className="sr-only">{recognition.alt}</span>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Quality Assured Education
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              These recognitions reflect our unwavering commitment to maintaining the highest standards in education, infrastructure, and student development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                View All Certifications
              </button>
              <button className="btn-outline">
                Accreditation Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionGrid;