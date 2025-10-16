import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import FeatureCard from '../../components/cards/FeatureCards';
import AssessmentCard from '../../components/cards/AssessmentCard';

const Assessment = () => {

    const [assessments, setAssessments] = useState([]);
    
        useEffect(() => {
            fetch("assessments.json")
                .then(res => res.json())
                .then(data => setAssessments(data))
        }, []);

        console.log(assessments)
    return (
         <div>
            <NavBar></NavBar>
            
            <div className="min-h-[850px] p-16 bg-[#E1ECFF] rounded-lg mt-16">

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 '>
                  {
                    assessments.map((assessment,idx) => <AssessmentCard key={idx} assessment={assessment}></AssessmentCard>)
                  }
                </div>
            </div>
        </div>
    );
};

export default Assessment;