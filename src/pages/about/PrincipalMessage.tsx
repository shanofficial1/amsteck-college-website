import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Card, CardContent } from '../../components/ui/card';
import { Quote, ArrowRight, Calendar, Award, Users } from 'lucide-react';
import principalImage from '../../assets/principal.jpg';

const PrincipalMessagePage = () => {
  const principals = [
    { name: "Sri. Johny M V (Addl charge)", year: "(2024-)" },
    { name: "Smt. Latha E S (Addl charge)", year: "(2022-2024)" },
    { name: "Dr. G. Premkumar (Addl charge)", year: "(2021-2022)" },
    { name: "Dr. N. Padmanabhan", year: "(2017-2021)" },
    { name: "Smt. Latha E.S. (Addl charge)", year: "(2016-2017)" },
    { name: "Dr. V.N. Mahamood (Addl charge)", year: "(2015-2016)" },
    { name: "Dr. P. Musafer Ahamed", year: "(2013-2016)" },
    { name: "Prof. T.M.Jecy", year: "(2010-2013)" },
    { name: "Dr. Narayanan Namboodiri", year: "(2006-2010)" },
    { name: "Prof. Vijayamma N.", year: "(2003-2006)" },
    { name: "Prof. K.V.Balan (Addl charge)", year: "(1987-1988)" },
    { name: "Prof. P.M.Lakshmanan", year: "(1983-1987)" }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-muted">
        {/* Header */}
        <section className=" text-white py-12 bg-[url('http://localhost:8080/src/assets/carousel3.jpg')] bg-cover bg-center">
          <div className="section-container">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Principal Message</h1>
              <nav className="text-sm text-white/80">
                <span>Home</span> <span className="mx-2">›</span>
                <span>About</span> <span className="mx-2">›</span>
                <span>Principal Message</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Principal Message Content */}
        <section className="section-spacing">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
              {/* Principal Image and Info */}
              <div className="relative">
                <Card className="card-elevated overflow-hidden">
                  <div className="relative">
                    <img
                      src={principalImage}
                      alt="Sri. Johny M V, Principal of Amsteck College"
                      className="w-full h-[500px] object-cover"
                    />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    
                    {/* Decorative Quote Icon */}
                 
                  </div>
                </Card>

                {/* Principal Details Card */}
                <Card className="card-elevated mt-6">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary mb-2">Sri. Johny M V</h3>
                      <p className="text-lg text-secondary font-medium mb-1">Principal, CAS College Madayi</p>
                      <p className="text-sm text-muted-foreground">Additional Charge</p>
                    </div>
                  </CardContent>
                </Card>
  {/* Quick Stats */}
                <div className="grid grid-cols-3 mt-2 gap-4">
                  <Card className="card-elevated text-center">
                    <CardContent className="p-4">
                      <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-primary">40+</p>
                      <p className="text-sm text-muted-foreground">Years of Excellence</p>
                    </CardContent>
                  </Card>
                  <Card className="card-elevated text-center">
                    <CardContent className="p-4">
                      <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-primary">2000+</p>
                      <p className="text-sm text-muted-foreground">Alumni</p>
                    </CardContent>
                  </Card>
                  <Card className="card-elevated text-center">
                    <CardContent className="p-4">
                      <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-primary">50+</p>
                      <p className="text-sm text-muted-foreground">Faculty Members</p>
                    </CardContent>
                  </Card>
                </div>
                
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    Message from Principal
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>

                {/* Message Content */}
                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <blockquote className="text-lg lg:text-xl text-muted-foreground leading-relaxed italic mb-6">
                      "At Madayi College, we are committed to fostering an environment that encourages academic excellence, holistic development, and a sense of responsibility among our students. With a rich tradition of nurturing talent and empowering individuals, our institution stands as a beacon of quality education in the region."
                    </blockquote>

                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        "Our dedicated faculty, diverse programs, and vibrant campus culture ensure that students are well-prepared to face the challenges of the modern world. We strive to blend academic rigor with co-curricular activities, enabling our students to achieve their personal and professional aspirations."
                      </p>
                      
                      <p>
                        "I invite you to explore our college to learn more about the opportunities we offer, the achievements of our students, and our unwavering commitment to shaping a better future."
                      </p>

                      <p className="font-medium text-foreground">
                        "Together, let us continue to build a legacy of knowledge, innovation, and community service."
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-primary text-lg">Sri. Johny M V</p>
                          <p className="text-sm text-muted-foreground">Principal, CAS College Madayi</p>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <p>2024 - Present</p>
                          <p>Additional Charge</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              

                {/* CTA Buttons */}
                {/* <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary group">
                    Read Full Message
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button className="btn-outline">
                    Schedule Meeting
                  </button>
                </div> */}
              </div>
            </div>

            {/* Previous Principals */}
            <div className="mt-16">
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6 text-center">Previous Principals</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {principals.map((principal, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {principals.length -index }
                          </div>
                          <span className="text-foreground font-medium">{principal.name}</span>
                        </div>
                        <span className="text-muted-foreground text-sm">{principal.year}</span>
                      </div>
                    ))}
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

export default PrincipalMessagePage;