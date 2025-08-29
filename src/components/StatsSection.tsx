import React from 'react';
import { Trophy, Users, Building2, GraduationCap } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Trophy,
      number: '100+',
      label: 'Rank Holders',
      description: 'Students achieving top ranks in university exams',
      color: 'bg-gradient-primary'
    },
    {
      icon: Users,
      number: '2000+',
      label: 'Active Students',
      description: 'Students currently enrolled across all programs',
      color: 'bg-gradient-secondary'
    },
    {
      icon: Building2,
      number: '20+',
      label: 'Quality Facilities',
      description: 'Modern infrastructure and learning facilities',
      color: 'bg-gradient-primary'
    },
    {
      icon: GraduationCap,
      number: '10+',
      label: 'Scholarships',
      description: 'Merit-based scholarships and financial aid programs',
      color: 'bg-gradient-secondary'
    }
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Numbers that reflect our commitment to academic excellence and student success
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-elevated card-hover-lift p-8 text-center group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              {/* Number */}
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </p>

              {/* Decorative Element */}
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto group-hover:w-24 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of successful graduates who started their journey at Amsteck
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;