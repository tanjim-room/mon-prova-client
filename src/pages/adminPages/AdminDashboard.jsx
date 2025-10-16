import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/admin/doctors" className="p-4 border rounded hover:shadow">Manage Doctors</Link>
        <Link to="/admin/resources" className="p-4 border rounded hover:shadow">Manage Resources</Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
