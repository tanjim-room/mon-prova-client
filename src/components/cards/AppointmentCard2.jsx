import React, { useEffect, useState } from 'react';
import Button from '../buttons/Button';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { div } from 'framer-motion/client';

const MySwal = withReactContent(Swal);

const AppointmentCard2 = ({ appointment }) => {
  const { name, mode, date, slot, appointmentID } = appointment;
  const [sessionLink, setSessionLink] = useState("");

  // Load any saved session link from localStorage
  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem("sessionLinks") || "{}");
    if (savedLinks[appointmentID]) {
      setSessionLink(savedLinks[appointmentID]);
    }
  }, [appointmentID]);

  // Save session link
  const handleSetSessionLink = async () => {
    const { value: link } = await MySwal.fire({
      title: '🔗 সেশন লিঙ্ক দিন',
      input: 'url',
      inputPlaceholder: 'যেমনঃ https://meet.google.com/abc-defg-hij',
      inputValue: sessionLink || "",
      showCancelButton: true,
      cancelButtonText: 'বাতিল',
      confirmButtonText: 'সংরক্ষণ করুন',
      confirmButtonColor: '#16a34a',
      cancelButtonColor: '#6b7280',
      inputValidator: (value) => {
        if (!value) {
          return '⚠️ দয়া করে একটি লিঙ্ক দিন!';
        }
      },
    });

    if (link) {
      // Save link to localStorage
      const savedLinks = JSON.parse(localStorage.getItem("sessionLinks") || "{}");
      savedLinks[appointmentID] = link;
      localStorage.setItem("sessionLinks", JSON.stringify(savedLinks));
      setSessionLink(link);

      await MySwal.fire({
        icon: 'success',
        title: '✅ লিঙ্ক সংরক্ষণ হয়েছে!',
        text: 'সেশন লিঙ্ক সফলভাবে সংরক্ষণ করা হয়েছে।',
        confirmButtonText: 'ঠিক আছে',
        confirmButtonColor: '#16a34a',
      });
    }
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm gap-12">
      <div className="card-body">
        <div className="flex gap-8 items-center">
          <div>
            <h2 className="card-title text-xl">রোগীঃ {name}</h2>
          </div>
        </div>
        <div className="text-start text-lg mt-4">
          <p>মাধ্যমঃ {mode}</p>
          <p>তারিখঃ {date}</p>
          <p>সময়ঃ {slot}</p>

          <div className="mt-4 flex justify-between gap-8 items-center">
            {/* Start Session Button */}
            <div className="w-full">
              {mode === 'online' && sessionLink && (
                <Link to={sessionLink} target="_blank" rel="noopener noreferrer">
                  <Button text="সেশন শুরু করুন" />
                </Link>
              )}
              {mode === 'online' && !sessionLink && (
                <div disabled={true}>
                <Button text="সেশন শুরু করুন"  />
                </div>
              )}
            </div>

            {/* Set Session Link */}
            <div className="w-full" >
              {mode === 'online' && (
                <div onClick={handleSetSessionLink}>
                <Button text="সেশন লিঙ্ক দিন"  />
                </div>
              )}
            </div>

            {/* Details Button */}
            <div className="w-full">
              <Link to={`/appointmentDetailsDoctor/${appointmentID}`}>
                <Button text="বিস্তারিত" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard2;
