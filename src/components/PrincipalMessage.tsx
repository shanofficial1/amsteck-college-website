import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import principalImage from '../assets/principal.jpg';

const PrincipalMessage = () => {
  return (
    <section className="section-spacing bg-muted">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Principal Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={principalImage}
                alt="Dr. Sarah Johnson, Principal of Amsteck College"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Decorative Quote Icon */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-xl">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                Message from Principal
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            {/* Quote */}
            <blockquote className="text-lg lg:text-xl text-muted-foreground leading-relaxed italic">
              "At Amsteck College, we believe that education is not just about acquiring knowledge, but about developing the character, skills, and vision needed to make a positive impact in the world. Our commitment is to nurture each student's potential and guide them toward a future of endless possibilities."
            </blockquote>

            {/* Principal Details */}
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-primary">Dr. Sarah Johnson</h3>
                <p className="text-lg text-secondary font-medium">Principal, Amsteck College</p>
                <p className="text-muted-foreground">Ph.D. in Educational Leadership, Harvard University</p>
              </div>

              {/* Additional Info */}
              <div className="space-y-3 text-muted-foreground">
                <p>• 20+ years of experience in academic administration</p>
                <p>• Former Dean of Academic Affairs at Boston University</p>
                <p>• Author of "Modern Educational Leadership"</p>
              </div>
            </div>

            {/* CTA */}
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary group">
                Read Full Message
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="btn-outline">
                Schedule Meeting
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;