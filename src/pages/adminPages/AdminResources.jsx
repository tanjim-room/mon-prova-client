import React, { useEffect, useState } from 'react';

const AdminResources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch('/tests.json')
      .then(res => res.json())
      .then(data => setResources(data || []))
      .catch(() => setResources([]));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-medium mb-4">Manage Resources</h2>
      {resources.length === 0 && <p>No resources found.</p>}
      <div className="space-y-3">
        {resources.map((r, idx) => (
          <div key={idx} className="p-3 border rounded flex justify-between items-center">
            <div>
              <div className="font-semibold">{r.title || r.name || 'Untitled'}</div>
              <div className="text-sm text-gray-600">{r.description || ''}</div>
            </div>
            <div className="flex gap-2">
              <button className="px-2 py-1 border rounded">Edit</button>
              <button className="px-2 py-1 border rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminResources;
