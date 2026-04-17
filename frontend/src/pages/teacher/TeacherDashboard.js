import { useEffect, useState } from "react";

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
    { title: "Active Classes", value: stats.activeClasses, color: "bg-blue-500", trend: "+1 this term" },
    { title: "Total Students", value: stats.totalStudents, color: "bg-green-500", trend: "+12 this week" },
    { title: "Pending Grading", value: stats.pendingGrading, color: "bg-orange-500", trend: "Review soon" },
    { title: "Avg. Rating", value: stats.averageRating, color: "bg-purple-500", trend: "+0.2 this month" },
    {
      title: "Monthly Earnings",
      value: stats.monthlyEarnings.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }),
      color: "bg-emerald-500",
      trend: "+9.4%",
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
            className="bg-white rounded-xl p-6 border-l-4 border-gray-200 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15),0_4px_10px_-2px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.25),0_8px_20px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-sm mt-2 text-green-600">{stat.trend}</p>
              </div>
              <div className={`${stat.color} text-white text-3xl p-3 rounded-lg w-12 h-12`} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15),0_4px_10px_-2px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.25),0_8px_20px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
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

        <div className="bg-white rounded-xl p-6 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15),0_4px_10px_-2px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.25),0_8px_20px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
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
        <div className="bg-white rounded-xl p-6 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15),0_4px_10px_-2px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.25),0_8px_20px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Student Engagement</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center text-gray-500">
              <p>Chart visualization would go here</p>
              <p className="text-sm">Attendance and participation</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15),0_4px_10px_-2px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.25),0_8px_20px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Earnings Overview</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center text-gray-500">
              <p>Chart visualization would go here</p>
              <p className="text-sm">Revenue over time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
