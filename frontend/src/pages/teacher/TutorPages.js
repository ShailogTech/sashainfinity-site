import { useState } from "react";
import { IconSearch, IconChartBar, IconAlertTriangle } from "@tabler/icons-react";

const STUDENTS = [
  { name: "Arjun Kumar", topics: { hooks: "green", state: "green", effects: "yellow", routing: "red", forms: "yellow" }, engagement: 92, risk: false },
  { name: "Priya Shah", topics: { hooks: "yellow", state: "green", effects: "red", routing: "red", forms: "green" }, engagement: 68, risk: true },
  { name: "Rahul Verma", topics: { hooks: "green", state: "green", effects: "green", routing: "green", forms: "green" }, engagement: 95, risk: false },
  { name: "Meera Iyer", topics: { hooks: "red", state: "yellow", effects: "red", routing: "red", forms: "yellow" }, engagement: 42, risk: true },
  { name: "Karthik Nair", topics: { hooks: "green", state: "green", effects: "yellow", routing: "yellow", forms: "green" }, engagement: 88, risk: false },
  { name: "Divya Menon", topics: { hooks: "green", state: "yellow", effects: "green", routing: "green", forms: "yellow" }, engagement: 79, risk: false },
  { name: "Arun Prasad", topics: { hooks: "yellow", state: "red", effects: "yellow", routing: "yellow", forms: "red" }, engagement: 55, risk: true },
  { name: "Sneha Raj", topics: { hooks: "green", state: "green", effects: "green", routing: "yellow", forms: "green" }, engagement: 91, risk: false },
];

const TOPIC_KEYS = ["hooks", "state", "effects", "routing", "forms"];
const TOPIC_LABELS = { hooks: "Hooks", state: "State Mgmt", effects: "Side Effects", routing: "Routing", forms: "Forms" };
const STATUS_COLORS = { green: "#43e97b", yellow: "#f4911a", red: "#f5576c" };

const CLASSES = [
  { id: 1, title: "React Mastery — Batch A", students: 42, nextClass: "Today, 6:00 PM", progress: 68, status: "Active" },
  { id: 2, title: "Python Basics — Batch B", students: 37, nextClass: "Tomorrow, 10:00 AM", progress: 45, status: "Active" },
  { id: 3, title: "UI/UX Fundamentals", students: 24, nextClass: "Fri, 4:30 PM", progress: 82, status: "Active" },
  { id: 4, title: "Web Dev Bootcamp", students: 55, nextClass: "—", progress: 100, status: "Completed" },
];

export function TutorClasses() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CLASSES.map(c => (
          <div key={c.id} className="glass-card rounded-xl p-5 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${c.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}`}>{c.status}</span>
              <span className="text-xs text-gray-500">{c.students} students</span>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">{c.title}</h3>
            <p className="text-xs text-gray-500 mb-3">Next class: {c.nextClass}</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
              <div className="h-2 rounded-full transition-all" style={{ width: `${c.progress}%`, background: c.progress === 100 ? "#43e97b" : "#667EEA" }} />
            </div>
            <p className="text-[11px] font-semibold" style={{ color: c.progress === 100 ? "#43e97b" : "#667EEA" }}>{c.progress}% syllabus covered</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TutorStudents() {
  const [search, setSearch] = useState("");
  const filtered = STUDENTS.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));
  const atRisk = STUDENTS.filter(s => s.risk).length;

  return (
    <div className="space-y-4">
      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-card glass-card-blue rounded-lg p-4">
          <p className="text-sm text-gray-600">Total Students</p>
          <p className="text-2xl font-bold text-gray-800">{STUDENTS.length}</p>
        </div>
        <div className="glass-card glass-card-rose rounded-lg p-4">
          <p className="text-sm text-gray-600">At Risk</p>
          <p className="text-2xl font-bold text-red-500">{atRisk}</p>
        </div>
        <div className="glass-card glass-card-green rounded-lg p-4">
          <p className="text-sm text-gray-600">Avg Engagement</p>
          <p className="text-2xl font-bold text-green-600">{Math.round(STUDENTS.reduce((a, s) => a + s.engagement, 0) / STUDENTS.length)}%</p>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 glass-card rounded-lg px-3 py-2 max-w-md">
        <IconSearch size={18} className="text-gray-400" />
        <input type="text" placeholder="Search students..." value={search} onChange={e => setSearch(e.target.value)}
          className="bg-transparent border-none outline-none text-sm text-gray-800 w-full" style={{ fontFamily: "Inter" }} />
      </div>

      {/* Understanding Heatmap */}
      <div className="glass-card rounded-xl p-5">
        <div className="flex items-center gap-2 mb-1">
          <IconChartBar size={18} className="text-gray-600" />
          <h4 className="text-sm font-bold text-gray-800">Understanding Heatmap</h4>
        </div>
        <p className="text-[11px] text-gray-500 mb-4">Green = passed · Yellow = attended but pending · Red = needs intervention</p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left px-3 py-2 text-xs font-semibold text-gray-500">Student</th>
                {TOPIC_KEYS.map(k => (
                  <th key={k} className="text-center px-3 py-2 text-xs font-semibold text-gray-500">{TOPIC_LABELS[k]}</th>
                ))}
                <th className="text-center px-3 py-2 text-xs font-semibold text-gray-500">Engagement</th>
                <th className="text-center px-3 py-2 text-xs font-semibold text-gray-500">Risk</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s, i) => (
                <tr key={i} className="border-t border-gray-100/50">
                  <td className="px-3 py-2.5 text-sm font-medium text-gray-900">{s.name}</td>
                  {TOPIC_KEYS.map(k => (
                    <td key={k} className="px-3 py-2.5 text-center">
                      <div className="w-7 h-7 rounded-lg mx-auto" style={{ background: `${STATUS_COLORS[s.topics[k]]}25`, border: `2px solid ${STATUS_COLORS[s.topics[k]]}` }} />
                    </td>
                  ))}
                  <td className="px-3 py-2.5 text-center">
                    <span className="text-xs font-bold" style={{ color: s.engagement > 80 ? "#43e97b" : s.engagement > 60 ? "#f4911a" : "#f5576c" }}>{s.engagement}%</span>
                  </td>
                  <td className="px-3 py-2.5 text-center">
                    {s.risk && <IconAlertTriangle size={16} className="text-red-500 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex gap-4 mt-3 text-[10px] text-gray-500">
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded" style={{ background: "#43e97b40", border: "2px solid #43e97b" }} /> Passed</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded" style={{ background: "#f4911a40", border: "2px solid #f4911a" }} /> Pending</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded" style={{ background: "#f5576c40", border: "2px solid #f5576c" }} /> Needs Help</span>
        </div>
      </div>
    </div>
  );
}
