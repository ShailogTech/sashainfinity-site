import { useState } from "react";
import {
  IconPlayerPlay, IconPlayerPause, IconCheck, IconX, IconCode,
  IconChevronRight, IconChevronLeft, IconBook, IconClock, IconFlame,
  IconMaximize, IconMinimize,
} from "@tabler/icons-react";

const LESSON_DATA = {
  course: "React Mastery",
  title: "React Hooks Deep Dive",
  duration: "5:24",
  chapters: [
    { time: "0:00", title: "Introduction", done: true },
    { time: "1:12", title: "What are Hooks?", done: true },
    { time: "2:45", title: "useState Explained", done: false },
    { time: "4:10", title: "useEffect Basics", done: false },
    { time: "5:00", title: "Summary", done: false },
  ],
  resources: [
    { title: "React Docs — Hooks", url: "#", type: "docs" },
    { title: "MDN: Array Destructuring", url: "#", type: "docs" },
    { title: "Hooks Cheat Sheet (PDF)", url: "#", type: "pdf" },
  ],
  challenge: {
    question: "What does useState return?",
    options: [
      "A single state value",
      "An array with [state, setState]",
      "An object with {state, dispatch}",
      "A promise",
    ],
    correct: 1,
  },
};

const CODE_TEMPLATE = `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// Try modifying the initial state!
// Add a decrement button below.
`;

export default function LessonViewer() {
  const [playing, setPlaying] = useState(false);
  const [showChallenge, setShowChallenge] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [sandboxOpen, setSandboxOpen] = useState(true);
  const [code, setCode] = useState(CODE_TEMPLATE);
  const [currentChapter, setCurrentChapter] = useState(2);

  const isCorrect = selectedAnswer === LESSON_DATA.challenge.correct;

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div style={{ background: "rgba(26,26,46,0.97)", backdropFilter: "blur(20px)", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50 }}>
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-white transition-colors">
            <IconChevronLeft size={20} />
          </button>
          <div>
            <p className="text-xs text-gray-400">{LESSON_DATA.course}</p>
            <p className="text-sm font-semibold text-white">{LESSON_DATA.title}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <IconClock size={14} /> {LESSON_DATA.duration}
          </div>
          <div className="flex items-center gap-1 text-xs text-orange-400">
            <IconFlame size={14} /> Nano Lesson
          </div>
          <button onClick={() => setSandboxOpen(!sandboxOpen)} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all" style={{ background: sandboxOpen ? "rgba(102,126,234,0.2)" : "rgba(255,255,255,0.1)", color: sandboxOpen ? "#667EEA" : "#9ca3af" }}>
            <IconCode size={14} /> Code Sandbox
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex" style={{ height: "calc(100vh - 52px)" }}>
        {/* Left — Video + Chapters */}
        <div className={`flex flex-col ${sandboxOpen ? "w-3/5" : "w-full"} transition-all duration-300`}>
          {/* Video Player */}
          <div className="relative bg-gray-900 flex items-center justify-center" style={{ height: sandboxOpen ? "55%" : "65%" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div style={{ width: 280, height: 160, borderRadius: 16, background: "linear-gradient(135deg, rgba(102,126,234,0.3), rgba(244,145,26,0.2))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p className="text-white/50 text-sm">Video Player Area</p>
              </div>
            </div>
            {/* Play/Pause Overlay */}
            <button onClick={() => { setPlaying(!playing); if (playing) setTimeout(() => setShowChallenge(true), 500); }} className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: "rgba(244,145,26,0.9)", boxShadow: "0 4px 20px rgba(244,145,26,0.4)" }}>
              {playing ? <IconPlayerPause size={28} color="#fff" /> : <IconPlayerPlay size={28} color="#fff" style={{ marginLeft: 3 }} />}
            </button>
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
              <div className="h-full bg-orange-500 transition-all" style={{ width: "45%" }} />
            </div>
          </div>

          {/* Chapters + Resources */}
          <div className="flex-1 overflow-y-auto p-5" style={{ background: "#fafafa" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Chapters */}
              <div className="glass-card rounded-xl p-4">
                <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2"><IconBook size={16} /> Chapters</h4>
                <div className="space-y-1">
                  {LESSON_DATA.chapters.map((ch, i) => (
                    <div key={i} onClick={() => setCurrentChapter(i)} className="flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all" style={{ background: i === currentChapter ? "rgba(244,145,26,0.08)" : "transparent" }}>
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: ch.done ? "#43e97b" : i === currentChapter ? "#f4911a" : "#e5e7eb", color: "#fff" }}>
                        {ch.done ? <IconCheck size={12} /> : <span className="text-[9px] font-bold">{i + 1}</span>}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-gray-800">{ch.title}</p>
                      </div>
                      <span className="text-[10px] text-gray-400">{ch.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div className="glass-card glass-card-teal rounded-xl p-4">
                <h4 className="text-sm font-bold text-gray-800 mb-3">AI-Extracted Resources</h4>
                <div className="space-y-2">
                  {LESSON_DATA.resources.map((r, i) => (
                    <a key={i} href={r.url} className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/50 transition-colors">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(80,170,190,0.12)" }}>
                        <i className={`fa-solid ${r.type === "pdf" ? "fa-file-pdf" : "fa-link"}`} style={{ fontSize: 11, color: "#4facfe" }}></i>
                      </div>
                      <p className="text-xs font-medium text-gray-700">{r.title}</p>
                    </a>
                  ))}
                  <p className="text-[10px] text-gray-400 mt-1">Auto-detected from video transcript</p>
                </div>
              </div>
            </div>

            {/* Micro-Challenge */}
            {showChallenge && (
              <div className="glass-card glass-card-amber rounded-xl p-5 mt-4" style={{ border: "2px solid rgba(244,145,26,0.2)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <IconFlame size={18} className="text-orange-500" />
                  <h4 className="text-sm font-bold text-gray-800">Micro-Challenge — 30 seconds</h4>
                </div>
                <p className="text-sm text-gray-700 mb-3">{LESSON_DATA.challenge.question}</p>
                <div className="space-y-2">
                  {LESSON_DATA.challenge.options.map((opt, i) => (
                    <button key={i} onClick={() => { if (!submitted) setSelectedAnswer(i); }}
                      className="w-full text-left p-3 rounded-lg text-sm transition-all"
                      style={{
                        background: submitted && i === LESSON_DATA.challenge.correct ? "rgba(67,233,123,0.12)" : submitted && i === selectedAnswer && !isCorrect ? "rgba(245,87,108,0.12)" : selectedAnswer === i ? "rgba(244,145,26,0.1)" : "rgba(255,255,255,0.5)",
                        border: `1px solid ${submitted && i === LESSON_DATA.challenge.correct ? "rgba(67,233,123,0.3)" : selectedAnswer === i ? "rgba(244,145,26,0.3)" : "rgba(0,0,0,0.06)"}`,
                        color: "#1a1a2e", fontWeight: selectedAnswer === i ? 600 : 400,
                      }}>
                      {opt}
                      {submitted && i === LESSON_DATA.challenge.correct && <IconCheck size={16} className="inline ml-2 text-green-500" />}
                      {submitted && i === selectedAnswer && !isCorrect && i !== LESSON_DATA.challenge.correct && <IconX size={16} className="inline ml-2 text-red-500" />}
                    </button>
                  ))}
                </div>
                {!submitted && selectedAnswer !== null && (
                  <button onClick={() => setSubmitted(true)} className="mt-3 px-6 py-2 bg-orange-500 text-white text-sm font-bold rounded-lg hover:bg-orange-600 transition-all">Submit</button>
                )}
                {submitted && (
                  <div className="mt-3 flex items-center gap-2">
                    {isCorrect
                      ? <p className="text-sm font-semibold text-green-600"><IconCheck size={16} className="inline mr-1" /> Correct! Moving to next section...</p>
                      : <p className="text-sm font-semibold text-red-500"><IconX size={16} className="inline mr-1" /> Not quite — the answer is highlighted above.</p>
                    }
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right — Code Sandbox */}
        {sandboxOpen && (
          <div className="w-2/5 border-l border-gray-200/50 flex flex-col" style={{ background: "#1e1e2e" }}>
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-gray-400 ml-2">Counter.jsx</span>
              </div>
              <button onClick={() => setSandboxOpen(false)} className="text-gray-500 hover:text-gray-300">
                <IconMinimize size={14} />
              </button>
            </div>
            <textarea
              value={code}
              onChange={e => setCode(e.target.value)}
              spellCheck={false}
              className="flex-1 p-4 text-sm leading-relaxed resize-none outline-none"
              style={{
                background: "transparent", color: "#e2e8f0",
                fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
                fontSize: 13, lineHeight: 1.7, tabSize: 2,
              }}
            />
            <div className="px-4 py-3 border-t border-gray-700/50 flex items-center justify-between">
              <div className="flex gap-2">
                <button className="px-4 py-1.5 bg-green-600 text-white text-xs font-bold rounded-lg hover:bg-green-700 transition-all flex items-center gap-1">
                  <IconPlayerPlay size={14} /> Run
                </button>
                <button className="px-3 py-1.5 bg-gray-700 text-gray-300 text-xs font-semibold rounded-lg hover:bg-gray-600 transition-all">Reset</button>
              </div>
              <span className="text-[10px] text-gray-500">Live Code Sandbox</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
