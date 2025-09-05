import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import QuestionBank from "./pages/QuestionBank";
import AdministrativeStaffs from "./pages/about/AdministrativeStaffs";
import ManagementPage from "./pages/about/Management";
import ManagerPage from "./pages/about/Manager";
import PrincipalMessagePage from "./pages/about/PrincipalMessage";
import AboutProfile from "./pages/about/Profile";
import VisionMission from "./pages/about/VisionMission";
import DepartmentProfile from "./pages/departments/DepartmentProfile";
import CollegeUnion from "./pages/student-support/CollegeUnion";
import NationalServiceScheme from "./pages/student-support/NationalServiceScheme";
import Faculty from "./pages/academics/Faculty";
import ProgrammesOffered from "./pages/academics/ProgrammesOffered";
import Syllabus from "./pages/academics/Syllabus";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
             <Route path="/academics/question-bank" element={<QuestionBank />} />
             <Route path="/about/administrative-staffs" element={<AdministrativeStaffs />} />
             <Route path="/about/management" element={<ManagementPage />} />
             <Route path="/about/manager" element={<ManagerPage />} />
              <Route path="/about/principal-message" element={<PrincipalMessagePage />} />
              <Route path="/about/profile" element={<AboutProfile />} />
              <Route path="/about/vision-mission" element={<VisionMission />} />
              <Route path="/departments/:department" element={<DepartmentProfile />} />
              <Route path="/student-support/college-union" element={<CollegeUnion />} />
              <Route path="/student-support/nss" element={<NationalServiceScheme />} />
             <Route path="/academics/faculty" element={<Faculty />} />
             <Route path="/academics/programmes-offered" element={<ProgrammesOffered />} />
             <Route path="/academics/syllabus" element={<Syllabus />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
