import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import { Link } from 'react-router-dom';

const NavBarDoctor = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "অ্যাপয়েন্টমেন্ট", href: "/appointmentDoctor" },
        { name: "শিডিউল", href: "/schedule" },
        { name: "ইনকাম", href: "/income" },
        { name: "সাহায্য", href: "/doctorHelp" },
        { name: "প্রোফাইল", href: "/doctorProfile" },
        { name: "লগ আউট", href: "/" }

    ];

    return (
        <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50 px-0">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg shadow-lg flex justify-between items-center px-16 py-3">

                {/* MonProva Logo */}
                <motion.a
                    href="/"
                    className="text-2xl font-bold text-white drop-shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Link to='/doctorDashboard'>
                        <Logo></Logo>
                    </Link>

                </motion.a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-white font-medium">
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            className="relative group cursor-pointer text-[#76a4f1]"
                        >
                            <Link to={link.href}>{link.name}</Link>

                            {/* Underline Animation */}
                            <motion.span
                                className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#76a4f1] group-hover:w-full"
                                transition={{ duration: 0.3 }}
                            ></motion.span>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Toggle Menu */}
                <div className="md:hidden">
                    {open ? (
                        <X className="w-7 h-7 text-white cursor-pointer" onClick={() => setOpen(false)} />
                    ) : (
                        <Menu className="w-7 h-7 text-white cursor-pointer" onClick={() => setOpen(true)} />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg mt-2 p-4 text-white"
                >
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="block hover:text-blue-300" onClick={() => setOpen(false)}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </nav>
    );
};

export default NavBarDoctor;