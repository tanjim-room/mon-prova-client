import React from 'react';

const TwoLoader = async () => {
    
  const doctorsPromise = fetch("/doctorInfo.json");
  const slotsPromise = fetch("/timeSlot.json");

  // Wait for both to complete
  const [doctorsRes, slotsRes] = await Promise.all([
    doctorsPromise,
    slotsPromise,
  ]);

  // Parse JSON responses
  const [doctors, slots] = await Promise.all([
    doctorsRes.json(),
    slotsRes.json(),
  ]);

  // Return both as a single object
  return { doctors, slots };

};

export default TwoLoader;