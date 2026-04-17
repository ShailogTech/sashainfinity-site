import { useState } from "react";
import {
  IconSearch, IconPlus, IconEdit, IconTrash, IconDownload,
  IconFilter, IconSortAscending,
} from "@tabler/icons-react";

// Mock data configs for each admin section
const PAGE_CONFIGS = {
  categories: {
    title: "Course Categories",
    columns: ["Name", "Slug", "Courses", "Status"],
    data: [
      { name: "Web Development", slug: "web-dev", courses: 12, status: "Active" },
      { name: "Data Science", slug: "data-science", courses: 8, status: "Active" },
      { name: "Mobile Development", slug: "mobile-dev", courses: 6, status: "Active" },
      { name: "UI/UX Design", slug: "ui-ux", courses: 5, status: "Active" },
      { name: "DevOps", slug: "devops", courses: 4, status: "Draft" },
      { name: "Machine Learning", slug: "ml", courses: 7, status: "Active" },
      { name: "Cybersecurity", slug: "cybersec", courses: 3, status: "Active" },
    ],
  },
  tags: {
    title: "Course Tags",
    columns: ["Tag Name", "Slug", "Used In", "Created"],
    data: [
      { name: "React", slug: "react", used: 8, created: "Jan 15, 2026" },
      { name: "Python", slug: "python", used: 6, created: "Jan 20, 2026" },
      { name: "JavaScript", slug: "javascript", used: 12, created: "Jan 10, 2026" },
      { name: "TypeScript", slug: "typescript", used: 4, created: "Feb 1, 2026" },
      { name: "Node.js", slug: "nodejs", used: 5, created: "Feb 5, 2026" },
      { name: "CSS", slug: "css", used: 7, created: "Jan 12, 2026" },
      { name: "SQL", slug: "sql", used: 3, created: "Feb 10, 2026" },
      { name: "Docker", slug: "docker", used: 2, created: "Mar 1, 2026" },
    ],
  },
  lessons: {
    title: "Lessons",
    columns: ["Title", "Course", "Type", "Duration", "Status"],
    data: [
      { name: "Intro to React Hooks", course: "React Mastery", type: "Video", duration: "12 min", status: "Published" },
      { name: "State Management", course: "React Mastery", type: "Video", duration: "18 min", status: "Published" },
      { name: "Python Lists & Tuples", course: "Python Basics", type: "Video", duration: "15 min", status: "Published" },
      { name: "Functions Deep Dive", course: "Python Basics", type: "Video", duration: "22 min", status: "Draft" },
      { name: "HTML Fundamentals", course: "Web Dev Bootcamp", type: "Text", duration: "10 min", status: "Published" },
      { name: "Flexbox Layout", course: "Web Dev Bootcamp", type: "Video", duration: "20 min", status: "Published" },
      { name: "REST API Design", course: "Web Dev Bootcamp", type: "Video", duration: "25 min", status: "Draft" },
    ],
  },
  quizzes: {
    title: "Quizzes",
    columns: ["Quiz Title", "Course", "Questions", "Attempts", "Avg Score"],
    data: [
      { name: "React Hooks Quiz", course: "React Mastery", questions: 10, attempts: 189, avg: "78%" },
      { name: "Python Basics Test", course: "Python Basics", questions: 15, attempts: 145, avg: "82%" },
      { name: "HTML/CSS Assessment", course: "Web Dev Bootcamp", questions: 20, attempts: 312, avg: "74%" },
      { name: "JavaScript Fundamentals", course: "Web Dev Bootcamp", questions: 12, attempts: 267, avg: "71%" },
      { name: "State Management Quiz", course: "React Mastery", questions: 8, attempts: 98, avg: "85%" },
    ],
  },
  students: {
    title: "Students",
    columns: ["Name", "Email", "Enrolled", "Completed", "Last Active"],
    data: [
      { name: "Arjun Kumar", email: "arjun@example.com", enrolled: 4, completed: 2, active: "2 hours ago" },
      { name: "Priya Shah", email: "priya@example.com", enrolled: 3, completed: 1, active: "5 hours ago" },
      { name: "Rahul Verma", email: "rahul@example.com", enrolled: 5, completed: 3, active: "1 day ago" },
      { name: "Meera Iyer", email: "meera@example.com", enrolled: 2, completed: 0, active: "3 hours ago" },
      { name: "Karthik Nair", email: "karthik@example.com", enrolled: 6, completed: 4, active: "Just now" },
      { name: "Divya Menon", email: "divya@example.com", enrolled: 3, completed: 2, active: "1 hour ago" },
    ],
  },
  tutors: {
    title: "Tutors",
    columns: ["Name", "Email", "Courses", "Students", "Rating"],
    data: [
      { name: "John Doe", email: "john@example.com", courses: 3, students: 245, rating: "4.8" },
      { name: "Jane Smith", email: "jane@example.com", courses: 2, students: 189, rating: "4.6" },
      { name: "Mike Johnson", email: "mike@example.com", courses: 4, students: 412, rating: "4.9" },
      { name: "Sarah Williams", email: "sarah@example.com", courses: 1, students: 87, rating: "4.5" },
    ],
  },
  enrollments: {
    title: "Enrollments",
    columns: ["Student", "Course", "Enrolled Date", "Progress", "Status"],
    data: [
      { name: "Arjun Kumar", course: "React Mastery", date: "Mar 15, 2026", progress: "72%", status: "Active" },
      { name: "Priya Shah", course: "Python Basics", date: "Mar 20, 2026", progress: "45%", status: "Active" },
      { name: "Rahul Verma", course: "Web Dev Bootcamp", date: "Feb 28, 2026", progress: "100%", status: "Completed" },
      { name: "Meera Iyer", course: "React Mastery", date: "Apr 1, 2026", progress: "18%", status: "Active" },
      { name: "Karthik Nair", course: "Python Basics", date: "Jan 10, 2026", progress: "100%", status: "Completed" },
      { name: "Divya Menon", course: "UI/UX Design", date: "Apr 5, 2026", progress: "30%", status: "Active" },
    ],
  },
  analytics: {
    title: "Analytics",
    columns: ["Metric", "This Week", "Last Week", "Change", "Trend"],
    data: [
      { name: "New Signups", thisWeek: 48, lastWeek: 42, change: "+14.3%", trend: "Up" },
      { name: "Course Enrollments", thisWeek: 72, lastWeek: 65, change: "+10.8%", trend: "Up" },
      { name: "Lesson Completions", thisWeek: 312, lastWeek: 289, change: "+7.9%", trend: "Up" },
      { name: "Revenue", thisWeek: "₹1,24,500", lastWeek: "₹1,08,200", change: "+15.1%", trend: "Up" },
      { name: "Active Users", thisWeek: 890, lastWeek: 845, change: "+5.3%", trend: "Up" },
      { name: "Avg Session Duration", thisWeek: "24 min", lastWeek: "22 min", change: "+9.1%", trend: "Up" },
    ],
  },
  orders: {
    title: "Orders",
    columns: ["Order ID", "Student", "Course", "Amount", "Date", "Status"],
    data: [
      { name: "#ORD-1042", student: "Arjun Kumar", course: "React Mastery", amount: "₹7,999", date: "Apr 15, 2026", status: "Completed" },
      { name: "#ORD-1041", student: "Priya Shah", course: "Python Basics", amount: "₹6,499", date: "Apr 14, 2026", status: "Completed" },
      { name: "#ORD-1040", student: "Rahul Verma", course: "Web Dev Bootcamp", amount: "₹11,999", date: "Apr 13, 2026", status: "Completed" },
      { name: "#ORD-1039", student: "Meera Iyer", course: "React Mastery", amount: "₹7,999", date: "Apr 12, 2026", status: "Refunded" },
      { name: "#ORD-1038", student: "Karthik Nair", course: "UI/UX Design", amount: "₹5,999", date: "Apr 11, 2026", status: "Completed" },
    ],
  },
  coupons: {
    title: "Coupons",
    columns: ["Code", "Discount", "Type", "Uses", "Limit", "Expires", "Status"],
    data: [
      { name: "WELCOME20", discount: "20%", type: "Percentage", uses: 145, limit: 500, expires: "Jun 30, 2026", status: "Active" },
      { name: "FLAT500", discount: "₹500", type: "Fixed", uses: 89, limit: 200, expires: "May 31, 2026", status: "Active" },
      { name: "SUMMER25", discount: "25%", type: "Percentage", uses: 0, limit: 100, expires: "Jul 31, 2026", status: "Scheduled" },
      { name: "EARLYBIRD", discount: "30%", type: "Percentage", uses: 50, limit: 50, expires: "Apr 1, 2026", status: "Expired" },
    ],
  },
  certificates: {
    title: "Certificates",
    columns: ["Certificate ID", "Student", "Course", "Issued", "Template", "Status"],
    data: [
      { name: "CERT-2026-001", student: "Rahul Verma", course: "Web Dev Bootcamp", issued: "Mar 28, 2026", template: "Professional", status: "Issued" },
      { name: "CERT-2026-002", student: "Karthik Nair", course: "Python Basics", issued: "Apr 2, 2026", template: "Professional", status: "Issued" },
      { name: "CERT-2026-003", student: "Arjun Kumar", course: "React Mastery", issued: "—", template: "Professional", status: "Pending" },
    ],
  },
  blog: {
    title: "Blog Posts",
    columns: ["Title", "Author", "Category", "Published", "Views", "Status"],
    data: [
      { name: "10 Tips for Learning React", author: "John Doe", category: "Tutorial", published: "Apr 10, 2026", views: 1240, status: "Published" },
      { name: "Python vs JavaScript in 2026", author: "Jane Smith", category: "Opinion", published: "Apr 8, 2026", views: 890, status: "Published" },
      { name: "Getting Started with Docker", author: "Mike Johnson", category: "Guide", published: "—", views: 0, status: "Draft" },
      { name: "UI/UX Best Practices", author: "Sarah Williams", category: "Design", published: "Apr 5, 2026", views: 560, status: "Published" },
      { name: "Career in Web Development", author: "John Doe", category: "Career", published: "Apr 1, 2026", views: 2100, status: "Published" },
    ],
  },
};

const STATUS_COLORS = {
  Active: "bg-green-100 text-green-800",
  Published: "bg-green-100 text-green-800",
  Completed: "bg-blue-100 text-blue-800",
  Issued: "bg-blue-100 text-blue-800",
  Draft: "bg-yellow-100 text-yellow-800",
  Scheduled: "bg-purple-100 text-purple-800",
  Pending: "bg-orange-100 text-orange-800",
  Refunded: "bg-red-100 text-red-800",
  Expired: "bg-gray-100 text-gray-600",
  Up: "bg-green-100 text-green-800",
};

export default function AdminDataPage({ pageKey }) {
  const config = PAGE_CONFIGS[pageKey];
  const [search, setSearch] = useState("");

  if (!config) return <div className="p-6 text-gray-500">Page not found.</div>;

  const filteredData = config.data.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="space-y-4">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 glass-card rounded-lg px-3 py-2 flex-1 max-w-md">
          <IconSearch size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${config.title.toLowerCase()}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent border-none outline-none text-sm text-gray-800 w-full"
            style={{ fontFamily: "Inter, sans-serif" }}
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 glass-card rounded-lg hover:border-gray-300 transition-all">
            <IconFilter size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 glass-card rounded-lg hover:border-gray-300 transition-all">
            <IconDownload size={16} /> Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-all shadow-sm">
            <IconPlus size={16} /> Add New
          </button>
        </div>
      </div>

      {/* Summary */}
      <p className="text-sm text-gray-500">{filteredData.length} {config.title.toLowerCase()} found</p>

      {/* Table */}
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200/30">
                {config.columns.map((col, i) => (
                  <th key={i} className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    <span className="flex items-center gap-1 cursor-pointer hover:text-gray-700">
                      {col} <IconSortAscending size={12} />
                    </span>
                  </th>
                ))}
                <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, i) => {
                const values = Object.values(row);
                return (
                  <tr key={i} className="border-b border-gray-100/50 hover:bg-gray-50/50 transition-colors">
                    {values.map((val, j) => (
                      <td key={j} className="px-5 py-3.5 text-sm text-gray-700">
                        {STATUS_COLORS[val] ? (
                          <span className={`px-2 py-1 text-xs font-medium rounded ${STATUS_COLORS[val]}`}>{val}</span>
                        ) : (
                          j === 0 ? <span className="font-medium text-gray-900">{val}</span> : val
                        )}
                      </td>
                    ))}
                    <td className="px-5 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                          <IconEdit size={16} />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                          <IconTrash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
