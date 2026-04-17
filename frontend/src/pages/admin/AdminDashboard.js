import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCourses: 0,
    totalBlogPosts: 0,
    activeUsers: 0,
    revenue: 0,
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch dashboard data from backend API
    const fetchDashboardData = async () => {
      try {
        // In a real app, you'd fetch this from your API
        // const response = await axios.get('http://localhost:8000/api/admin/dashboard');
        // setStats(response.data);

        // Mock data for now
        setTimeout(() => {
          setStats({
            totalUsers: 1250,
            totalCourses: 45,
            totalBlogPosts: 128,
            activeUsers: 890,
            revenue: 45600,
          });
          setRecentActivity([
            { id: 1, type: "user", message: "New user registered: John Doe", time: "5 minutes ago" },
            { id: 2, type: "course", message: "Course 'React Mastery' published", time: "15 minutes ago" },
            { id: 3, type: "blog", message: "Blog post '10 Tips for Learning' published", time: "1 hour ago" },
            { id: 4, type: "user", message: "User Sarah Smith enrolled in 'Python Basics'", time: "2 hours ago" },
            { id: 5, type: "revenue", message: "New subscription: ₹4,199 from Mike Johnson", time: "3 hours ago" },
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const statCards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: "",
      color: "bg-blue-500",
      trend: "+12.5%",
      trendUp: true,
    },
    {
      title: "Total Courses",
      value: stats.totalCourses,
      icon: "",
      color: "bg-green-500",
      trend: "+3",
      trendUp: true,
    },
    {
      title: "Blog Posts",
      value: stats.totalBlogPosts,
      icon: "",
      color: "bg-purple-500",
      trend: "+8",
      trendUp: true,
    },
    {
      title: "Active Users",
      value: stats.activeUsers,
      icon: "",
      color: "bg-orange-500",
      trend: "+5.2%",
      trendUp: true,
    },
    {
      title: "Revenue",
      value: stats.revenue.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }),
      icon: "",
      color: "bg-emerald-500",
      trend: "+18.3%",
      trendUp: true,
    },
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case "user":
        return "";
      case "course":
        return "";
      case "blog":
        return "";
      case "revenue":
        return "";
      default:
        return "";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
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
                <p
                  className={`text-sm mt-2 ${
                    stat.trendUp ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.trend}
                </p>
              </div>
              <div
                className={`${stat.color} text-white text-3xl p-3 rounded-lg`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="text-2xl">{getActivityIcon(activity.type)}</div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 gap-3">
            <button className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-left">
              <span className="text-2xl"></span>
              <div>
                <p className="font-medium text-gray-800">Add New Course</p>
                <p className="text-sm text-gray-600">Create a new course</p>
              </div>
            </button>
            <button className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-left">
              <span className="text-2xl"></span>
              <div>
                <p className="font-medium text-gray-800">Manage Users</p>
                <p className="text-sm text-gray-600">View and manage users</p>
              </div>
            </button>
            <button className="flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-left">
              <span className="text-2xl"></span>
              <div>
                <p className="font-medium text-gray-800">Write Blog Post</p>
                <p className="text-sm text-gray-600">Create new blog content</p>
              </div>
            </button>
            <button className="flex items-center gap-3 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors text-left">
              <span className="text-2xl"></span>
              <div>
                <p className="font-medium text-gray-800">View Analytics</p>
                <p className="text-sm text-gray-600">See detailed reports</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-lg font-bold text-gray-800 mb-4">User Growth</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center text-gray-500">
              <p className="mb-2"></p>
              <p>Chart visualization would go here</p>
              <p className="text-sm">Users over time</p>
            </div>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Revenue Overview</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center text-gray-500">
              <p className="mb-2"></p>
              <p>Chart visualization would go here</p>
              <p className="text-sm">Revenue over time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
