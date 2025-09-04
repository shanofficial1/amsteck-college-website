import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const EventsGrid = () => {
  const events = [
    {
      id: 1,
      title: 'Annual Tech Symposium 2024',
      subtitle: 'Innovation & Technology Conference',
      date: 'March 15, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Main Auditorium',
      image: 'tech-symposium.jpg',
      category: 'Technology',
      featured: true
    },
    {
      id: 2,
      title: 'Career Guidance Workshop',
      subtitle: 'Industry Experts Session',
      date: 'March 22, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Seminar Hall',
      image: 'career-workshop.jpg',
      category: 'Career',
      featured: false
    },
    {
      id: 3,
      title: 'Cultural Festival',
      subtitle: 'Amsteck Utsav 2024',
      date: 'April 5-7, 2024',
      time: 'All Day',
      location: 'Campus Grounds',
      image: 'cultural-festival.jpg',
      category: 'Cultural',
      featured: true
    },
    {
      id: 4,
      title: 'Research Paper Presentation',
      subtitle: 'Student Research Showcase',
      date: 'April 12, 2024',
      time: '10:00 AM - 3:00 PM',
      location: 'Conference Hall',
      image: 'research-presentation.jpg',
      category: 'Academic',
      featured: false
    },
    {
      id: 5,
      title: 'Industry Visit Program',
      subtitle: 'Real-world Learning Experience',
      date: 'April 18, 2024',
      time: '8:00 AM - 6:00 PM',
      location: 'Tech Park, Bangalore',
      image: 'industry-visit.jpg',
      category: 'Industry',
      featured: false
    },
    {
      id: 6,
      title: 'Alumni Meet 2024',
      subtitle: 'Networking & Celebration',
      date: 'May 1, 2024',
      time: '6:00 PM - 10:00 PM',
      location: 'College Campus',
      image: 'alumni-meet.jpg',
      category: 'Alumni',
      featured: true
    }
  ];

  return (
    <section className="section-spacing bg-muted">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            What's Happening @ Amsteck
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest events, workshops, and activities designed to enrich your college experience
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <article
              key={event.id}
              className={`card-elevated card-hover-lift overflow-hidden group ${
                event.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${
                  event.category === 'Technology' ? 'from-primary to-primary-light' :
                  event.category === 'Cultural' ? 'from-secondary to-secondary-light' :
                  event.category === 'Career' ? 'from-accent to-accent-light' :
                  'from-primary to-secondary'
                }`}></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-sm font-medium rounded-full">
                    {event.category}
                  </span>
                </div>

                {/* Featured Badge */}
                {event.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>

              {/* Event Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary-light transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {event.subtitle}
                  </p>
                </div>

                {/* Event Details */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center justify-between  space-x-2">
                   <div className="flex items-center  space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span> 
                    </div>
                    <div className="flex items-center  space-x-2 hover:text-primary cursor-pointer ">
                     <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                     <span>Learn More</span>
                    </div>
                  </div>
               
                </div>

                {/* CTA */}
                  {/* <button className="w-full btn-outline group/btn flex items-center justify-center mt-4">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button> */}
                </div>
            </article>
          ))}
        </div>

        {/* View All Events */}
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsGrid;