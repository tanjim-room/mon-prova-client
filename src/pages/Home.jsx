import React from 'react';
import Banner from '../components/Banner';
import SupportSection from '../components/SupportSection';
import Footer from '../components/Footer';

const Home = () => {
        return (
            <div className="home-full-bleed m-0 p-0 w-full">
                <Banner />
                <SupportSection />
                <Footer />
            </div>
        );
};

export default Home;