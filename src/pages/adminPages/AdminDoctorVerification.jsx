import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AdminDoctorVerification = () => {
  const { doctorID } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetch('/doctorDashboard.json')
      .then(res => res.json())
      .then(data => {
        const found = (data || []).find(d => String(d.id) === String(doctorID) || String(d.id) === doctorID);
        setDoctor(found || null);
      })
      .catch(() => setDoctor(null));
  }, [doctorID]);

  function handleDecision(decision) {
    // For now we'll just log and navigate back. Integration with backend is a follow-up.
    console.log(`Doctor ${doctorID} decision:`, decision);
    // Show a simple confirmation then return
    navigate('/admin/doctors');
  }

  if (!doctor) return <div className="p-6">Doctor not found.</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-medium mb-4">Verify Doctor</h2>
      <div className="p-4 border rounded">
        <div className="mb-2"><strong>Name:</strong> {doctor.name}</div>
        <div className="mb-2"><strong>Email:</strong> {doctor.email}</div>
        <div className="mb-2"><strong>Bio:</strong> {doctor.bio || 'N/A'}</div>
        <div className="mt-4 flex gap-3">
          <button onClick={() => handleDecision('approve')} className="px-4 py-2 bg-green-600 text-white rounded">Approve</button>
          <button onClick={() => handleDecision('decline')} className="px-4 py-2 bg-red-600 text-white rounded">Decline</button>
        </div>
      </div>
    </div>
  );
}

export default AdminDoctorVerification;
