import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


const toTitleCase = (slug) =>
  slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());



const ProgrammesOffered = () => {
  useEffect(() => {
    document.title = 'Programmes Offered - AMSTECK College';
  }, []);


   const path = window.location.pathname;
  const currentSlug = path.split("/").pop(); // "programmes-offered"
  const currentPage = toTitleCase(currentSlug); // "Programmes Offered"

  const menuItems = ["Faculty", "Programmes Offered", "Syllabus", "Question Bank"];

  const programmesData = [
    { date: '2022-06-06', program: 'BA ENGLISH', students: 27 },
    { date: '2021-06-02', program: 'BA ENGLISH', students: 37 },
    { date: '2020-06-03', program: 'BA ENGLISH', students: 33 },
    { date: '2019-06-22', program: 'BA ENGLISH', students: 29 },
    { date: '2018-06-05', program: 'BA ENGLISH-LANGUAGE AND LITERATURE', students: 27 },
    { date: '2014-06-07', program: 'MCOM Finance', students: 29 },
    { date: '1995-06-07', program: 'MA History', students: 29 },
    { date: '2014-06-07', program: 'BBA', students: 59 },
    { date: '2001-01-01', program: 'BSc Mathematics', students: 36 },
    { date: '1999-06-07', program: 'BA Malayalam', students: 46 },
    { date: '1992-06-01', program: 'BA History', students: 60 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
    <div className="relative bg-primary text-primary-foreground mt-20 text-white  py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 text-center">
          <nav className="text-sm mb-4 opacity-90">
            <span>Home</span> <span className="mx-2">›</span>
            <span>Academics</span> <span className="mx-2">›</span>
            <span>{currentPage}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">{currentPage}</h1>
        </div>
      </div>

      <main className="container mx-auto px-4  pb-8">     
    

      {/* Academics Subnav */}
      <div className="flex flex-wrap gap-2 px-5 mb-8 mt-8">
        {menuItems.map((item) => {
          const slug = item.replace(/\s+/g, "-").toLowerCase();
          const link = `/academics/${slug}`;
          const isActive = path === link;

          return (
            <a
              key={item}
              href={link}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {item}
            </a>
          );
        })}
      </div>


     
     

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Academic Programmes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">Date</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Program Name</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Students</th>
                  </tr>
                </thead>
                <tbody>
                  {programmesData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="border border-gray-300 px-4 py-3">{item.date}</td>
                      <td className="border border-gray-300 px-4 py-3">{item.program}</td>
                      <td className="border border-gray-300 px-4 py-3">{item.students}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
</main>
      <Footer />
      
    </div>
  );
};

export default ProgrammesOffered;