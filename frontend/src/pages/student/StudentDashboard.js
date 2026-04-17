import { useEffect, useState } from "react";
import { IconBook, IconChecks, IconClipboardList, IconCertificate, IconClock } from "@tabler/icons-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const learningData = [
  { day: "Mon", hours: 2.5 }, { day: "Tue", hours: 1.8 }, { day: "Wed", hours: 3.2 },
  { day: "Thu", hours: 2.1 }, { day: "Fri", hours: 4.0 }, { day: "Sat", hours: 1.5 }, { day: "Sun", hours: 0.8 },
];
const skillData = [
  { skill: "React", score: 78 }, { skill: "Python", score: 45 }, { skill: "CSS", score: 92 },
  { skill: "Node", score: 60 }, { skill: "SQL", score: 35 },
];

const StudentDashboard = () => {
  const [stats, setStats] = useState({
    enrolledCourses: 0,
    completedLessons: 0,
    assignmentsDue: 0,
    certificatesEarned: 0,
    hoursLearned: 0,
  });
  const [activeCourses, setActiveCourses] = useState([]);
  const [upcomingDeadlines, setUpcomingDeadlines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setTimeout(() => {
          setStats({
            enrolledCourses: 6,
            completedLessons: 42,
            assignmentsDue: 3,
            certificatesEarned: 2,
            hoursLearned: 78,
          });
          setActiveCourses([
            { id: 1, title: "React Mastery", progress: 72, nextLesson: "Hooks Deep Dive" },
            { id: 2, title: "Python Basics", progress: 45, nextLesson: "Loops and Iterators" },
            { id: 3, title: "UI/UX Fundamentals", progress: 90, nextLesson: "Final Project Review" },
          ]);
          setUpcomingDeadlines([
            { id: 1, title: "React Mastery — Hooks Assignment", due: "Due in 2 days" },
            { id: 2, title: "Python Basics — Quiz 3", due: "Due in 4 days" },
            { id: 3, title: "UI/UX — Capstone Submission", due: "Due in 1 week" },
          ]);
          setLoading(false);
        }, 600);
      } catch (error) {
        console.error("Error fetching student dashboard:", error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const statCards = [
    { title: "Enrolled Courses", value: stats.enrolledCourses, color: "bg-blue-500", trend: "+1 this month", icon: <IconBook size={24} /> },
    { title: "Completed Lessons", value: stats.completedLessons, color: "bg-green-500", trend: "+8 this week", icon: <IconChecks size={24} /> },
    { title: "Assignments Due", value: stats.assignmentsDue, color: "bg-orange-500", trend: "3 pending", icon: <IconClipboardList size={24} /> },
    { title: "Certificates", value: stats.certificatesEarned, color: "bg-purple-500", trend: "+1 recently", icon: <IconCertificate size={24} /> },
    { title: "Hours Learned", value: stats.hoursLearned, color: "bg-emerald-500", trend: "+6 this week", icon: <IconClock size={24} /> },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Bento Grid — Row 1: Continue Learning + Streak + Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Continue Learning — Large card */}
        <div className="lg:col-span-7 glass-card glass-card-blue rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Continue Learning</h3>
          <div className="space-y-3">
            {activeCourses.map((course) => (
              <div key={course.id} className="p-3 rounded-lg hover:bg-white/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-800">{course.title}</p>
                  <span className="text-sm font-semibold" style={{ color: course.progress > 80 ? "#43e97b" : "#f4911a" }}>{course.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200/50 rounded-full overflow-hidden mb-1">
                  <div className="h-full rounded-full transition-all" style={{ width: `${course.progress}%`, background: course.progress > 80 ? "#43e97b" : "#f4911a" }} />
                </div>
                <p className="text-xs text-gray-500">Next: {course.nextLesson}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — Streak + Quick Stats stacked */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Daily Streak Card */}
          <div className="glass-card glass-card-amber rounded-xl p-5 flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-gray-700">Daily Streak</h3>
              <span className="text-2xl">🔥</span>
            </div>
            <p className="text-4xl font-black text-orange-500 mb-1">7 Days</p>
            <p className="text-xs text-gray-500">Keep going! You're on fire this week.</p>
            <div className="flex gap-1 mt-3">
              {["M","T","W","T","F","S","S"].map((d, i) => (
                <div key={i} className={`flex-1 h-6 rounded text-[9px] font-bold flex items-center justify-center ${i < 5 ? "bg-orange-400 text-white" : i === 5 ? "bg-orange-200 text-orange-600" : "bg-gray-100 text-gray-400"}`}>{d}</div>
              ))}
            </div>
          </div>

          {/* Mini Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            {statCards.slice(0, 4).map((stat, i) => (
              <div key={i} className="glass-card rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className={`${stat.color} text-white p-1.5 rounded-lg`}>{stat.icon}</div>
                </div>
                <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wide">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bento Grid — Row 2: Upcoming Deadlines + Performance Snapshot */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-5 glass-card glass-card-rose rounded-xl p-5">
          <h3 className="text-sm font-bold text-gray-700 mb-3">Upcoming Deadlines</h3>
          <div className="space-y-2">
            {upcomingDeadlines.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-2.5 bg-white/40 rounded-lg">
                <p className="text-sm text-gray-800">{item.title}</p>
                <span className="text-xs font-semibold text-orange-600 whitespace-nowrap ml-2 bg-orange-50 px-2 py-0.5 rounded">{item.due}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 glass-card glass-card-green rounded-xl p-5">
          <h3 className="text-sm font-bold text-gray-700 mb-3">Learning Activity This Week</h3>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={learningData}>
                <defs>
                  <linearGradient id="learnGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#43e97b" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#43e97b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#9ca3af" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#9ca3af" }} unit="h" />
                <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }} />
                <Area type="monotone" dataKey="hours" stroke="#43e97b" strokeWidth={2.5} fill="url(#learnGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bento Grid — Row 3: Skill Progress */}
      <div className="glass-card glass-card-purple rounded-xl p-5">
        <h3 className="text-sm font-bold text-gray-700 mb-3">Skill Progress</h3>
        <div className="h-44">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={skillData} layout="vertical">
              <XAxis type="number" domain={[0, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#9ca3af" }} unit="%" />
              <YAxis type="category" dataKey="skill" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} width={50} />
              <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }} />
              <Bar dataKey="score" fill="#667EEA" radius={[0, 8, 8, 0]} barSize={18} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
