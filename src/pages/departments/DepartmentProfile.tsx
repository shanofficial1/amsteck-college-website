import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Card, CardContent } from '../../components/ui/card';
import { Eye, Target, Users, BookOpen, Award } from 'lucide-react';

const DepartmentProfile = () => {
  const { department } = useParams();
  
  // Sample department data - in a real app, this would come from an API or database
  const departmentData = {
    'management-studies': {
      name: 'Management Studies',
      fullName: 'Department of Management Studies',
      establishedYear: '2014',
      permanentYear: '2021',
      description: `The department offers one degree program in Bachelor of Business Administration with specialization in marketing management courses under Kannur University. The proper adoption of holistic innovative teaching methods by the qualified teachers and effective interaction of the students in different experiential learning and practical sessions makes the department to be one among the best. The program includes a compulsory industrial visit in fourth semester and a project in final session which enables students to understand the real application of courses they have been taught. It also collaborate with different ventures like ASAP Kerala, Corporate recruiters, different course providers etc. to impart available benefits to the stakeholders. The department ensures students involvements in different extra-curricular activities like attending corporate talk, inviting lectures etc. The training and placement cell of the department facilitates gateways for the students to find out proper career based coaching and professional abode. The remarkable alumni of the management studies work in different organization across the globe. A dedicated faculty pool and determined students community are the strength of the department, and it aims to be one of the best management departments in Kerala within short span of time.`,
      vision: 'To be leading department in imparting value added management education',
      mission: 'To facilitate a student-friendly learning atmosphere for nurturing innovative and magnificent leaders who run and manage business without compromising ethics and values',
      courses: [
        'Bachelor of Business Administration (BBA)',
        'Specialization in Marketing Management'
      ],
      faculty: [
        { name: 'Dr. John Doe', position: 'Head of Department', qualification: 'Ph.D. in Management' },
        { name: 'Prof. Jane Smith', position: 'Assistant Professor', qualification: 'MBA, M.Com' },
        { name: 'Dr. Mike Johnson', position: 'Associate Professor', qualification: 'Ph.D. in Marketing' }
      ],
      facilities: [
        'Modern Classrooms',
        'Computer Laboratory',
        'Library with Management Collection',
        'Seminar Hall',
        'Training & Placement Cell'
      ]
    }
  };

  const currentDept = departmentData[department as string] || departmentData['management-studies'];

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-muted">
        {/* Header */}
        <section className="bg-gradient-hero text-white py-12">
          <div className="section-container">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentDept.name}</h1>
              <nav className="text-sm text-white/80">
                <span>Home</span> <span className="mx-2">›</span>
                <span>Departments</span> <span className="mx-2">›</span>
                <span>{currentDept.name}</span> <span className="mx-2">›</span>
                <span>Profile</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Department Profile Content */}
        <section className="section-spacing">
          <div className="section-container max-w-6xl mx-auto">
            {/* Department Overview */}
            <Card className="card-elevated mb-12">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-primary mb-4">{currentDept.fullName}</h2>
                  <div className="flex justify-center space-x-8 text-sm">
                    <div className="text-center">
                      <p className="text-muted-foreground">Established</p>
                      <p className="font-bold text-primary">{currentDept.establishedYear}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-muted-foreground">Permanent Status</p>
                      <p className="font-bold text-primary">{currentDept.permanentYear}</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none text-muted-foreground leading-relaxed">
                  <p>{currentDept.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Vision & Mission */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{currentDept.vision}</p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{currentDept.mission}</p>
                </CardContent>
              </Card>
            </div>

            {/* Courses Offered */}
            <Card className="card-elevated mb-12">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">Courses Offered</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentDept.courses.map((course, index) => (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground">{course}</h4>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Faculty */}
            <Card className="card-elevated mb-12">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <Users className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">Faculty Members</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentDept.faculty.map((member, index) => (
                    <Card key={index} className="card-elevated">
                      <CardContent className="p-6 text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="w-10 h-10 text-primary/60" />
                        </div>
                        <h4 className="text-lg font-bold text-primary mb-2">{member.name}</h4>
                        <p className="text-sm font-medium text-secondary mb-1">{member.position}</p>
                        <p className="text-xs text-muted-foreground">{member.qualification}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Facilities */}
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <Award className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">Facilities & Infrastructure</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentDept.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-foreground">{facility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Navigation Tabs Placeholder */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Explore more about {currentDept.name}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-outline">Faculty</button>
                <button className="btn-outline">Courses</button>
                <button className="btn-outline">Result</button>
                <button className="btn-outline">Achievements</button>
                <button className="btn-outline">Activities</button>
                <button className="btn-outline">Student Projects</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DepartmentProfile;