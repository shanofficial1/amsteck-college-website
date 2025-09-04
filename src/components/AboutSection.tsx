import React from 'react';
import { Target, Eye, ArrowRight } from 'lucide-react';
import aboutImage from '../assets/about.jpg';
import CountUp from '../components/ui/count-up'

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing bg-muted">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                About Amsteck College
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
Amsteck Arts and Science College, Kalliassery, is a private institution in Kannur, Kerala, established in 2008. The college offers 8 undergraduate and postgraduate programs in full-time mode, with specialisations in English and Physics.              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
It provides courses like B.Sc., BCA, B.Com, B.A., BBA, M.Com, and M.A. across various streams, with an intake of 230 students and a well-equipped campus for academics and development. </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Mission Card */}
              <div className="card-elevated card-hover-lift p-6 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                  </div>
                 
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
                    <p className="text-muted-foreground mb-4">
                      To provide quality education that develops intellectual, professional, and personal skills in our students.
                    </p>
                    <a 
                      href="#mission" 
                      className="inline-flex items-center text-primary hover:text-primary-light transition-colors duration-300 font-medium"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div className="card-elevated card-hover-lift p-6 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
                    <p className="text-muted-foreground mb-4">
                      To be a leading institution that shapes future leaders and innovators in technology and business.
                    </p>
                    <a 
                      href="#vision" 
                      className="inline-flex items-center text-primary hover:text-primary-light transition-colors duration-300 font-medium"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-first">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Students at Amsteck College campus"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl border border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                  
                    <CountUp from={0} to={new Date().getFullYear() - 2008} separator="," direction="up"  duration={2} className="count-up-text"/>+
                     
                    </div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;