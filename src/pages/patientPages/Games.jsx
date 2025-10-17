import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Button from '../../components/buttons/Button';
import Logo from '../../components/Logo';

const Games = () => {
    return (
        <div className='bg-[#EFF7FE] p-4'>


            <div className="min-h-[850px] p-8 bg-white rounded-md">

                <div className=''>
                    <div className="">
                        {/* <div className='w-full flex justify-center items-center my-8'>
            <Logo></Logo>
        </div> */}

                        <h2 className='text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE] border'>
                            গেমস সমুহ
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                            {/* Internal Games */}
                            <div className="card shadow-lg  border">
                                <figure><img src="https://i.ibb.co.com/TBcH0DY3/breathing.png" className='w-36 h-36 object-cover' alt="Bubble Calm" /></figure>
                                <div className="card-body">
                                    <h2 className="text-2xl font-semibold text-center">Bubble Calm</h2>
                                    {/* <p>Relax and pop bubbles in a calming environment.</p> */}
                                    <Link to="/games/bubble-calm" >
                                        <Button text="গেমস খেলুন"></Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="card shadow-lg  border">
                                <figure><img src="https://i.ibb.co.com/KjypTt8m/brush.png" className='w-36 h-36 object-cover' alt="Coloring Object" /></figure>
                                <div className="card-body">
                                    <h2 className="text-2xl font-semibold text-center">Coloring Object</h2>
                                    {/* <p>Color various objects in a fun and creative way.</p> */}
                                    <Link to="/games/coloring-object">
                                        <Button text="গেমস খেলুন"></Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="card shadow-lg  border">
                                <figure><img src="https://i.ibb.co.com/tpVjWzxJ/bubble.png" className='w-36 h-36 object-cover' alt="Breathing Bloom" /></figure>
                                <div className="card-body">
                                    <h2 className="text-2xl font-semibold text-center">Breathing Bloom</h2>
                                    {/* <p>Relax and breathe along with the blooming flower.</p> */}
                                    <Link to="/games/breathing-bloom" >
                                        <Button text="গেমস খেলুন"></Button>
                                    </Link>
                                </div>
                            </div>

                            {/* External Games */}
                            <div className="card shadow-lg ] border">
                                <figure><img src="https://i.ibb.co.com/4gffBpq8/fruit.png" className='w-36 h-36 object-cover' alt="Fruit Ninja" /></figure>
                                <div className="card-body">
                                    <h2 className="text-2xl font-semibold text-center">Fruit Ninja</h2>
                                    {/* <p>Link to an external game for more fun.</p> */}
                                    <a href="https://poki.com/en/g/fruit-ninja" target="_blank" rel="noopener noreferrer">
                                        <Button text="গেমস খেলুন"></Button>
                                    </a>
                                </div>
                            </div>

                            <div className="card shadow-lg  border">
                                <figure><img src="https://i.ibb.co.com/2YfVkbvj/question.png" className='w-36 h-36 object-cover' alt="Who is?" /></figure>
                                <div className="card-body">
                                    <h2 className="text-2xl font-semibold text-center">Who is?</h2>
                                    {/* <p>Play this fun game on an external site.</p> */}
                                    <a href="https://poki.com/en/g/who-is-2-brain-puzzle-chats" target="_blank" rel="noopener noreferrer">
                                        <Button text="গেমস খেলুন"></Button>
                                    </a>
                                </div>
                            </div>

                            <div className="card shadow-lg  border">
                                <figure><img src="https://i.ibb.co.com/Mx5rvkYj/jigsaw.png" className='w-36 h-36 object-cover' alt="Merge Numbers" /></figure>
                                <div className="card-body">
                                    <h2 className="text-2xl font-semibold text-center">Merge Numbers</h2>
                                    {/* <p>Check out another exciting external game.</p> */}
                                    <a href="https://poki.com/en/g/merge-the-numbers" target="_blank" rel="noopener noreferrer">
                                        <Button text="গেমস খেলুন"></Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Games;