const AdminPlaceholder = ({ title, description }) => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="text-center bg-white rounded-xl p-12 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15),0_4px_10px_-2px_rgba(0,0,0,0.08)] max-w-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-3">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-sm text-gray-400 mt-6">Coming soon.</p>
    </div>
  </div>
);

export default AdminPlaceholder;
