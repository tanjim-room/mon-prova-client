import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import FeatureCard from '../../components/cards/FeatureCards';
import AssessmentCard from '../../components/cards/AssessmentCard';
import Test from '../testPages/Test';

const Assessment = () => {

    const [assessments, setAssessments] = useState([]);
    
        useEffect(() => {
            fetch("assessments.json")
                .then(res => res.json())
                .then(data => setAssessments(data))
        }, []);

        console.log(assessments)
    return (
         <div className='bg-[#EFF7FE] p-4'>
        
            
            <div className="min-h-[850px] p-8 bg-white rounded-md">

                <div className='grid grid-cols-1 gap-6 '>
                  {
                    assessments.map((assessment,idx) => <AssessmentCard key={idx} assessment={assessment}></AssessmentCard>)
                  }
                </div>
                <Test></Test>
            </div>
        </div>
    );
};

export default Assessment;