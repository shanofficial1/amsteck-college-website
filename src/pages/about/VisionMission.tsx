import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Card, CardContent } from '../../components/ui/card';
import { Eye, Target, Heart, BookOpen } from 'lucide-react';

const VisionMission = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-muted">
        {/* Header */}
        <section className=" text-white py-12 bg-[url('http://localhost:8080/src/assets/carousel3.jpg')] bg-cover bg-center">
          <div className="section-container">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Vision & Mission</h1>
              <nav className="text-sm text-white/80">
                <span>Home</span> <span className="mx-2">›</span>
                <span>About</span> <span className="mx-2">›</span>
                <span>Vision & Mission</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Vision & Mission Content */}
        <section className="section-spacing">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Vision Card */}
              <Card className="card-elevated card-hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
                      To be a leading institution of higher education that nurtures innovative minds, 
                      promotes academic excellence, and develops responsible global citizens who contribute 
                      meaningfully to society.
                    </p>
                    <p>
                      We envision creating a dynamic learning environment that fosters creativity, 
                      critical thinking, and lifelong learning while maintaining our commitment to 
                      ethical values and social responsibility.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Mission Card */}
              <Card className="card-elevated card-hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
                      To provide quality education that empowers students with knowledge, skills, 
                      and values necessary for personal growth and professional success in a 
                      rapidly changing world.
                    </p>
                    <p>
                      We are committed to fostering an inclusive learning community that encourages 
                      intellectual curiosity, cultural diversity, and social engagement while 
                      preparing students to be leaders and innovators.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Core Values */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Core Values</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our fundamental principles that guide everything we do and shape our institutional culture
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Excellence */}
                <Card className="card-elevated card-hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">Excellence</h3>
                    <p className="text-muted-foreground">
                      Pursuing the highest standards in teaching, learning, and research
                    </p>
                  </CardContent>
                </Card>

                {/* Integrity */}
                <Card className="card-elevated card-hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">Integrity</h3>
                    <p className="text-muted-foreground">
                      Maintaining honesty, transparency, and ethical conduct in all our endeavors
                    </p>
                  </CardContent>
                </Card>

                {/* Innovation */}
                <Card className="card-elevated card-hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">Innovation</h3>
                    <p className="text-muted-foreground">
                      Embracing creativity and fostering new ideas to solve complex challenges
                    </p>
                  </CardContent>
                </Card>

                {/* Inclusivity */}
                <Card className="card-elevated card-hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">Inclusivity</h3>
                    <p className="text-muted-foreground">
                      Creating a welcoming environment that celebrates diversity and equality
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Goals */}
            <div className="mt-16">
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6 text-center">Strategic Goals</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-primary">Academic Excellence</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">Enhance curriculum relevance and quality</p>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">Promote research and innovation</p>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">Foster interdisciplinary learning</p>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-primary">Student Development</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">Develop critical thinking skills</p>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">Enhance employability and career readiness</p>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">Promote leadership and social responsibility</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VisionMission;