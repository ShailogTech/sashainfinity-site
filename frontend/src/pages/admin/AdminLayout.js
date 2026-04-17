import { Outlet, useLocation } from "react-router-dom";
import AdminSidebar from "@/components/AdminSidebar";

const navItems = [
  { path: "/admin", label: "Dashboard" },
  { path: "/admin/courses", label: "All Courses" },
  { path: "/admin/categories", label: "Categories" },
  { path: "/admin/tags", label: "Tags" },
  { path: "/admin/lessons", label: "Lessons" },
  { path: "/admin/quizzes", label: "Quizzes" },
  { path: "/admin/students", label: "Students" },
  { path: "/admin/tutors", label: "Tutors" },
  { path: "/admin/enrollments", label: "Enrollments" },
  { path: "/admin/analytics", label: "Analytics" },
  { path: "/admin/orders", label: "Orders" },
  { path: "/admin/coupons", label: "Coupons" },
  { path: "/admin/certificates", label: "Certificates" },
  { path: "/admin/blog", label: "Blog" },
  { path: "/admin/users", label: "Users" },
  { path: "/admin/settings", label: "Settings" },
];

const AdminLayout = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/admin") return location.pathname === "/admin";
    return location.pathname.startsWith(path);
  };

  const currentLabel =
    navItems.find((item) => isActive(item.path))?.label || "Admin Panel";

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
        <AdminSidebar />
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

export default AdminLayout;
