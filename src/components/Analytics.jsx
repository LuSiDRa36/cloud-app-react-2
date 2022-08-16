import React from 'react'
import Laptop from '../assets/images/Comp2.png'

const Analytics = () => {
    return (
        <div className='w-full bg-slate-500 rounded py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4 rounded' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#3c3acc] text-xl font-bold md:mx-3'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 md:mx-4'>Manage Data Analytics Centrally</h1>
                    <p className='md:mx-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cupiditate officia necessitatibus, dolore eligendi, libero, ipsa cumque neque nesciunt tempora iure itaque nemo voluptas deleniti quas dicta sint quod molestiae?</p>
                </div>
                <button className='bg-black w-[200px] text-[#3c3acc] rounded-md font-medium my-6 mx-auto md:mx-32 py-3'>Get Started</button>
            </div>
        </div>
    )
}

export default Analytics