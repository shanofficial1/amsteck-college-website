import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const toTitleCase = (slug) =>
  slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());



const Faculty = () => {

       const path = window.location.pathname;
  const currentSlug = path.split("/").pop(); // "programmes-offered"
  const currentPage = toTitleCase(currentSlug); // "Programmes Offered"

  const menuItems = ["Faculty", "Programmes Offered", "Syllabus", "Question Bank"];

  const facultyData = [
    {
      category: "POST GRADUATE DEPARTMENT OF COMMERCE",
      members: [
        { sl: 1, name: "Dr. Rajamma K", designation: "Assistant Professor", contact: "9745301689", email: "rajamma@gmail.com" },
        { sl: 2, name: "Dr. Ramya K P", designation: "Assistant Professor", contact: "1226547890", email: "test@gmail.com" },
        { sl: 3, name: "Mrs.Sujitha N.K.", designation: "Assistant Professor & HoD", contact: "9526149545", email: "rajithaaswanthan456@gmail.com" },
        { sl: 4, name: "Mr. Sreejjy V V", designation: "Assistant Professor", contact: "9895526353", email: "sreejjyvp@gmail.com" },
        { sl: 5, name: "Rajith Kumar P", designation: "Assistant Professor", contact: "9961914143", email: "rajithgandirattayil@gmail.com" },
        { sl: 6, name: "SHANIYA V V", designation: "Assistant Professor", contact: "9895490548", email: "shaniyashaikashilshan@gmail.com" }
      ]
    },
    {
      category: "POST GRADUATE DEPARTMENT OF HISTORY",
      members: [
        { sl: 1, name: "Jhony M.V", designation: "Professor & HoD", contact: "9961433995", email: "johnymvop@gmail.com" },
        { sl: 2, name: "T.K. Shailendran", designation: "Assistant Professor", contact: "9846206935", email: "shailendratk@gmail.com" },
        { sl: 3, name: "Dr. Bijina M.", designation: "Assistant Professor", contact: "9744343773", email: "bijinabadhassoom2015@gmail.com" },
        { sl: 4, name: "Dr. Shalma M.C", designation: "Assistant Professor", contact: "8547550725", email: "tanvi529@gmail.com" },
        { sl: 5, name: "Dr Alsa Kurty Pavlove", designation: "Assistant Professor", contact: "9446933098", email: "alsakurty@gmail.com" },
        { sl: 6, name: "Dr.Deepa G.", designation: "Assistant Professor", contact: "9656122865", email: "deepa.chutthayil@gmail.com" }
      ]
    },
    {
      category: "DEPARTMENT OF MATHEMATICS",
      members: [
        { sl: 1, name: "Dr. Shinaj V", designation: "Assistant Professor", contact: "8547596860", email: "drshinajv@gmail.com" },
        { sl: 2, name: "SRI.RUTHINDAKARAN", designation: "Assistant Professor & Head", contact: "9188468500", email: "ruthindrakumar@gmail.com" },
        { sl: 3, name: "Smt.Rejina P V", designation: "Assistant Professor", contact: "", email: "" }
      ]
    },
    {
      category: "DEPARTMENT OF MANAGEMENT STUDIES",
      members: [
        { sl: 1, name: "Mr.Shinjih V", designation: "Assistant Professor & HoD", contact: "9744693325", email: "shijithvzd@gmail.com" },
        { sl: 2, name: "Dr. LUVAIS M", designation: "Assistant Professor", content: "9747317644", email: "drluvais@catcollege.ac.in" },
        { sl: 3, name: "Mrs. Sajini VK", designation: "Assistant Professor", contact: "9995745333", email: "sajinimensah@gmail.com" },
        { sl: 4, name: "Sheema. A", designation: "Assistant Professor ( on Contract )", contact: "9961359227", email: "sheema.ms@gmail.com" }
      ]
    },
    {
      category: "DEPARTMENT OF HINDI",
      members: [
        { sl: 1, name: "Dr.Pramala.k", designation: "Assistant Professor", contact: "9497855418", email: "kpramala@gmail.com" }
      ]
    },
    {
      category: "DEPARTMENT OF SOCIOLOGY",
      members: [
        { sl: 1, name: "Deepa Mohan", designation: "Assistant Professor", contact: "9496950955", email: "deepamanjulnair@gmail.com" }
      ]
    },
    {
      category: "DEPARTMENT OF ECONOMICS",
      members: [
        { sl: 1, name: "Prajitha V V", designation: "Assistant Professor & HoD", contact: "9947516107", email: "prajitha223@gmail.com" }
      ]
    },
    {
      category: "DEPARTMENT OF MALAYALAM",
      members: [
        { sl: 1, name: "Dr Sivaprasad Antony", designation: "Professor", contact: "9447703304", email: "sivaprasadantony@gmail.com" },
        { sl: 2, name: "Dr Sindhu. K V", designation: "Professor & HoD", contact: "9946132107", email: "sindlu@gmail.com" },
        { sl: 3, name: "Dr Sunilkumar K V", designation: "Assistant Professor", contact: "9995507519", email: "pillysrenu@gmail.com" },
        { sl: 4, name: "Mubeena O H", designation: "Assistant Professor (contract)", contact: "9843255478", email: "chumbe123@gmail.com" }
      ]
    },
    {
      category: "DEPARTMENT OF ENGLISH",
      members: [
        { sl: 1, name: "Dr Shekala A.V", designation: "Assistant Professor & Head", contact: "9446186577", email: "academyshekala@gmail.com" },
        { sl: 2, name: "Alisa George", designation: "Assistant Professor ( on Contract )", contact: "8590588708", email: "alisageorge25@gmail.com" },
        { sl: 3, name: "Megha K V", designation: "Assistant Professor ( on Contract )", contact: "9544590886", email: "megha866@gmail.com" },
        { sl: 4, name: "Suchi Thilak V V", designation: "Assistant Professor ( on Contract )", contact: "9999968888", email: "suchithilak@gmail.com" }
      ]
    },
    {
      category: "DEPARTMENT OF PHYSICAL EDUCATION",
      members: [
        { sl: 1, name: "Mr. PRAVEEN MATHEW", designation: "Assistant Professor", contact: "9947549448", email: "praveenmathew07@gmail.com" }
      ]
    },
    {
      category: "DEPARTMENT OF ARABIC",
      members: [
        { sl: 1, name: "Amjad Ahamad K", designation: "Assistant Professor ( on Contract )", contact: "9048524085", email: "kamjadahamad@gmail.com" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
       <div className="relative bg-primary text-primary-foreground mt-20 text-white  py-20">
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

      <main className="container mx-auto px-4  pb-8">     
    

      {/* Academics Subnav */}
      <div className="flex flex-wrap gap-2 px-5 mb-8 mt-8">
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



        {/* Faculty Tables */}
        <div className="space-y-8">
          {facultyData.map((department, deptIndex) => (
            <Card key={deptIndex} className="overflow-hidden">
              <div className="bg-primary text-primary-foreground p-4">
                <h2 className="text-lg font-bold">{department.category}</h2>
              </div>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-16 font-semibold">Sl</TableHead>
                      <TableHead className="font-semibold">Name</TableHead>
                      <TableHead className="font-semibold">Designation</TableHead>
                      <TableHead className="font-semibold">Contact</TableHead>
                      <TableHead className="font-semibold">Email</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {department.members.map((member, memberIndex) => (
                      <TableRow 
                        key={memberIndex} 
                        className={memberIndex % 2 === 0 ? "bg-background" : "bg-muted/20"}
                      >
                        <TableCell className="font-medium">{member.sl}</TableCell>
                        <TableCell className="font-medium text-primary">{member.name}</TableCell>
                        <TableCell>{member.designation}</TableCell>
                        <TableCell>{member.contact}</TableCell>
                        <TableCell className="text-primary hover:underline">
                          {member.email && (
                            <a href={`mailto:${member.email}`}>
                              {member.email}
                            </a>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Faculty;