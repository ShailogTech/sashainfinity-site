import { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import CoursesPage from "@/pages/CoursesPage";
import BlogPage from "@/pages/BlogPage";
import ContactPage from "@/pages/ContactPage";
import MeiporulPage from "@/pages/MeiporulPage";
import LoginPage from "@/pages/LoginPage";
import GetStartedPage from "@/pages/GetStartedPage";
import CourseDetailPage from "@/pages/CourseDetailPage";
import BlogDetailPage from "@/pages/BlogDetailPage";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import AdminCourses from "@/pages/admin/AdminCourses";
import AdminUsers from "@/pages/admin/AdminUsers";
import AdminLayout from "@/pages/admin/AdminLayout";
import AdminPlaceholder from "@/pages/admin/AdminPlaceholder";
import AdminSettings from "@/pages/admin/AdminSettings";
import StudentLayout from "@/pages/student/StudentLayout";
import StudentDashboard from "@/pages/student/StudentDashboard";
import TeacherLayout from "@/pages/teacher/TeacherLayout";
import TeacherDashboard from "@/pages/teacher/TeacherDashboard";
import SplashScreen from "@/components/SplashScreen";
import RoamingMascot from "@/components/RoamingMascot";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAuth = location.pathname === "/login" || location.pathname === "/get-started";
  const isAdmin = location.pathname.startsWith("/admin");
  const isStudent = location.pathname.startsWith("/student");
  const isTeacher = location.pathname.startsWith("/teacher");

  return (
    <>
      <ScrollToTop />
      {!isAuth && !isAdmin && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/meiporul-ar" element={<MeiporulPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="courses" element={<AdminCourses />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="blog" element={<AdminPlaceholder title="Blog" description="Manage blog posts, drafts, and publishing." />} />
          <Route path="analytics" element={<AdminPlaceholder title="Analytics" description="Detailed reports on users, courses, and revenue." />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="courses" element={<AdminPlaceholder title="My Courses" description="Your enrolled courses and progress." />} />
          <Route path="assignments" element={<AdminPlaceholder title="Assignments" description="Upcoming and past assignments." />} />
          <Route path="grades" element={<AdminPlaceholder title="Grades" description="Your scores and feedback." />} />
          <Route path="profile" element={<AdminPlaceholder title="Profile" description="Account details and preferences." />} />
        </Route>
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<TeacherDashboard />} />
          <Route path="classes" element={<AdminPlaceholder title="My Classes" description="Courses and classes you teach." />} />
          <Route path="students" element={<AdminPlaceholder title="Students" description="Enrolled students across your classes." />} />
          <Route path="assignments" element={<AdminPlaceholder title="Assignments" description="Create, edit, and publish assignments." />} />
          <Route path="grading" element={<AdminPlaceholder title="Grading" description="Review and grade pending submissions." />} />
          <Route path="profile" element={<AdminPlaceholder title="Profile" description="Account details and preferences." />} />
        </Route>
      </Routes>
      {!isAuth && !isAdmin && !isStudent && !isTeacher && <Footer />}
      {!isAuth && !isHome && <RoamingMascot />}
    </>
  );
}

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <div className="sasha-app">
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      <div style={{ visibility: splashDone ? "visible" : "hidden" }}>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
