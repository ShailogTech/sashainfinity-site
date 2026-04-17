import { Outlet, useLocation } from "react-router-dom";
import StudentSidebar from "@/components/StudentSidebar";

const navItems = [
  { path: "/student", label: "Dashboard" },
  { path: "/student/courses", label: "My Courses" },
  { path: "/student/assignments", label: "Assignments" },
  { path: "/student/grades", label: "Grades" },
  { path: "/student/profile", label: "Profile" },
];

const StudentLayout = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/student") return location.pathname === "/student";
    return location.pathname.startsWith(path);
  };

  const currentLabel =
    navItems.find((item) => isActive(item.path))?.label || "Student Portal";

  return (
    <div className="min-h-screen w-full bg-white relative text-gray-800 flex">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
            repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
            repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
            repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
          `,
        }}
      />

      <div className="relative z-10 shrink-0 sticky top-0 h-screen overflow-y-auto">
        <StudentSidebar />
      </div>

      <main className="relative z-10 flex-1 min-w-0" style={{ paddingTop: 32 }}>
        <div className="px-6">
          <h2 className="text-2xl font-bold text-gray-800">{currentLabel}</h2>
        </div>
        <div className="px-6 pt-3 pb-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default StudentLayout;
