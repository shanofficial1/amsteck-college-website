import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Syllabus = () => {
  useEffect(() => {
    document.title = 'Syllabus - AMSTECK College';
  }, []);

  const undergraduateCourses = [
    { course: 'B.Sc. Mathematics', year: 2014 },
    { course: 'B.B.A Business Administration with Specialization in Marketing', year: 2014 },
    { course: 'B.Com', year: 2014 },
    { course: 'B.A English', year: 2014 },
    { course: 'B.A Malayalam', year: 2014 },
    { course: 'B.A History', year: 2014 },
    { course: 'B.B.A Business Administration with Specialization in Marketing', year: 2019 },
    { course: 'B.Sc. Mathematics', year: 2020 },
    { course: 'B.Com', year: 2020 },
    { course: 'B.B.A Business Administration with Specialization in Marketing', year: 2020 },
    { course: 'B.A History', year: 2020 },
    { course: 'B.A English', year: 2020 },
    { course: 'B.A Malayalam', year: 2020 }
  ];

  const postgraduateCourses = [
    { course: 'M.Com Finance', year: 2014 },
    { course: 'M.Com Finance', year: 2020 },
    { course: 'M.A History', year: 2020 }
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
            <span>Academics</span> <span className="mx-2">›</span>
            <span>Curriculam</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Curriculam</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 space-y-8">
        {/* Under Graduation Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Under Graduation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">Course</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Year</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {undergraduateCourses.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="border border-gray-300 px-4 py-3">{item.course}</td>
                      <td className="border border-gray-300 px-4 py-3">{item.year}</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <Button size="sm" className="bg-primary text-primary-foreground">
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Post Graduation Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Post Graduation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">Course</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Year</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {postgraduateCourses.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="border border-gray-300 px-4 py-3">{item.course}</td>
                      <td className="border border-gray-300 px-4 py-3">{item.year}</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <Button size="sm" className="bg-primary text-primary-foreground">
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Syllabus;