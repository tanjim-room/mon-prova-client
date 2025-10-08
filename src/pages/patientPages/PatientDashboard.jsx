import React, { useEffect, useState } from 'react';
import FeatureCard from '../../components/cards/FeatureCard';
import { div } from 'framer-motion/client';
import Hero from '../../../public/Stressed Woman at work.json';
import NavBar from '../../components/NavBar';
import Lottie from 'lottie-react';

const PatientDashboard = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("patientDashboard.json")
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div>
            <NavBar></NavBar>
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

export default PatientDashboard;