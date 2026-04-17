import { useEffect, useState } from "react";
import { IconChalkboard, IconUsers, IconClipboardCheck, IconStar, IconCurrencyRupee, IconCheck } from "@tabler/icons-react";
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
    <div className="space-y-5">
      {/* Daily Briefing */}
      <div className="glass-card glass-card-blue rounded-xl p-5">
        <div className="flex items-start gap-4">
          <div style={{ background: "rgba(102,126,234,0.12)", padding: 12, borderRadius: 14 }}>
            <IconChalkboard size={24} style={{ color: "#667EEA" }} />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-gray-800 mb-1">Good morning! Here's your daily briefing</h3>
            <p className="text-sm text-gray-600 leading-relaxed">You're <span className="font-bold text-blue-600">80% through Unit 2</span> of React Mastery. Based on yesterday's quiz, <span className="font-bold text-orange-500">5 students are struggling with Hooks</span>. Consider a quick revision session today.</p>
            <div className="flex gap-3 mt-3">
              <button className="px-4 py-1.5 bg-blue-500 text-white text-xs font-bold rounded-lg hover:bg-blue-600 transition-all">Review Struggling Students</button>
              <button className="px-4 py-1.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg hover:bg-gray-200 transition-all">Schedule Revision</button>
            </div>
          </div>
        </div>
      </div>

      {/* Row: Next Lesson Engine + Prerequisite Alert + Revision Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Next Lesson Engine */}
        <div className="glass-card glass-card-green rounded-xl p-4">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Next Lesson Engine</h4>
          <p className="text-sm font-bold text-gray-800 mb-1">Suggested: useEffect & Side Effects</p>
          <p className="text-xs text-gray-500 mb-3">Auto-selected based on syllabus sequence. All prerequisites met.</p>
          <div className="flex items-center gap-1 text-[10px] text-green-600 font-semibold"><IconCheck size={14} /> Prerequisites: <span className="text-gray-500">useState, JSX Basics</span></div>
          <button className="mt-3 w-full px-3 py-2 bg-green-500 text-white text-xs font-bold rounded-lg hover:bg-green-600 transition-all">Start This Lesson</button>
        </div>

        {/* Prerequisite Alert */}
        <div className="glass-card glass-card-amber rounded-xl p-4">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Prerequisite Alert</h4>
          <div className="p-3 rounded-lg mb-2" style={{ background: "rgba(245,87,108,0.06)", border: "1px solid rgba(245,87,108,0.15)" }}>
            <p className="text-xs font-bold text-red-600 mb-1">Warning: Advanced React</p>
            <p className="text-[11px] text-gray-600">"JavaScript Basics" not fully mastered by 12 students. Assigning Advanced React may cause confusion.</p>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 px-2 py-1.5 bg-orange-100 text-orange-700 text-[11px] font-semibold rounded-lg">Assign Prep Work</button>
            <button className="flex-1 px-2 py-1.5 bg-gray-100 text-gray-600 text-[11px] font-semibold rounded-lg">Proceed Anyway</button>
          </div>
        </div>

        {/* Revision Radar */}
        <div className="glass-card glass-card-purple rounded-xl p-4">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Revision Radar</h4>
          <p className="text-[11px] text-gray-500 mb-2">Topics ranked by poor test performance</p>
          <div className="space-y-1.5">
            {[
              { topic: "Closures", score: 42, color: "#f5576c" },
              { topic: "Promises", score: 55, color: "#f4911a" },
              { topic: "Array Methods", score: 61, color: "#f4911a" },
              { topic: "DOM Manipulation", score: 78, color: "#43e97b" },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[11px] text-gray-700 w-24 truncate">{t.topic}</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${t.score}%`, background: t.color }} />
                </div>
                <span className="text-[10px] font-bold" style={{ color: t.color }}>{t.score}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
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

      {/* Video Heatmap Analytics */}
      <div className="glass-card glass-card-rose rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Video Heatmap — Drop-off Points</h3>
        <p className="text-xs text-gray-500 mb-4">Shows where students stop watching, rewatch, or get confused</p>
        <div className="space-y-3">
          {[
            { title: "React Hooks Deep Dive", duration: "18:24", dropoff: 42, rewatch: 68, confused: 31 },
            { title: "State Management", duration: "22:10", dropoff: 55, rewatch: 45, confused: 22 },
            { title: "Python Loops", duration: "15:30", dropoff: 38, rewatch: 72, confused: 48 },
          ].map((v, i) => (
            <div key={i} className="p-3 bg-white/40 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-gray-800">{v.title}</p>
                <span className="text-xs text-gray-500">{v.duration}</span>
              </div>
              {/* Heatmap bar */}
              <div className="relative h-6 rounded-full overflow-hidden bg-gray-100 mb-2">
                <div className="absolute inset-0 flex">
                  {Array.from({ length: 20 }, (_, j) => {
                    const intensity = Math.sin((j / 20) * Math.PI) * 0.5 + Math.random() * 0.5;
                    const isDropoff = j > 14;
                    const isRewatch = j >= 6 && j <= 10;
                    const color = isDropoff ? `rgba(245,87,108,${intensity})` : isRewatch ? `rgba(102,126,234,${intensity})` : `rgba(67,233,123,${intensity})`;
                    return <div key={j} style={{ flex: 1, background: color }} />;
                  })}
                </div>
              </div>
              <div className="flex gap-4 text-[10px]">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-400 inline-block" /> Drop-off: {v.dropoff}%</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-400 inline-block" /> Rewatch: {v.rewatch}%</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400 inline-block" /> Confused: {v.confused}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
