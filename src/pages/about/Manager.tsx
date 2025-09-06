import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Card, CardContent } from '../../components/ui/card';
import { User, Calendar, Award, Building } from 'lucide-react';

const ManagerPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-muted">
        {/* Header */}
        <section className=" text-white py-12 bg-[url('http://localhost:8080/src/assets/carousel3.jpg')] bg-cover bg-center">
          <div className="section-container">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Manager</h1>
              <nav className="text-sm text-white/80">
                <span>Home</span> <span className="mx-2">›</span>
                <span>About</span> <span className="mx-2">›</span>
                <span>Manager</span>
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



        {/* Manager Content */}
        <section className="section-spacing">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
              {/* Manager Image */}
              <div className="relative">
                <Card className="card-elevated overflow-hidden">
                  <div className="relative">
                    <div className="w-full h-[500px] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center">
                        <User className="w-32 h-32 text-primary/40 mx-auto mb-4" />
                        <p className="text-muted-foreground">Manager Photo</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Manager Details Card */}
                <Card className="card-elevated mt-6">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary mb-2">M.K. Raghavan</h3>
                      <p className="text-lg text-secondary font-medium mb-1">Manager, CAS College Madayi</p>
                      <p className="text-sm text-muted-foreground">Esteemed Member of Parliament for Kozhikode</p>
                    </div>
                  </CardContent>
                </Card>


                {/* Leadership Qualities */}
                <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 gap-4">
                  <Card className="card-elevated text-center">
                    <CardContent className="p-6">
                      <Building className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold text-primary mb-2">Governance</h4>
                      <p className="text-sm text-muted-foreground">
                        Expert in institutional governance and policy development
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-elevated text-center">
                    <CardContent className="p-6">
                      <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold text-primary mb-2">Leadership</h4>
                      <p className="text-sm text-muted-foreground">
                        Proven track record in community leadership and development
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-elevated text-center">
                    <CardContent className="p-6">
                      <User className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold text-primary mb-2">Public Service</h4>
                      <p className="text-sm text-muted-foreground">
                        Dedicated to serving the public and improving education
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-elevated text-center">
                    <CardContent className="p-6">
                      <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold text-primary mb-2">Experience</h4>
                      <p className="text-sm text-muted-foreground">
                        Decades of experience in governance and administration
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    Manager
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>

                {/* Manager Bio */}
                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                      <p className="text-lg">
                        M.K. Raghavan, esteemed Member of Parliament for Kozhikode and a distinguished leader in public service, 
                        took charge as the manager of Cooperative Arts and Science College, Madayi, in 2024.
                      </p>
                      
                      <p>
                        With decades of experience in governance and community development, he brings visionary leadership 
                        to the institution. His commitment to educational excellence and social welfare has been instrumental 
                        in shaping policies that benefit students and the broader community.
                      </p>

                      <p>
                        Under his guidance, the college continues to strive for academic excellence while maintaining its 
                        commitment to serving students from diverse backgrounds and fostering an environment of inclusive growth.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                

                {/* Key Achievements */}
                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-6">Key Contributions</h3>
                    <div className="space-y-4">
                      {[
                        "Member of Parliament for Kozhikode constituency",
                        "Advocate for educational reforms and accessibility",
                        "Champion of cooperative education movement",
                        "Promoter of community development initiatives",
                        "Leader in sustainable development programs"
                      ].map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                

                {/* Vision Statement */}
                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-4">Management Vision</h3>
                    <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6">
                      "Education is the foundation of progress. Our commitment is to ensure that every student receives 
                      quality education that empowers them to contribute meaningfully to society and nation-building."
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ManagerPage;