import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Card, CardContent } from '../../components/ui/card';
import { Heart, Users, Calendar, Award, Eye, Target } from 'lucide-react';

const NationalServiceScheme = () => {
  const extensionActivities = [
    { period: "Extension Activities(2018-2019)", description: "Extension Activities conducted by NSS and NCC", action: "View" },
    { period: "Extension Activities(2019-2020)", description: "Extension Activities conducted by NSS and NCC", action: "View" },
    { period: "Extension Activities(2020-2021)", description: "Extension Activities conducted by NSS and NCC", action: "View" },
    { period: "Extension Activities(2021-2022)", description: "Extension Activities conducted by NSS and NCC", action: "View" },
    { period: "Extension Activities(2022-2023)", description: "Extension Activities conducted by NSS and NCC", action: "View" }
  ];

  const nssOfficers = [
    "Shijithv",
    "Sreeju v.v"
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-muted">
        {/* Header */}
        <section className="bg-gradient-hero text-white py-12">
          <div className="section-container">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">National Service Scheme</h1>
              <nav className="text-sm text-white/80">
                <span>Home</span> <span className="mx-2">›</span>
                <span>Student Support</span> <span className="mx-2">›</span>
                <span>National Service Scheme</span>
              </nav>
            </div>
          </div>
        </section>

        {/* NSS Content */}
        <section className="section-spacing">
          <div className="section-container max-w-7xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Heart className="w-10 h-10 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary">National service scheme</h2>
              </div>
            </div>

            {/* About NSS */}
            <Card className="card-elevated mb-12">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">About NSS</h3>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The primary objective of N.S.S. is education through community service. Community activities such as 
                    construction of village roads, sanitary works, imparting education on health, communicable diseases, 
                    agriculture, pest and plant diseases etc. are taken up by the N.S.S. volunteers.
                  </p>
                  <p>
                    The National Adult Education Programme (NAEP) is also taken up by the N.S.S. There are two N.S.S. 
                    units in the college. Membership is open to all men and women students.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="card-elevated text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Community Service</h3>
                  <p className="text-muted-foreground">
                    Education through meaningful community engagement and social service activities
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Two NSS Units</h3>
                  <p className="text-muted-foreground">
                    Active NSS units providing opportunities for all interested students to participate
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">NAEP Programs</h3>
                  <p className="text-muted-foreground">
                    National Adult Education Programme implementation for community literacy
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Extension Activities */}
            <Card className="card-elevated mb-12">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <Calendar className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">Extension Activities</h3>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Title</th>
                        <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">PDF</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {extensionActivities.map((activity, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                          <td className="px-6 py-4 text-sm font-medium text-foreground">
                            {activity.period}
                          </td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">
                            {activity.description}
                          </td>
                          <td className="px-6 py-4">
                            <button className="bg-secondary hover:bg-secondary-light text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                              {activity.action}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* NSS Officers */}
            <Card className="card-elevated mb-12">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <Users className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">NSS Officers</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {nssOfficers.map((officer, index) => (
                    <Card key={index} className="card-elevated">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-primary mb-2">{officer}</h4>
                        <p className="text-sm text-muted-foreground">NSS Programme Officer</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Photo Gallery */}
            <Card className="card-elevated mb-12">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">Photo Gallery</h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <Card key={index} className="card-elevated overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Eye className="w-12 h-12 text-primary/40" />
                      </div>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center mt-6">
                  <button className="btn-primary">
                    View All Photos
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Activities & Objectives */}
            <Card className="card-elevated">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">NSS Activities & Objectives</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4">Key Activities</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Village road construction projects</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Sanitary and hygiene awareness programs</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Health and disease prevention campaigns</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Agricultural education initiatives</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Adult literacy programs (NAEP)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4">Core Objectives</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Develop social consciousness among students</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Foster community service spirit</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Bridge academic learning with practical service</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Promote national integration and unity</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Encourage voluntary service participation</span>
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

export default NationalServiceScheme;