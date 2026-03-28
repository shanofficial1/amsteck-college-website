import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Card, CardContent } from '../../components/ui/card';
const toTitleCase = (slug) =>
  slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

const AboutProfile = () => {
      const path = window.location.pathname;
  const currentSlug = path.split("/").pop(); // "programmes-offered"
  const currentPage = toTitleCase(currentSlug); // "Programmes Offered"

  const menuItems = ["Profile", "Vision  Mission", "Principal Message","Manager","Management", "Administrative Staffs"];
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-muted">
        {/* Header */}
        <section className=" text-white py-12 bg-[url('http://localhost:8080/src/assets/carousel3.jpg')] bg-cover bg-center">
          <div className="section-container">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Profile</h1>
              <nav className="text-sm text-white/80">
                <span>Home</span> <span className="mx-2">›</span>
                <span>About</span> <span className="mx-2">›</span>
                <span>Profile</span>
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


        {/* Profile Content */}
        <section className="section-spacing">
          <div className="section-container">
            <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
              {/* College Info Card */}
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-muted-foreground mb-1">Name of the college</h3>
                        <p className="text-foreground">Co-operative Arts and Science college Madayi</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-muted-foreground mb-1">Address</h3>
                        <p className="text-foreground">Co-operative Arts and Science college Madayi, P.O Payangadi R.S Kannur 670358</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-muted-foreground mb-1">Website</h3>
                        <p className="text-foreground">www.madayicollege.com</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-muted-foreground mb-1">Affiliating University</h3>
                        <p className="text-foreground">Kannur University</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-muted-foreground mb-1">Year Of Establishment</h3>
                        <p className="text-foreground">1982-83</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-muted-foreground mb-1">Year of Affiliation</h3>
                        <p className="text-foreground">Temporary: 1982-83, Permanent: 1995-96</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-muted-foreground mb-1">Year of Recognition</h3>
                        <p className="text-foreground">U/S 2(f): 1996 U/S 12(b): 1996</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-muted-foreground mb-1">Type</h3>
                        <p className="text-foreground">Aided</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-muted-foreground mb-1">Category</h3>
                        <p className="text-foreground">Affiliated</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Our Motto */}
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">Our Motto</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>The college's motto in Sanskrit, <strong>"Aanobhadra krtavo yantu viswatah"</strong> (Rig Veda 1891), translates to "Let noble virtues flood upon us from all directions."</p>
                    <p>This profound Vedic mantra reminds us that every experience holds valuable lessons and that knowledge is omnipresent, known as the <em>Swasti Vachan Mantra</em>. It emphasizes the infinite welfare found through thought, word, and action. Rooted in the ideas of the Rishis, it nurtures it reflects the spirit of <em>Vasudhaiva Kutumbakam</em>—the belief that the entire world is one family. Just as the suffering of one family member affects the whole, this mantra is a prayer for universal well-being through the pursuit of knowledge and virtue. The college adopts this motto to uphold the significance of learning and its presence in all aspects of life, guiding individuals to absorb and share these noble values, promoting growth, harmony, and the greater good as they progress through life.</p>
                  </div>
                </CardContent>
              </Card>

              {/* This Institution Serves */}
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">This Institution Serves</h2>
                  <div className="space-y-3">
                    {[
                      "To enable students to rise up the social ladder.",
                      "Creating healthy, humanistic outlook.",
                      "Encouraging cordiality and creativity",
                      "Inculcating the spirit of social service.",
                      "Exposing the students to the latest development in Science and technology, Business Management, Agriculture, Industry, Tours, environment and heritage conservation"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Academic Development */}
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">Academic development of the college</h2>
                  <div className="space-y-4">
                    {[
                      { year: "1983", course: "Pre - Degree Courses" },
                      { year: "1991", course: "B.A Degree Course in History" },
                      { year: "1993", course: "B.A Degree Course in English" },
                      { year: "1995", course: "M.A. History." },
                      { year: "1996", course: "College affiliated to Degree Kannur University." },
                      { year: "1998", course: "B.Com Degree Course." },
                      { year: "2013", course: "M.Com (Finance)" },
                      { year: "2014", course: "B.B.A Degree Course" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 py-2 border-b border-border last:border-0">
                        <div className="w-16 text-primary font-semibold">{item.year}</div>
                        <div className="text-muted-foreground">{item.course}</div>
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

export default AboutProfile;