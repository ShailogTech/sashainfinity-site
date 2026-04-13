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
import SplashScreen from "@/components/SplashScreen";

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

  return (
    <>
      <ScrollToTop />
      {!isAuth && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/meiporul-ar" element={<MeiporulPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
      </Routes>
      {!isAuth && <Footer />}
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
