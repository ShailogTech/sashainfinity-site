import { useState } from "react";

const CARD = "glass-card rounded-xl p-6";

const AdminSettings = () => {
  const [form, setForm] = useState({
    siteName: "Sashainfinity",
    supportEmail: "support@sashainfinity.com",
    defaultCurrency: "INR",
    timezone: "Asia/Kolkata",
    language: "en-IN"
  });

  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@sashainfinity.com"
  });

  const [notifications, setNotifications] = useState({
    newEnrollments: true,
    blogComments: true,
    weeklyReport: false,
    paymentFailures: true
  });

  const [saved, setSaved] = useState("");

  const onSave = (section) => {
    setSaved(section);
    setTimeout(() => setSaved(""), 2200);
  };

  const input = "w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm";
  const label = "block text-xs font-semibold text-gray-600 mb-1";

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* General */}
      <div className={CARD}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-800">General</h3>
            <p className="text-sm text-gray-500">Site-wide configuration.</p>
          </div>
          {saved === "general" && <span className="text-sm text-green-600 font-medium">Saved ✓</span>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={label}>Site Name</label>
            <input className={input} value={form.siteName} onChange={(e) => setForm({ ...form, siteName: e.target.value })} />
          </div>
          <div>
            <label className={label}>Support Email</label>
            <input className={input} type="email" value={form.supportEmail} onChange={(e) => setForm({ ...form, supportEmail: e.target.value })} />
          </div>
          <div>
            <label className={label}>Default Currency</label>
            <select className={input} value={form.defaultCurrency} onChange={(e) => setForm({ ...form, defaultCurrency: e.target.value })}>
              <option value="INR">INR — Indian Rupee (₹)</option>
              <option value="USD">USD — US Dollar ($)</option>
              <option value="EUR">EUR — Euro (€)</option>
            </select>
          </div>
          <div>
            <label className={label}>Timezone</label>
            <select className={input} value={form.timezone} onChange={(e) => setForm({ ...form, timezone: e.target.value })}>
              <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
              <option value="UTC">UTC</option>
              <option value="America/New_York">America/New_York</option>
            </select>
          </div>
          <div>
            <label className={label}>Language</label>
            <select className={input} value={form.language} onChange={(e) => setForm({ ...form, language: e.target.value })}>
              <option value="en-IN">English (India)</option>
              <option value="en-US">English (US)</option>
              <option value="ta-IN">Tamil</option>
            </select>
          </div>
        </div>
        <div className="mt-5 text-right">
          <button onClick={() => onSave("general")} className="px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            Save General
          </button>
        </div>
      </div>

      {/* Profile */}
      <div className={CARD}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-800">Admin Profile</h3>
            <p className="text-sm text-gray-500">Your account details.</p>
          </div>
          {saved === "profile" && <span className="text-sm text-green-600 font-medium">Saved ✓</span>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={label}>Display Name</label>
            <input className={input} value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
          </div>
          <div>
            <label className={label}>Email</label>
            <input className={input} type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
          </div>
        </div>
        <div className="mt-5 text-right">
          <button onClick={() => onSave("profile")} className="px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            Save Profile
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className={CARD}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-800">Notifications</h3>
            <p className="text-sm text-gray-500">Control what you get emailed about.</p>
          </div>
          {saved === "notifications" && <span className="text-sm text-green-600 font-medium">Saved ✓</span>}
        </div>
        <div className="space-y-3">
          {[
            { key: "newEnrollments", label: "New course enrollments" },
            { key: "blogComments", label: "New blog comments" },
            { key: "weeklyReport", label: "Weekly summary report" },
            { key: "paymentFailures", label: "Payment failures" }
          ].map((row) => (
            <label key={row.key} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer">
              <span className="text-sm text-gray-700">{row.label}</span>
              <input
                type="checkbox"
                className="h-4 w-4 accent-indigo-600"
                checked={notifications[row.key]}
                onChange={(e) => setNotifications({ ...notifications, [row.key]: e.target.checked })}
              />
            </label>
          ))}
        </div>
        <div className="mt-5 text-right">
          <button onClick={() => onSave("notifications")} className="px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            Save Notifications
          </button>
        </div>
      </div>

      {/* Danger zone */}
      <div className={`${CARD} border-l-4 border-red-400`}>
        <h3 className="text-lg font-bold text-gray-800 mb-1">Danger Zone</h3>
        <p className="text-sm text-gray-500 mb-4">Irreversible actions — proceed with care.</p>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
            Clear all sessions
          </button>
          <button className="px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
            Reset demo data
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
