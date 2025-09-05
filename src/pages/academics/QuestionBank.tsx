import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const toTitleCase = (slug) =>
  slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());



const QuestionBank = () => {
  const [filters, setFilters] = useState({
    department: "",
    course: "",
    semester: "",
    year: ""
  });

     const path = window.location.pathname;
  const currentSlug = path.split("/").pop(); // "programmes-offered"
  const currentPage = toTitleCase(currentSlug); // "Programmes Offered"

  const menuItems = ["Faculty", "Programmes Offered", "Syllabus", "Question Bank"];


  // Sample data - replace with actual data
  const questionBankData = [
    {
      id: 1,
      department: "Management",
      course: "Bachelor of Business Administration",
      semester: "Semester 1",
      year: "2014",
      title: "Communication Skills in English"
    },
    {
      id: 2,
      department: "Management",
      course: "Bachelor of Business Administration",
      semester: "Semester 1",
      year: "2014",
      title: "Business Economics"
    },
    {
      id: 3,
      department: "Management",
      course: "Bachelor of Business Administration",
      semester: "Semester 1",
      year: "2014",
      title: "Business Statistics"
    },
    {
      id: 4,
      department: "Management",
      course: "Bachelor of Business Administration",
      semester: "Semester 1",
      year: "2014",
      title: "Business Statistics Suplementary"
    },
    {
      id: 5,
      department: "Management",
      course: "Bachelor of Business Administration",
      semester: "Semester 1",
      year: "2014",
      title: "Principles and Practices of Management"
    }
  ];

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleFilter = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Implement filter logic here
    console.log("Filters applied:", filters);
  };

  const handleResetFilter = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFilters({
      department: "",
      course: "",
      semester: "",
      year: ""
    });
  };

  const handleDownload = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    e.stopPropagation();
    // Implement download logic here
    console.log("Download question paper:", id);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20 pb-8">
    <div className="relative bg-primary text-primary-foreground text-white py-20">
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

      {/* Academics Subnav */}
      <div className="flex flex-wrap gap-2 mb-8 mt-8">
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

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Question Bank</h1>
          <div className="w-16 h-1 bg-primary rounded"></div>
        </div>

        {/* Filter Section */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Select value={filters.department} onValueChange={(value) => handleFilterChange("department", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="management">Management</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="arts">Arts</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.course} onValueChange={(value) => handleFilterChange("course", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bba">Bachelor of Business Administration</SelectItem>
                <SelectItem value="mba">Master of Business Administration</SelectItem>
                <SelectItem value="btech">Bachelor of Technology</SelectItem>
                <SelectItem value="mtech">Master of Technology</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.semester} onValueChange={(value) => handleFilterChange("semester", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Semester" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="semester-1">Semester 1</SelectItem>
                <SelectItem value="semester-2">Semester 2</SelectItem>
                <SelectItem value="semester-3">Semester 3</SelectItem>
                <SelectItem value="semester-4">Semester 4</SelectItem>
                <SelectItem value="semester-5">Semester 5</SelectItem>
                <SelectItem value="semester-6">Semester 6</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.year} onValueChange={(value) => handleFilterChange("year", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2019">2019</SelectItem>
                <SelectItem value="2018">2018</SelectItem>
                <SelectItem value="2017">2017</SelectItem>
                <SelectItem value="2016">2016</SelectItem>
                <SelectItem value="2015">2015</SelectItem>
                <SelectItem value="2014">2014</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-4">
            <Button onClick={handleFilter} className="bg-primary text-primary-foreground hover:bg-primary/90">
              FILTER
            </Button>
            <Button onClick={handleResetFilter} variant="outline">
              RESET FILTER
            </Button>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary">
                <TableHead className="text-primary-foreground font-bold">#</TableHead>
                <TableHead className="text-primary-foreground font-bold">Department</TableHead>
                <TableHead className="text-primary-foreground font-bold">Course</TableHead>
                <TableHead className="text-primary-foreground font-bold">Semester</TableHead>
                <TableHead className="text-primary-foreground font-bold">Year</TableHead>
                <TableHead className="text-primary-foreground font-bold">Title</TableHead>
                <TableHead className="text-primary-foreground font-bold">Download</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {questionBankData.map((item, index) => (
                <TableRow key={item.id} className={index % 2 === 0 ? "bg-muted/20" : "bg-background"}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.department}</TableCell>
                  <TableCell>{item.course}</TableCell>
                  <TableCell>{item.semester}</TableCell>
                  <TableCell>{item.year}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>
                    <Button
                      onClick={(e) => handleDownload(e, item.id)}
                      variant="outline"
                      size="sm"
                      className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QuestionBank;