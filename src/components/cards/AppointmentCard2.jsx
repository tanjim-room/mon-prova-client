import React, { useEffect, useState } from 'react';
import Button from '../buttons/Button';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { div } from 'framer-motion/client';
import { FaVideo } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";

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
    // <div className="card card-side bg-base-100 shadow-sm gap-12">
    //   <div className="card-body">
    //     <div className="flex gap-8 items-center">
    //       <div>
    //         <h2 className="card-title text-xl">রোগীঃ {name}</h2>
    //       </div>
    //     </div>
    //     <div className="text-start text-lg mt-4">
    //       <p>মাধ্যমঃ {mode}</p>
    //       <p>তারিখঃ {date}</p>
    //       <p>সময়ঃ {slot}</p>

    //       <div className="mt-4 flex justify-between gap-8 items-center">
    //         {/* Start Session Button */}
    //         <div className="w-full">
    //           {mode === 'online' && sessionLink && (
    //             <Link to={sessionLink} target="_blank" rel="noopener noreferrer">
    //               <Button text="সেশন শুরু করুন" />
    //             </Link>
    //           )}
    //           {mode === 'online' && !sessionLink && (
    //             <div disabled={true}>
    //             <Button text="সেশন শুরু করুন"  />
    //             </div>
    //           )}
    //         </div>

    //         {/* Set Session Link */}
    //         <div className="w-full" >
    //           {mode === 'online' && (
    //             <div onClick={handleSetSessionLink}>
    //             <Button text="সেশন লিঙ্ক দিন"  />
    //             </div>
    //           )}
    //         </div>

    //         {/* Details Button */}
    //         <div className="w-full">
    //           <Link to={`/appointmentDetailsDoctor/${appointmentID}`}>
    //             <Button text="বিস্তারিত" />
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='m-4 border rounded-md'>
      <div className="card card-side bg-base-100 shadow-sm gap-12">
        <div className="card-body">
          <div className='flex gap-8 items-center'>
            {/* <div>
                                <img src={image} alt="" className='w-24 h-24 object-cover rounded-full border' />
                            </div> */}
            <div className='space-y-2'>
              <h2 className="card-title text-xl ">রোগীর নামঃ {name}</h2>
              {/* <p className='text-lg text-left text-gray-800'>{speciality}</p> */}
            </div>
          </div>
          <div className='text-start text-lg mt-4 space-y-2'>

            <div className='space-y-2 mb-4'>
              <p>তারিখঃ {date}</p>
              <p>সময়ঃ  {slot}</p>
              <p className='bg-[#007AF5] rounded-md inline-block px-2 py-1 text-white'>মাধ্যমঃ {mode}</p>
            </div>
            <div className='flex justify-between gap-8'>

              <div className='w-full flex justify-between gap-4'>
                {/* Start Session Button */}
                <div className="w-full">
                  {mode === 'online' && sessionLink && (
                    <Link to={sessionLink} target="_blank" rel="noopener noreferrer">
                      <button

                        className='w-full flex-1 bg-[#007AF5] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition'
                      >
                        সেশন শুরু করুন
                      </button>
                    </Link>
                  )}
                  {mode === 'online' && !sessionLink && (
                    <div disabled={true}>
                      <button

                        className='w-full flex-1 bg-[#007AF5] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition'
                      >
                        সেশন শুরু করুন
                      </button>
                    </div>
                  )}
                </div>

                {/* Set Session Link */}
                <div className="w-full" >
                  {mode === 'online' && (
                    <div onClick={handleSetSessionLink}>
                      <button

                        className='flex-1 w-full bg-[#E8594A] text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600 transition'
                      >
                        সেশন লিঙ্ক দিন
                      </button>
                    </div>
                  )}
                </div>

                {/* Details Button */}
                <div className="w-full">
                  <Link to={`/doctorDashboard/appointmentDetailsDoctor/${appointmentID}`}>
                    <button

                      className='flex-1 w-full bg-[#007AF5] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition'
                    >
                      বিস্তারিত দেখুন
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppointmentCard2;
