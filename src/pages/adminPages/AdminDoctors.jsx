import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// For now use a local JSON file (doctorDashboard.json) in public folder as a data source
const AdminDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('/doctorDashboard.json')
      .then(res => res.json())
      .then(data => setDoctors(data || []))
      .catch(() => setDoctors([]));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-medium mb-4">Doctors</h2>
      <div className="space-y-3">
        {doctors.length === 0 && <p>No doctors found.</p>}
        {doctors.map((d, idx) => (
          <div key={idx} className="p-4 border rounded flex justify-between items-center">
            <div>
              <div className="font-semibold">{d.name || 'Unknown'}</div>
              <div className="text-sm text-gray-600">{d.email || ''}</div>
            </div>
            <div className="flex gap-2">
              <Link to={`/admin/doctor/${d.id || idx}`} className="px-3 py-1 bg-blue-600 text-white rounded">View</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDoctors;
