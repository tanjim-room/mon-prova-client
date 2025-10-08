import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import DoctorCard from '../../components/cards/DoctorCard';
const DoctorList = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch("doctorInfo.json")
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[]);
    console.log(doctors)
    return (
       <div>
            <NavBar></NavBar>
            
            <div className="min-h-[850px] p-16 bg-[#E1ECFF] rounded-lg mt-16">

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 '>
                  {
                    doctors.map((doctor) => <DoctorCard key={doctor.doctorID} doctor={doctor}></DoctorCard>)
                  }
                </div>
            </div>
        </div>
    );
};

export default DoctorList;