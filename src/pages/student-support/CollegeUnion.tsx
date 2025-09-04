import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Card, CardContent } from '../../components/ui/card';
import { Users, Award, Calendar, Target } from 'lucide-react';

const CollegeUnion = () => {
  const unionMembers2024 = [
    { position: "CHAIRMAN", name: "MUHAMMED NIHAN K (2nd MCOM)", course: "2nd MCOM" },
    { position: "VICE- CHAIRMAN", name: "ADITHYA K V (3rd BCOM)", course: "3rd BCOM" },
    { position: "GENERAL SECRETARY", name: "MIDHIN A (2nd BBA)", course: "2nd BBA" },
    { position: "JOINT SECRETARY", name: "DAYA KRISHNA K (2nd BA MALAYALAM)", course: "2nd BA MALAYALAM" },
    { position: "FINE ARTS SECRETARY", name: "AJAL SAKETH V (2nd BBA)", course: "2nd BBA" },
    { position: "GENERAL CAPTAIN", name: "NAHALAN P K (2nd BBA)", course: "2nd BBA" },
    { position: "UUC", name: "ALNA VINOD (2nd BA ENGLISH)", course: "2nd BA ENGLISH" },
    { position: "STUDENT EDITOR", name: "THEERTHA V K (2nd BCOM)", course: "2nd BCOM" },
    { position: "1st DC REPRESENTATIVE", name: "ABHIJITH M (1st MALAYALAM)", course: "1st MALAYALAM" },
    { position: "2nd DC REPRESENTATIVE", name: "FATHIMATH NIDA C K (2nd MALAYALAM)", course: "2nd MALAYALAM" },
    { position: "3rd DC REPRESENTATIVE", name: "MANU KRISHNAN K (3rd BBA)", course: "3rd BBA" },
    { position: "PG REPRESENTATIVE", name: "ANASHWARA C V (2nd MCOM)", course: "2nd MCOM" },
    { position: "ENGLISH ASSOCIATION SECRETARY", name: "SREELAKSHMI N (1st BA ENGLISH)", course: "1st BA ENGLISH" },
    { position: "BBA ASSOCIATION SECRETARY", name: "ADMA JABBAR (2nd BBA)", course: "2nd BBA" },
    { position: "MATHS ASSOCIATION SECRETARY", name: "ARYA P (2nd MATHS)", course: "2nd MATHS" },
    { position: "MALAYALAM ASSOCIATION SECRETARY", name: "SKEERAGI V V (2nd MALAYALAM)", course: "2nd MALAYALAM" }
  ];

  const objectives = [
    "to train students of the College in the duties and rights of citizenship",
    "to promote opportunities for the development of character, leadership, efficiency, knowledge and spirit of service among students.",
    "to organize sports, arts and other cultural and recreational activities and",
    "to take all such other activities that are relevant and incidental to the objectives of the University Union."
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-muted">
        {/* Header */}
        <section className="bg-gradient-hero text-white py-12">
          <div className="section-container">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">College Union</h1>
              <nav className="text-sm text-white/80">
                <span>Home</span> <span className="mx-2">›</span>
                <span>Student Support</span> <span className="mx-2">›</span>
                <span>College Union</span>
              </nav>
            </div>
          </div>
        </section>

        {/* College Union Content */}
        <section className="section-spacing">
          <div className="section-container max-w-7xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Users className="w-10 h-10 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary">College Union</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The student body democratically elected to represent the interests and welfare of all students, 
                promoting leadership, cultural activities, and academic excellence.
              </p>
            </div>

            {/* Objective */}
            <Card className="card-elevated mb-12">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Objective</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The objective of the College Union is
                </p>
                <div className="space-y-4">
                  {objectives.map((objective, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{objective}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* College Union 2024-2025 */}
            <Card className="card-elevated mb-12">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-8 justify-center">
                  <Calendar className="w-8 h-8 text-primary" />
                  <h3 className="text-3xl font-bold text-primary">College Union 2024 - 2025</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {unionMembers2024.map((member, index) => (
                    <Card key={index} className="card-elevated card-hover-lift">
                      <CardContent className="p-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold text-primary uppercase tracking-wide">
                              {member.position}
                            </h4>
                            <h5 className="text-lg font-semibold text-foreground">
                              {member.name}
                            </h5>
                            <p className="text-sm text-muted-foreground">
                              {member.course}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Activities & Responsibilities */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 text-center">Student Representation</h3>
                  <p className="text-muted-foreground text-center">
                    Representing student interests in college administration and policy-making decisions
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 text-center">Cultural Activities</h3>
                  <p className="text-muted-foreground text-center">
                    Organizing cultural events, competitions, and festivals to promote artistic talents
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 text-center">Leadership Development</h3>
                  <p className="text-muted-foreground text-center">
                    Fostering leadership skills and civic responsibility among students
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Key Functions */}
            <Card className="card-elevated">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">Key Functions & Activities</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4">Academic Support</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Student grievance handling</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Academic feedback collection</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Study support programs</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4">Cultural & Sports</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Annual cultural festivals</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Inter-collegiate competitions</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Sports tournaments</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4">Student Services</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Welfare activities</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Orientation programs</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Student publications</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4">Community Engagement</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Social service projects</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Environmental initiatives</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Community outreach programs</span>
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

export default CollegeUnion;