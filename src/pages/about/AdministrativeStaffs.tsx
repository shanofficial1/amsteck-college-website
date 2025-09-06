import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Card, CardContent } from '../../components/ui/card';
import { Users, User, Mail, Phone } from 'lucide-react';




const toTitleCase = (slug) =>
  slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());



const AdministrativeStaffs = () => {
  const administrativeStaffs = [
    {
      name: "Sunil Kumar M P",
      position: "HIGHER SECONDARY TEACHER",
      department: "Administrative Head",
      image: null
    },
    {
      name: "Rajitha M B",
      position: "HEAD ACCOUNTANT",
      department: "Finance",
      image: null
    },
    {
      name: "Noushad Mannan",
      position: "OFFICE CLERK",
      department: "Administration",
      image: null
    },
    {
      name: "Vibin P",
      position: "CLERK",
      department: "Administration", 
      image: null
    },
    {
      name: "Navaneeth Narayanan",
      position: "CLERK",
      department: "Administration",
      image: null
    },
    {
      name: "Leena P P",
      position: "CLERK",
      department: "Administration",
      image: null
    },
    {
      name: "Divya C",
      position: "Computer Assistant",
      department: "IT Support",
      image: null
    },
    {
      name: "Dhanesh M K",
      position: "Office Attendant",
      department: "Support Services",
      image: null
    },
    {
      name: "Bharath D P",
      position: "Office Attendant", 
      department: "Support Services",
      image: null
    },
    {
      name: "Dhanesh A",
      position: "Office Attendant",
      department: "Support Services",
      image: null
    }
  ];


    const path = window.location.pathname;
  const currentSlug = path.split("/").pop(); // "programmes-offered"
  const currentPage = toTitleCase(currentSlug); // "Programmes Offered"

  const menuItems = ["Profile", "Vision & Mission", "Principal Message","Manager","Management", "Administrative Staffs"];

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-muted">




        {/* Header */}
        <section className=" text-white py-12 bg-[url('http://localhost:8080/src/assets/carousel3.jpg')] bg-cover bg-center">
          <div className="section-container">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Administrative Staffs</h1>
              <nav className="text-sm text-white/80">
                <span>Home</span> <span className="mx-2">›</span>
                <span>About</span> <span className="mx-2">›</span>
                <span>Administrative Staffs</span>
              </nav>
            </div>
          </div>
        </section>


<div className="container flex items-center  ">
   <div className="flex  flex-wrap gap-2  mx-auto mb-8 mt-8">
        {menuItems.map((item) => {
          const slug = item.replace(/\s+/g, "-").toLowerCase();
          const link = `/about/${slug}`;
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
</div>




        {/* Administrative Staffs Content */}
        <section className="section-spacing">
          <div className="section-container max-w-7xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Users className="w-10 h-10 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Administrative Staffs</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our dedicated administrative team ensures smooth operations and provides essential support services 
                to students, faculty, and the entire college community.
              </p>
            </div>

            {/* Staff Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="card-elevated text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">10+</h3>
                  <p className="text-muted-foreground">Administrative Staff</p>
                </CardContent>
              </Card>

              <Card className="card-elevated text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">5</h3>
                  <p className="text-muted-foreground">Departments</p>
                </CardContent>
              </Card>

              <Card className="card-elevated text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">24/7</h3>
                  <p className="text-muted-foreground">Support Available</p>
                </CardContent>
              </Card>
            </div>

            {/* Staff Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {administrativeStaffs.map((staff, index) => (
                <Card key={index} className="card-elevated card-hover-lift">
                  <CardContent className="p-6 text-center">
                    {/* Staff Image Placeholder */}
                    {/* <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-12 h-12 text-primary/60" />
                    </div>
                     */}


                  <div className="w-full h-50 bg-white/20 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center">
                      {/* <GraduationCap className="w-24 h-24 text-white/80" /> */}

<img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?cs=srgb&dl=pexels-creationhill-1681010.jpg&fm=jpg" alt="" />               
     </div>
                  </div>


                    {/* Staff Info */}
                    <h3 className="text-lg font-bold text-primary mb-2">{staff.name}</h3>
                    <p className="text-sm font-medium text-secondary mb-1">{staff.position}</p>
                    {/* <p className="text-xs text-muted-foreground">{staff.department}</p> */}
                    
                    {/* Contact Actions */}
                    {/* <div className="flex justify-center space-x-2 mt-4">
                      <button className="p-2 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-200">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-secondary/10 text-secondary rounded-full hover:bg-secondary hover:text-white transition-colors duration-200">
                        <Phone className="w-4 h-4" />
                      </button>
                    </div> */}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Departments */}
            <Card className="card-elevated">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">Administrative Departments</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "General Administration",
                      description: "Overall administrative coordination and management",
                      staff: ["Sunil Kumar M P", "Noushad Mannan", "Vibin P", "Navaneeth Narayanan", "Leena P P"]
                    },
                    {
                      title: "Finance & Accounts",
                      description: "Financial management and accounting operations",
                      staff: ["Rajitha M B"]
                    },
                    {
                      title: "IT Support",
                      description: "Computer and technical assistance services",
                      staff: ["Divya C"]
                    },
                    {
                      title: "Support Services",
                      description: "General support and maintenance services",
                      staff: ["Dhanesh M K", "Bharath D P", "Dhanesh A"]
                    }
                  ].map((dept, index) => (
                    <Card key={index} className="card-elevated">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-bold text-primary mb-3">{dept.title}</h4>
                        <p className="text-sm text-muted-foreground mb-4">{dept.description}</p>
                        <div className="space-y-1">
                          <p className="text-xs font-semibold text-secondary">Staff Members:</p>
                          {dept.staff.map((member, idx) => (
                            <p key={idx} className="text-xs text-muted-foreground">• {member}</p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Services Provided */}
            <Card className="card-elevated mt-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">Services Provided</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    "Student Registration & Records",
                    "Financial Aid Processing",
                    "Examination Administration", 
                    "Certificate Issuance",
                    "Library Services Support",
                    "IT Technical Support",
                    "Facility Management",
                    "General Inquiries"
                  ].map((service, index) => (
                    <div key={index} className="text-center p-4 rounded-lg bg-muted/50">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <p className="text-sm font-medium text-foreground">{service}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="card-elevated mt-8">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Contact Administrative Office</h3>
                <p className="text-muted-foreground mb-6">
                  For any administrative queries or support, please contact our office during working hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary">
                    Contact Office
                  </button>
                  <button className="btn-outline">
                    Office Hours
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AdministrativeStaffs;