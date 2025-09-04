import React from 'react';
import { GraduationCap } from 'lucide-react';

const ToppersScroller = () => {
  // Sample topper data - in real implementation, this would come from API/CMS
  const toppers = [
    { name: 'Shan A', course: 'BCA 5th Sem', percentage: '85.00%', image: 'shan-a.jpg' },
    { name: 'Aiswarya M', course: 'MCA 2nd Sem', percentage: '88.50%', image: 'aiswarya-m.jpg' },
    { name: 'Raj Kumar', course: 'BBA 6th Sem', percentage: '82.75%', image: 'raj-kumar.jpg' },
    { name: 'Priya Singh', course: 'B.Com 4th Sem', percentage: '87.25%', image: 'priya-singh.jpg' },
    { name: 'Arjun Nair', course: 'BCA 3rd Sem', percentage: '84.80%', image: 'arjun-nair.jpg' },
    { name: 'Sneha Reddy', course: 'MCA 4th Sem', percentage: '89.60%', image: 'sneha-reddy.jpg' },
    { name: 'Vikram Shah', course: 'BBA 2nd Sem', percentage: '83.40%', image: 'vikram-shah.jpg' },
    { name: 'Ananya Iyer', course: 'B.Com 6th Sem', percentage: '86.90%', image: 'ananya-iyer.jpg' },
    { name: 'Rohit Mehta', course: 'BCA 6th Sem', percentage: '85.75%', image: 'rohit-mehta.jpg' },
    { name: 'Kavya Pillai', course: 'MCA 1st Sem', percentage: '87.85%', image: 'kavya-pillai.jpg' },
    { name: 'Aditya Gupta', course: 'BBA 4th Sem', percentage: '84.20%', image: 'aditya-gupta.jpg' },
    { name: 'Divya Sharma', course: 'B.Com 2nd Sem', percentage: '88.15%', image: 'divya-sharma.jpg' }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedToppers = [...toppers, ...toppers];

  return (
    <section className="section-spacing bg-primary">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Class Toppers
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Celebrating our high-achieving students who continue to excel in their academic journey
          </p>
        </div>

        {/* Scrolling Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent z-10"></div>

          {/* Scrolling Content */}
          <div className="flex animate-marquee">
            {duplicatedToppers.map((topper, index) => (
              <div
                key={`${topper.name}-${index}`}
                className="flex-shrink-0 w-52 mx-2"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4 transition-all duration-300 hover:bg-white/20 hover:border-white/30 group">
                  {/* Student Image */}
                  <div className="w-full h-50 bg-white/20 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center">
                      {/* <GraduationCap className="w-24 h-24 text-white/80" /> */}

<img src="https://i.postimg.cc/tRSwzL76/AMSTECK.png" alt="" />                    </div>
                  </div>

                  {/* Student Info */}
                  <div className="text-center">
                    <h3 className="font-bold text-white text-lg mb-1">
                      {topper.name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {topper.course}
                    </p>
                    <div className="mt-2 inline-flex items-center px-3 py-1 bg-accent rounded-full">
                      <span className="text-accent-foreground font-medium text-sm">
                        {topper.percentage}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12">
          <p className="text-white/90 text-lg mb-6">
            Join our community of high achievers and unlock your potential
          </p>
          {/* <button className="bg-white text-primary px-8 py-4 rounded-lg font-medium text-lg hover:bg-white/90 transition-colors duration-300">
            View All Achievers
          </button> */}
        </div>
      </div>

      {/* Accessibility Note */}
      <div className="sr-only" aria-live="polite">
        <p>Automatically scrolling list of class toppers. Use keyboard navigation to focus on individual cards.</p>
      </div>
    </section>
  );
};

export default ToppersScroller;