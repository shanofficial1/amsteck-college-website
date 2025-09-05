import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Wifi, HardDrive, Cpu, Users, Clock } from 'lucide-react';

const ComputerLab = () => {
  useEffect(() => {
    document.title = 'Computer Lab - AMSTECK College';
  }, []);

  const labFeatures = [
    {
      icon: Monitor,
      title: 'Modern Computers',
      description: '50+ high-performance desktop computers with latest software'
    },
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Dedicated broadband connection for seamless online learning'
    },
    {
      icon: HardDrive,
      title: 'Software Suite',
      description: 'Complete range of academic and professional software installed'
    },
    {
      icon: Cpu,
      title: 'Updated Hardware',
      description: 'Regular hardware upgrades to maintain optimal performance'
    }
  ];

  const staffMembers = [
    {
      name: 'Mr. Tech Assistant',
      position: 'Lab Coordinator',
      qualifications: 'M.Tech Computer Science',
      image: '/placeholder-staff.jpg'
    },
    {
      name: 'Ms. Lab Assistant',
      position: 'Technical Assistant',
      qualifications: 'B.Tech IT',
      image: '/placeholder-staff.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-primary text-primary-foreground text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 text-center">
          <nav className="text-sm mb-4 opacity-90">
            <span>Home</span> <span className="mx-2">›</span>
            <span>Facilities</span> <span className="mx-2">›</span>
            <span>Computer Lab</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Computer Laboratory</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            State-of-the-art computing facility for hands-on learning and digital education
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Our Computer Lab</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The AMSTECK College Computer Laboratory is equipped with modern computing infrastructure 
                to support digital learning across all academic programs. Our lab provides students 
                with hands-on experience in various software applications and programming languages.
              </p>
              <p>
                With over 50 computer systems, high-speed internet connectivity, and a comprehensive 
                software suite, our lab serves as a crucial resource for computer science education, 
                research projects, and general academic computing needs.
              </p>
              <p>
                The lab is supervised by qualified technical staff who assist students and ensure 
                the smooth operation of all systems and software.
              </p>
            </div>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Computer Lab Image Placeholder</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {labFeatures.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specifications */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Lab Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Hardware</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 50+ Desktop Computers</li>
                  <li>• Intel Core i5/i7 Processors</li>
                  <li>• 8GB RAM per system</li>
                  <li>• 1TB Storage capacity</li>
                  <li>• 22" LED Monitors</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Software</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Microsoft Office Suite</li>
                  <li>• Programming IDEs</li>
                  <li>• Database Management Systems</li>
                  <li>• Graphics Design Software</li>
                  <li>• Web Development Tools</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Infrastructure</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Air-conditioned environment</li>
                  <li>• UPS backup power</li>
                  <li>• High-speed internet</li>
                  <li>• Network security</li>
                  <li>• Printing facilities</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Staff Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Lab Staff</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {staffMembers.map((staff, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{staff.name}</h3>
                    <p className="text-purple-600">{staff.position}</p>
                    <p className="text-sm text-muted-foreground">{staff.qualifications}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Operating Hours */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Operating Hours
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Regular Hours</h3>
              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-muted-foreground">Sunday: Closed</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contact Information</h3>
              <p className="text-muted-foreground">Lab Coordinator: Mr. Tech Assistant</p>
              <p className="text-muted-foreground">Phone: +91 XXX XXX XXXX</p>
              <p className="text-muted-foreground">Email: computerlab@amsteck.edu</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default ComputerLab;