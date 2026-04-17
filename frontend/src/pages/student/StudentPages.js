import { useState } from "react";
import { IconSearch, IconPlayerPlay, IconCertificate, IconClock, IconChartBar } from "@tabler/icons-react";

const MY_COURSES = [
  { id: 1, title: "React Mastery", instructor: "John Doe", progress: 72, lessons: 24, completed: 17, nextLesson: "Hooks Deep Dive", status: "In Progress" },
  { id: 2, title: "Python Basics", instructor: "Jane Smith", progress: 45, lessons: 18, completed: 8, nextLesson: "Loops and Iterators", status: "In Progress" },
  { id: 3, title: "UI/UX Fundamentals", instructor: "Sarah Williams", progress: 90, lessons: 15, completed: 13, nextLesson: "Final Project Review", status: "In Progress" },
  { id: 4, title: "Web Dev Bootcamp", instructor: "Mike Johnson", progress: 100, lessons: 30, completed: 30, nextLesson: "—", status: "Completed" },
  { id: 5, title: "Data Analytics", instructor: "Priya Shah", progress: 15, lessons: 20, completed: 3, nextLesson: "Intro to Pandas", status: "In Progress" },
];

const MY_ASSIGNMENTS = [
  { id: 1, title: "React Hooks Assignment", course: "React Mastery", due: "Apr 20, 2026", submitted: "—", grade: "—", status: "Pending" },
  { id: 2, title: "Python Quiz 3", course: "Python Basics", due: "Apr 18, 2026", submitted: "Apr 17, 2026", grade: "85%", status: "Graded" },
  { id: 3, title: "UI Capstone Draft", course: "UI/UX Fundamentals", due: "Apr 25, 2026", submitted: "—", grade: "—", status: "Pending" },
  { id: 4, title: "HTML/CSS Assessment", course: "Web Dev Bootcamp", due: "Mar 15, 2026", submitted: "Mar 14, 2026", grade: "92%", status: "Graded" },
  { id: 5, title: "Data Viz Project", course: "Data Analytics", due: "May 1, 2026", submitted: "—", grade: "—", status: "Upcoming" },
];

const MY_GRADES = [
  { course: "React Mastery", quizAvg: "78%", assignmentAvg: "82%", overall: "80%", rank: "12/245" },
  { course: "Python Basics", quizAvg: "85%", assignmentAvg: "88%", overall: "87%", rank: "8/189" },
  { course: "UI/UX Fundamentals", quizAvg: "91%", assignmentAvg: "94%", overall: "93%", rank: "3/87" },
  { course: "Web Dev Bootcamp", quizAvg: "74%", assignmentAvg: "80%", overall: "77%", rank: "45/412" },
  { course: "Data Analytics", quizAvg: "—", assignmentAvg: "—", overall: "—", rank: "—" },
];

const STATUS_COLORS = {
  "In Progress": "bg-blue-100 text-blue-800",
  Completed: "bg-green-100 text-green-800",
  Pending: "bg-orange-100 text-orange-800",
  Graded: "bg-green-100 text-green-800",
  Upcoming: "bg-purple-100 text-purple-800",
};

export function StudentCourses() {
  const [search, setSearch] = useState("");
  const filtered = MY_COURSES.filter(c => c.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 glass-card rounded-lg px-3 py-2 max-w-md">
        <IconSearch size={18} className="text-gray-400" />
        <input type="text" placeholder="Search your courses..." value={search} onChange={e => setSearch(e.target.value)}
          className="bg-transparent border-none outline-none text-sm text-gray-800 w-full" style={{ fontFamily: "Inter" }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map(c => (
          <div key={c.id} className="glass-card rounded-xl p-5 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <span className={`px-2 py-1 text-xs font-medium rounded ${STATUS_COLORS[c.status]}`}>{c.status}</span>
              <span className="text-xs text-gray-500">{c.completed}/{c.lessons} lessons</span>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">{c.title}</h3>
            <p className="text-xs text-gray-500 mb-3">by {c.instructor}</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="h-2 rounded-full transition-all" style={{ width: `${c.progress}%`, background: c.progress === 100 ? "#43e97b" : "#f4911a" }} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold" style={{ color: c.progress === 100 ? "#43e97b" : "#f4911a" }}>{c.progress}%</span>
              {c.progress < 100 && (
                <button className="flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700">
                  <IconPlayerPlay size={14} /> Continue
                </button>
              )}
              {c.progress === 100 && (
                <button className="flex items-center gap-1 text-xs font-semibold text-green-600">
                  <IconCertificate size={14} /> Certificate
                </button>
              )}
            </div>
            {c.nextLesson !== "—" && (
              <p className="text-xs text-gray-400 mt-2">Next: {c.nextLesson}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function StudentAssignments() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
        <div className="glass-card glass-card-amber rounded-lg p-4">
          <p className="text-sm text-gray-600">Pending</p>
          <p className="text-2xl font-bold text-orange-600">{MY_ASSIGNMENTS.filter(a => a.status === "Pending").length}</p>
        </div>
        <div className="glass-card glass-card-green rounded-lg p-4">
          <p className="text-sm text-gray-600">Graded</p>
          <p className="text-2xl font-bold text-green-600">{MY_ASSIGNMENTS.filter(a => a.status === "Graded").length}</p>
        </div>
        <div className="glass-card glass-card-purple rounded-lg p-4">
          <p className="text-sm text-gray-600">Upcoming</p>
          <p className="text-2xl font-bold text-purple-600">{MY_ASSIGNMENTS.filter(a => a.status === "Upcoming").length}</p>
        </div>
      </div>
      <div className="glass-card rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200/30">
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Assignment</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Course</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Due Date</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Grade</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {MY_ASSIGNMENTS.map(a => (
              <tr key={a.id} className="border-b border-gray-100/50 hover:bg-gray-50/50">
                <td className="px-5 py-3.5 text-sm font-medium text-gray-900">{a.title}</td>
                <td className="px-5 py-3.5 text-sm text-gray-700">{a.course}</td>
                <td className="px-5 py-3.5 text-sm text-gray-700">{a.due}</td>
                <td className="px-5 py-3.5 text-sm font-semibold text-gray-800">{a.grade}</td>
                <td className="px-5 py-3.5"><span className={`px-2 py-1 text-xs font-medium rounded ${STATUS_COLORS[a.status]}`}>{a.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function StudentGrades() {
  return (
    <div className="space-y-4">
      <div className="glass-card rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200/30">
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Course</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Quiz Avg</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Assignment Avg</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Overall</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Class Rank</th>
            </tr>
          </thead>
          <tbody>
            {MY_GRADES.map((g, i) => (
              <tr key={i} className="border-b border-gray-100/50 hover:bg-gray-50/50">
                <td className="px-5 py-3.5 text-sm font-medium text-gray-900">{g.course}</td>
                <td className="px-5 py-3.5 text-sm text-gray-700">{g.quizAvg}</td>
                <td className="px-5 py-3.5 text-sm text-gray-700">{g.assignmentAvg}</td>
                <td className="px-5 py-3.5 text-sm font-bold text-gray-800">{g.overall}</td>
                <td className="px-5 py-3.5 text-sm text-gray-700">{g.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
