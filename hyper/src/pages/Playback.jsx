import React from 'react'
import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";

function Playback() {
    let item = JSON.parse(localStorage.getItem('video'));
    console.log(item);
    const navigate = useNavigate();


    return (
        <div className='w-full min-h-screen bg-gray-700 flex flex-col items-center'>
            <Navbar />
                <div className='w-full mt-8 fixed p-6'><i className="text-white text-4xl fa-solid fa-arrow-left-long" onClick={() => navigate(-1)}></i></div>
            <div className=' flex flex-col w-full md:w-[60%] sm:w-[80%] lg:w-[50%] xl:w-[40%] 2xl:w-[33%] items-center justify-center mb-24'>
                <div className='flex w-full bg-black justify-center items-center rounded-md' key={item.postId}>
                    <div className='flex flex-col'>
                        <h1 className='flex items-center gap-4 p-2 text-white mb-8'><i className="fa-solid fa-user"></i><span>{item.creator.handle}</span></h1>
                        <video className='h-screen w-full' src={item.submission.mediaUrl} autoPlay controls></video>
                        {/* title, like and comments */}
                        <div className='flex text-white justify-between items-center p-4'>
                            <div><i className="fa-solid fa-pen"></i> <span>{item.submission.title}</span></div>
                            <div className='flex justify-between items-center gap-2'>
                                <span><i className="fa-solid fa-comment"></i> {item.comment.count}</span>
                                <span><i className="fa-solid fa-heart"></i> {item.reaction.count}</span>
                            </div>
                        </div>
                        {/* discription  */}
                        <div>
                            <p className='flex text-white p-4'>{item.submission.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playback