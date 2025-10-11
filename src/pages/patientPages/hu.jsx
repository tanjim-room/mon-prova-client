import React, { useState } from 'react';

const BookingSlots = () => {
  // State for selected date and time
  const [selectedDate, setSelectedDate] = useState(0); // Index of selected date
  const [selectedTime, setSelectedTime] = useState(null); // Selected time slot
  
  // Generate dates for the next 7 days
  const generateDates = () => {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const today = new Date();
    const dates = [];
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        day: days[date.getDay()],
        date: date.getDate(),
        fullDate: date.toISOString().split('T')[0]
      });
    }
    
    return dates;
  };
  
  // Generate time slots from 9:00 AM to 5:30 PM
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 17 && minute > 0) break; // Stop after 5:30 PM
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(time);
      }
    }
    return slots;
  };
  
  const dates = generateDates();
  const timeSlots = generateTimeSlots();
  
  // Handle booking confirmation
  const handleBooking = () => {
    if (selectedTime === null) {
      alert('Please select a time slot');
      return;
    }
    
    const selectedDateObj = dates[selectedDate];
    alert(`Appointment booked!\nDate: ${selectedDateObj.day} ${selectedDateObj.date}\nTime: ${timeSlots[selectedTime]}`);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 py-4">
          <h1 className="text-white text-xl font-bold text-center">Booking slots</h1>
        </div>
        
        {/* Date Selection */}
        <div className="p-4 border-b">
          <div className="flex justify-between overflow-x-auto pb-2">
            {dates.map((date, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(index)}
                className={`flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-200 flex-shrink-0 ${
                  selectedDate === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xs font-medium">{date.day}</span>
                <span className="text-lg font-bold">{date.date}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Time Slots */}
        <div className="p-4">
          <h2 className="text-gray-700 font-medium mb-3">Available times</h2>
          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(index)}
                className={`py-2 px-3 rounded-lg transition-colors duration-200 ${
                  selectedTime === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
        
        {/* Booking Button */}
        <div className="p-4">
          <button
            onClick={handleBooking}
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Book an appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSlots;