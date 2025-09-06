import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Card, CardContent } from '../../components/ui/card';
import { Users, Building2, Shield } from 'lucide-react';

const ManagementPage = () => {
  const governingBody = [
    { name: "Sri. M K Raghavan", position: "President & Manager of the College" },
    { name: "Sri. K K Phalgunan", position: "Vice-President" },
    { name: "Sri. T Karunakaran", position: "Secretary" },
    { name: "Sri. K Jayaraj", position: "Director" },
    { name: "Sri. M PradeepKumar", position: "Director" },
    { name: "Sri. P Chandran", position: "Director" },
    { name: "Sri. M K Balakrishnan", position: "Director" },
    { name: "Sri. P T Pratheesh", position: "Director" },
    { name: "Smt. Neena R. S", position: "Director" },
  ];

  const organogram = [
    "ORGANOGRAM",
    "ORGANOGRAM"
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-muted">
        {/* Header */}
        <section className=" text-white py-12 bg-[url('http://localhost:8080/src/assets/carousel3.jpg')] bg-cover bg-center">
          <div className="section-container">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Management</h1>
              <nav className="text-sm text-white/80">
                <span>Home</span> <span className="mx-2">›</span>
                <span>About</span> <span className="mx-2">›</span>
                <span>Management</span>
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

        {/* Management Content */}
        <section className="section-spacing">
          <div className="section-container max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">College Governing Body</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The college is managed by the Payyanur Co-operative Educational Society Ltd., Payyanur. 
                The administration is vested in an elected Board of Directors.
              </p>
            </div>

            {/* Governing Body Structure */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Leadership Overview */}
              <Card className="card-elevated lg:col-span-3">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">Governance Structure</h3>
                      <p className="text-muted-foreground">Democratic and transparent leadership</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Our governance structure is built on the principles of cooperative education, ensuring democratic 
                    participation and transparent decision-making. The Board of Directors, elected by the members of 
                    the Payyanur Co-operative Educational Society, provides strategic direction and oversight for the 
                    institution's academic and administrative functions.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Board of Directors */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <Users className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">Board of Directors</h3>
                </div>
                <p className="text-muted-foreground">
                  Elected representatives guiding the institution's vision and mission
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {governingBody.map((member, index) => (
                  <Card key={index} className="card-elevated card-hover-lift">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16  flex items-center justify-center mx-auto mb-4">
                        
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className="w-full h-50 bg-white/20 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center">
                      {/* <GraduationCap className="w-24 h-24 text-white/80" /> */}

<img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?cs=srgb&dl=pexels-creationhill-1681010.jpg&fm=jpg" alt="" />                    </div>
                  </div>


                    {/* Staff Info */}
                    
                      <h4 className="text-lg font-bold text-primary mb-2">{member.name}</h4>
                      <p className="text-muted-foreground text-sm">{member.position}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Key Functions */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="card-elevated text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Policy Governance</h3>
                  <p className="text-muted-foreground">
                    Establishing institutional policies and ensuring compliance with educational standards
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Strategic Planning</h3>
                  <p className="text-muted-foreground">
                    Developing long-term strategies for academic excellence and institutional growth
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Community Engagement</h3>
                  <p className="text-muted-foreground">
                    Fostering relationships with stakeholders and the broader community
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Organizational Structure */}
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Organizational Structure</h3>
                  <p className="text-muted-foreground">
                    Clear hierarchical structure ensuring effective governance and administration
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-primary">Cooperative Society</h4>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-center font-medium text-foreground">
                        Payyanur Co-operative Educational Society Ltd.
                      </p>
                      <p className="text-center text-sm text-muted-foreground mt-2">
                        Parent Organization
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-primary">Administrative Bodies</h4>
                    <div className="space-y-3">
                      {organogram.map((item, index) => (
                        <div key={index} className="bg-muted/50 p-3 rounded-lg text-center">
                          <p className="text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary mb-3">Governance Principles</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Democratic decision-making</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Transparent administration</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Stakeholder participation</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Accountability and oversight</span>
                      </li>
                    </ul>
                  </div>
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

export default ManagementPage;