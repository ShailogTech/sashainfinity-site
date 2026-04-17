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
import AdminDataPage from "@/pages/admin/AdminDataPage";
import AdminSettings from "@/pages/admin/AdminSettings";
import AdminAIFeatures from "@/pages/admin/AdminAIFeatures";
import StudentLayout from "@/pages/student/StudentLayout";
import StudentDashboard from "@/pages/student/StudentDashboard";
import { StudentCourses, StudentAssignments, StudentGrades } from "@/pages/student/StudentPages";
import LessonViewer from "@/pages/student/LessonViewer";
import TeacherLayout from "@/pages/teacher/TeacherLayout";
import TeacherDashboard from "@/pages/teacher/TeacherDashboard";
import { TutorClasses, TutorStudents } from "@/pages/teacher/TutorPages";
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
  const isTeacher = location.pathname.startsWith("/tutor");

  const isLesson = location.pathname.startsWith("/lesson");

  return (
    <>
      <ScrollToTop />
      {!isAuth && !isAdmin && !isStudent && !isTeacher && !isLesson && <Navbar />}
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
        <Route path="/lesson/:id" element={<LessonViewer />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="courses" element={<AdminCourses />} />
          <Route path="categories" element={<AdminDataPage pageKey="categories" />} />
          <Route path="tags" element={<AdminDataPage pageKey="tags" />} />
          <Route path="lessons" element={<AdminDataPage pageKey="lessons" />} />
          <Route path="quizzes" element={<AdminDataPage pageKey="quizzes" />} />
          <Route path="students" element={<AdminDataPage pageKey="students" />} />
          <Route path="tutors" element={<AdminDataPage pageKey="tutors" />} />
          <Route path="enrollments" element={<AdminDataPage pageKey="enrollments" />} />
          <Route path="analytics" element={<AdminDataPage pageKey="analytics" />} />
          <Route path="orders" element={<AdminDataPage pageKey="orders" />} />
          <Route path="coupons" element={<AdminDataPage pageKey="coupons" />} />
          <Route path="certificates" element={<AdminDataPage pageKey="certificates" />} />
          <Route path="blog" element={<AdminDataPage pageKey="blog" />} />
          <Route path="ai-features" element={<AdminAIFeatures />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="courses" element={<StudentCourses />} />
          <Route path="assignments" element={<StudentAssignments />} />
          <Route path="grades" element={<StudentGrades />} />
          <Route path="profile" element={<AdminSettings />} />
        </Route>
        <Route path="/tutor" element={<TeacherLayout />}>
          <Route index element={<TeacherDashboard />} />
          <Route path="classes" element={<TutorClasses />} />
          <Route path="students" element={<TutorStudents />} />
          <Route path="assignments" element={<AdminDataPage pageKey="quizzes" />} />
          <Route path="grading" element={<AdminDataPage pageKey="analytics" />} />
          <Route path="profile" element={<AdminSettings />} />
        </Route>
      </Routes>
      {!isAuth && !isAdmin && !isStudent && !isTeacher && !isLesson && <Footer />}
      {!isAuth && !isHome && !isAdmin && !isStudent && !isTeacher && !isLesson && <RoamingMascot />}
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
