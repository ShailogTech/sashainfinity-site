import { useEffect, useState } from "react";

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
    { title: "Enrolled Courses", value: stats.enrolledCourses, color: "bg-blue-500", trend: "+1 this month" },
    { title: "Completed Lessons", value: stats.completedLessons, color: "bg-green-500", trend: "+8 this week" },
    { title: "Assignments Due", value: stats.assignmentsDue, color: "bg-orange-500", trend: "3 pending" },
    { title: "Certificates", value: stats.certificatesEarned, color: "bg-purple-500", trend: "+1 recently" },
    { title: "Hours Learned", value: stats.hoursLearned, color: "bg-emerald-500", trend: "+6 this week" },
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
          <h3 className="text-lg font-bold text-gray-800 mb-4">Continue Learning</h3>
          <div className="space-y-4">
            {activeCourses.map((course) => (
              <div key={course.id} className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-800">{course.title}</p>
                  <span className="text-sm text-gray-500">{course.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-emerald-500"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500">Next: {course.nextLesson}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15),0_4px_10px_-2px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.25),0_8px_20px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Upcoming Deadlines</h3>
          <div className="space-y-3">
            {upcomingDeadlines.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 bg-orange-50 rounded-lg"
              >
                <p className="text-sm text-gray-800">{item.title}</p>
                <span className="text-xs text-orange-700 font-medium whitespace-nowrap ml-3">
                  {item.due}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15),0_4px_10px_-2px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.25),0_8px_20px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Learning Activity</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center text-gray-500">
              <p>Chart visualization would go here</p>
              <p className="text-sm">Hours learned over time</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15),0_4px_10px_-2px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.25),0_8px_20px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Achievements</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center text-gray-500">
              <p>Badges and certificates</p>
              <p className="text-sm">Earned so far</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
