
import React, { useEffect, useState } from 'react';
import FeatureCard from '../../components/cards/FeatureCards';
import { div } from 'framer-motion/client';

import Lottie from 'lottie-react';
import NavBarDoctor from '../../components/NavBarDoctor';

const DoctorDashboard = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("doctorDashboard.json")
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div>
            <NavBarDoctor></NavBarDoctor>
            <div className="min-h-[850px] p-16 bg-[#E1ECFF] rounded-lg mt-16">
                {/* <div className='hidden md:flex items-center justify-between object-cover py-8'>
                    <Lottie animationData={Hero}>

                    </Lottie>
                    <div>
                        <h1>আপনার মনের যত্ন নিন</h1>
                    </div>
                </div> */}


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-8'>
                    {
                        cards.map((card, idx) => <FeatureCard key={idx} card={card}></FeatureCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DoctorDashboard;