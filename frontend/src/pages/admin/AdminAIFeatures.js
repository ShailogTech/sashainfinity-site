import { useState } from "react";
import {
  IconRobot, IconSubtask, IconBookmarks, IconFlame, IconBrain,
  IconCertificate, IconMessageChatbot, IconToggleRight, IconToggleLeft,
  IconSettings, IconChartBar,
} from "@tabler/icons-react";

const AI_FEATURES = [
  {
    id: "transcription",
    title: "AI Auto-Transcription",
    desc: "Auto-generate subtitles in English and Tamil from uploaded videos",
    icon: <IconSubtask size={22} />,
    color: "#667EEA",
    enabled: true,
    stats: { processed: 124, pending: 3, accuracy: "94%" },
  },
  {
    id: "chaptering",
    title: "Automated Chaptering",
    desc: "AI analyzes videos to create chapter markers automatically",
    icon: <IconBookmarks size={22} />,
    color: "#43e97b",
    enabled: true,
    stats: { processed: 98, pending: 5, accuracy: "89%" },
  },
  {
    id: "resource_extract",
    title: "Resource Extraction",
    desc: "Detect books, websites, tools mentioned in lessons and auto-link them",
    icon: <IconBrain size={22} />,
    color: "#f4911a",
    enabled: false,
    stats: { processed: 0, pending: 0, accuracy: "—" },
  },
  {
    id: "edusearch",
    title: "EduSearch — Deep Search",
    desc: "Find exact timestamps in videos where topics are explained",
    icon: <IconMessageChatbot size={22} />,
    color: "#4facfe",
    enabled: true,
    stats: { queries: 2840, avgTime: "0.3s", hitRate: "87%" },
  },
  {
    id: "wellness",
    title: "Wellness Monitoring",
    desc: "Detect burnout patterns and suggest breaks to students",
    icon: <IconFlame size={22} />,
    color: "#f5576c",
    enabled: true,
    stats: { alerts: 42, breaks: 28, satisfaction: "92%" },
  },
  {
    id: "ai_tutor",
    title: "Agentic AI Tutor",
    desc: "Step-by-step guided tutoring — doesn't give direct answers",
    icon: <IconRobot size={22} />,
    color: "#764BA2",
    enabled: false,
    stats: { sessions: 0, pending: 0, accuracy: "—" },
  },
  {
    id: "blockchain_certs",
    title: "Blockchain Credentials",
    desc: "Issue NFT-style verifiable certificates on blockchain",
    icon: <IconCertificate size={22} />,
    color: "#38f9d7",
    enabled: false,
    stats: { issued: 0, verified: 0, accuracy: "—" },
  },
  {
    id: "heatmap",
    title: "Video Heatmap Analytics",
    desc: "Show where students drop off, rewatch, or get confused in videos",
    icon: <IconChartBar size={22} />,
    color: "#667EEA",
    enabled: true,
    stats: { videos: 67, insights: 340, avgDropoff: "42%" },
  },
];

export default function AdminAIFeatures() {
  const [features, setFeatures] = useState(AI_FEATURES);

  const toggle = (id) => {
    setFeatures(prev => prev.map(f => f.id === id ? { ...f, enabled: !f.enabled } : f));
  };

  const enabledCount = features.filter(f => f.enabled).length;

  return (
    <div className="space-y-5">
      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-card glass-card-blue rounded-xl p-5">
          <p className="text-sm text-gray-600">Total AI Features</p>
          <p className="text-3xl font-bold text-gray-800">{features.length}</p>
        </div>
        <div className="glass-card glass-card-green rounded-xl p-5">
          <p className="text-sm text-gray-600">Active</p>
          <p className="text-3xl font-bold text-green-600">{enabledCount}</p>
        </div>
        <div className="glass-card glass-card-rose rounded-xl p-5">
          <p className="text-sm text-gray-600">Coming Soon</p>
          <p className="text-3xl font-bold text-gray-400">{features.length - enabledCount}</p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((f) => (
          <div key={f.id} className={`glass-card rounded-xl p-5 transition-all duration-300 ${f.enabled ? "" : "opacity-60"}`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div style={{ background: `${f.color}15`, color: f.color, padding: 10, borderRadius: 12, border: `1px solid ${f.color}20` }}>
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{f.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{f.desc}</p>
                </div>
              </div>
              <button onClick={() => toggle(f.id)} className="shrink-0 ml-2" title={f.enabled ? "Disable" : "Enable"}>
                {f.enabled
                  ? <IconToggleRight size={32} className="text-green-500" />
                  : <IconToggleLeft size={32} className="text-gray-300" />
                }
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-4 mt-3 pt-3 border-t border-gray-100/50">
              {Object.entries(f.stats).map(([key, val]) => (
                <div key={key}>
                  <p className="text-lg font-bold text-gray-800">{val}</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wide">{key.replace(/([A-Z])/g, " $1")}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            {f.enabled && (
              <div className="flex gap-2 mt-3">
                <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all">
                  <IconSettings size={14} /> Configure
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all">
                  <IconChartBar size={14} /> Analytics
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
