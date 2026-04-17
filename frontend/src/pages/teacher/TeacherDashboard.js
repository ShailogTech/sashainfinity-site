import { useEffect, useState } from "react";
import { IconChalkboard, IconUsers, IconClipboardCheck, IconStar, IconCurrencyRupee } from "@tabler/icons-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const engagementData = [
  { week: "W1", attendance: 92, participation: 78 }, { week: "W2", attendance: 88, participation: 82 },
  { week: "W3", attendance: 95, participation: 85 }, { week: "W4", attendance: 90, participation: 80 },
  { week: "W5", attendance: 93, participation: 88 }, { week: "W6", attendance: 91, participation: 86 },
];
const earningsData = [
  { month: "Jan", earnings: 18000 }, { month: "Feb", earnings: 22000 }, { month: "Mar", earnings: 25000 },
  { month: "Apr", earnings: 28000 }, { month: "May", earnings: 30500 }, { month: "Jun", earnings: 32800 },
];

const TeacherDashboard = () => {
  const [stats, setStats] = useState({
    activeClasses: 0,
    totalStudents: 0,
    pendingGrading: 0,
    averageRating: 0,
    monthlyEarnings: 0,
  });
  const [upcomingClasses, setUpcomingClasses] = useState([]);
  const [pendingSubmissions, setPendingSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setTimeout(() => {
          setStats({
            activeClasses: 4,
            totalStudents: 128,
            pendingGrading: 17,
            averageRating: 4.7,
            monthlyEarnings: 32800,
          });
          setUpcomingClasses([
            { id: 1, title: "React Mastery — Live Q&A", time: "Today, 6:00 PM", students: 42 },
            { id: 2, title: "Python Basics — Lecture 8", time: "Tomorrow, 10:00 AM", students: 37 },
            { id: 3, title: "UI/UX — Critique Session", time: "Fri, 4:30 PM", students: 24 },
          ]);
          setPendingSubmissions([
            { id: 1, student: "Arjun Kumar", assignment: "React Hooks Assignment", submitted: "2 hours ago" },
            { id: 2, student: "Priya Shah", assignment: "Python Quiz 3", submitted: "5 hours ago" },
            { id: 3, student: "Rahul Verma", assignment: "UI Capstone Draft", submitted: "1 day ago" },
            { id: 4, student: "Meera Iyer", assignment: "React Hooks Assignment", submitted: "1 day ago" },
          ]);
          setLoading(false);
        }, 600);
      } catch (error) {
        console.error("Error fetching teacher dashboard:", error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const statCards = [
    { title: "Active Classes", value: stats.activeClasses, color: "bg-blue-500", trend: "+1 this term", icon: <IconChalkboard size={24} /> },
    { title: "Total Students", value: stats.totalStudents, color: "bg-green-500", trend: "+12 this week", icon: <IconUsers size={24} /> },
    { title: "Pending Grading", value: stats.pendingGrading, color: "bg-orange-500", trend: "Review soon", icon: <IconClipboardCheck size={24} /> },
    { title: "Avg. Rating", value: stats.averageRating, color: "bg-purple-500", trend: "+0.2 this month", icon: <IconStar size={24} /> },
    {
      title: "Monthly Earnings",
      value: stats.monthlyEarnings.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }),
      color: "bg-emerald-500",
      trend: "+9.4%",
      icon: <IconCurrencyRupee size={24} />,
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="glass-card glass-card-amber rounded-xl p-6 border-l-4 border-amber-300/30 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-sm mt-2 text-green-600">{stat.trend}</p>
              </div>
              <div className={`${stat.color} text-white p-3 rounded-lg`}>{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Upcoming Classes</h3>
          <div className="space-y-3">
            {upcomingClasses.map((cls) => (
              <div
                key={cls.id}
                className="flex items-center justify-between p-3 bg-blue-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-800">{cls.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{cls.students} students</p>
                </div>
                <span className="text-xs text-blue-700 font-medium whitespace-nowrap ml-3">
                  {cls.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Pending Submissions</h3>
          <div className="space-y-3">
            {pendingSubmissions.map((s) => (
              <div key={s.id} className="flex items-start justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div>
                  <p className="text-sm text-gray-800 font-medium">{s.student}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.assignment}</p>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap ml-3">{s.submitted}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Student Engagement</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={engagementData}>
                <defs>
                  <linearGradient id="attGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#667EEA" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#667EEA" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="partGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#43e97b" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#43e97b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} unit="%" domain={[60, 100]} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }} />
                <Area type="monotone" dataKey="attendance" stroke="#667EEA" strokeWidth={2} fill="url(#attGrad)" name="Attendance" />
                <Area type="monotone" dataKey="participation" stroke="#43e97b" strokeWidth={2} fill="url(#partGrad)" name="Participation" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Earnings Overview</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={earningsData}>
                <defs>
                  <linearGradient id="earnGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f4911a" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#f4911a" stopOpacity={0.4} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} tickFormatter={(v) => `₹${(v/1000).toFixed(0)}k`} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }} formatter={(v) => [`₹${v.toLocaleString()}`, "Earnings"]} />
                <Bar dataKey="earnings" fill="url(#earnGrad)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
