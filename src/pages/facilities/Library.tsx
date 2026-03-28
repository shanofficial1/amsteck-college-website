import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Clock, Users, Wifi } from 'lucide-react';

const Library = () => {
  useEffect(() => {
    document.title = 'Library - Amsteck College';
  }, []);

  const libraryFeatures = [
    {
      icon: BookOpen,
      title: 'Extensive Collection',
      description: 'Over 10,000 books across various disciplines and subjects'
    },
    {
      icon: Clock,
      title: 'Extended Hours',
      description: 'Open from 9:00 AM to 6:00 PM on all working days'
    },
    {
      icon: Users,
      title: 'Reading Spaces',
      description: 'Comfortable seating for 100+ students with study areas'
    },
    {
      icon: Wifi,
      title: 'Digital Resources',
      description: 'Free Wi-Fi and access to online journals and databases'
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
            <span>Library</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Central Library</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            A hub of knowledge and learning with extensive resources and modern facilities
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Our Library</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The Amsteck College Central Library serves as the academic heart of our institution, 
                providing students and faculty with access to a vast collection of books, journals, 
                and digital resources.
              </p>
              <p>
                Our library is designed to support learning, research, and academic excellence with 
                modern facilities, comfortable study spaces, and a comprehensive collection spanning 
                all academic disciplines offered at our college.
              </p>
              <p>
                With a team of dedicated librarians and support staff, we ensure that all library 
                users have access to the resources they need for their academic pursuits.
              </p>
            </div>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Library Image Placeholder</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {libraryFeatures.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Library Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">For Students</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Book lending and reservation services</li>
                  <li>• Reference and research assistance</li>
                  <li>• Study group rooms</li>
                  <li>• Computer and internet access</li>
                  <li>• Printing and photocopying facilities</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">For Faculty</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Extended borrowing privileges</li>
                  <li>• Inter-library loan services</li>
                  <li>• Research database access</li>
                  <li>• Book acquisition requests</li>
                  <li>• Academic resource consultation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Library Information</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Operating Hours</h3>
              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground">Saturday: 9:00 AM - 4:00 PM</p>
              <p className="text-muted-foreground">Sunday: Closed</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contact</h3>
              <p className="text-muted-foreground">Librarian: Dr. Library Staff</p>
              <p className="text-muted-foreground">Phone: +91 XXX XXX XXXX</p>
              <p className="text-muted-foreground">Email: library@Amsteck.edu</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Library;