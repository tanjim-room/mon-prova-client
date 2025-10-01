import React, { useEffect, useState } from 'react';
import FeatureCard from '../components/FeatureCard';
import { div } from 'framer-motion/client';
import NavBar from '../components/NavBar';

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

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 '>
                    {
                        cards.map((card, idx) => <FeatureCard key={idx} card={card}></FeatureCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PatientDashboard;