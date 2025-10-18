import { useState } from "react";
import Logo from "../components/Logo";
import Button from "../components/buttons/Button";
import Lottie from "lottie-react";
import Doctor from "../../public/Online Doctor.json";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ResetPass = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "ইমেইল দিন";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "সঠিক ইমেইল ঠিকানা দিন";
    }

    // if (!newPassword.trim()) {
    //   newErrors.newPassword = "নতুন পাসওয়ার্ড দিন";
    // } else if (newPassword.length < 6) {
    //   newErrors.newPassword = "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে";
    // }

    // if (confirmPassword !== newPassword) {
    //   newErrors.confirmPassword = "পাসওয়ার্ড মেলে নি";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleReset = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // ✅ Simulate API call or email sending
      Swal.fire({
        icon: "success",
        title: "পাসওয়ার্ড রিসেট ইমেইল পাঠানো হয়েছে",
        text: "আপনার ইমেইল ইনবক্স চেক করুন",
        confirmButtonText: "ঠিক আছে",
        confirmButtonColor: "#1998df",
      }).then(() => {
        navigate("/doctorLogin");
      });
    }
  };

  return (
    <div className="min-h-[950px] flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-[850px] grid grid-cols-1 md:grid-cols-2">

        {/* Left Side - Form */}
        <div className="flex flex-col justify-center items-center px-10 py-12">
          <div className='relative flex justify-center mb-4'>
            <Logo />
          </div>

          <h1 className="text-2xl font-semibold py-2">
            পাসওয়ার্ড রিসেট করুন
          </h1>

          <form onSubmit={handleReset} className="mt-8 space-y-4">
            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="আপনার ইমেইল দিন"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`rounded-lg py-2 px-4 w-full border-2 ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>}
            </div>

            {/* New Password */}
            {/* <div>
              <input
                type="password"
                placeholder="নতুন পাসওয়ার্ড দিন"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className={`rounded-lg py-2 px-4 w-full border-2 ${errors.newPassword ? 'border-red-400' : 'border-gray-300'}`}
              />
              {errors.newPassword && <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>}
            </div> */}

            {/* Confirm Password */}
            {/* <div>
              <input
                type="password"
                placeholder="পাসওয়ার্ড পুনরায় দিন"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`rounded-lg py-2 px-4 w-full border-2 ${errors.confirmPassword ? 'border-red-400' : 'border-gray-300'}`}
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div> */}

            {/* Reset Button */}
            <div className='mt-6'>
              <Button text="রিসেট করুন" extraClass="w-full" />
            </div>

            <p className="text-sm text-center mt-4">
              মনে পড়ে গেছে?{" "}
              <Link to='/doctorLogin'>
                <span className="text-[#1998df] hover:underline">
                  লগইন করুন
                </span>
              </Link>
            </p>
          </form>
        </div>

        {/* Right Side - Animation */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-tr from-[#c3e1f1] to-[#76a4f1] p-6">
          <Lottie animationData={Doctor} />
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
