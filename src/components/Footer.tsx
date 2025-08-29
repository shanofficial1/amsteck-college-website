import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Departments', href: '#departments' },
    { name: 'Student Support', href: '#support' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Question Bank', href: '#questions' }
  ];

  const academicLinks = [
    { name: 'Undergraduate Programs', href: '#undergraduate' },
    { name: 'Postgraduate Programs', href: '#postgraduate' },
    { name: 'Research Programs', href: '#research' },
    { name: 'Online Courses', href: '#online' },
    { name: 'Continuing Education', href: '#continuing' }
  ];

  const studentLinks = [
    { name: 'Admissions', href: '#admissions' },
    { name: 'Scholarships', href: '#scholarships' },
    { name: 'Student Portal', href: '#portal' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Career Services', href: '#career-services' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#facebook' },
    { name: 'Twitter', icon: Twitter, href: '#twitter' },
    { name: 'Instagram', icon: Instagram, href: '#instagram' },
    { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
    { name: 'YouTube', icon: Youtube, href: '#youtube' }
  ];

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer Content */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* College Info */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">AMSTECK</h3>
                <p className="text-white/80">College</p>
              </div>
            </div>

            <p className="text-white/90 leading-relaxed">
              Empowering students with quality education and innovative learning experiences to shape tomorrow's leaders.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-white/90">123 Education Street, Knowledge City, KC 560001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-white/90">+91 80 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-white/90">info@amsteck.edu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Academic Programs</h4>
            <ul className="space-y-3">
              {academicLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Student Resources</h4>
            <ul className="space-y-3">
              {studentLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-4 text-white/90">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              <p>&copy; 2024 Amsteck College. All rights reserved.</p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#privacy" className="text-white/80 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white/80 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#sitemap" className="text-white/80 hover:text-white transition-colors duration-300">
                Sitemap
              </a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;