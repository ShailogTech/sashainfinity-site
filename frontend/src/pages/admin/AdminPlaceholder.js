const AdminPlaceholder = ({ title, description }) => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="text-center glass-card rounded-xl p-12 max-w-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-3">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-sm text-gray-400 mt-6">Coming soon.</p>
    </div>
  </div>
);

export default AdminPlaceholder;
