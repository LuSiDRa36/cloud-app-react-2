import React from 'react'
import single from '../assets/images/single.png';
import double from '../assets/images/double.png';
import triple from '../assets/images/triple.png';

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-slate-500'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col bg-slate-400 p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[3rem] bg-slate-400' src={single} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#3c3acc] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black justify-center'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col md:my-0 bg-slate-400 p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[3rem] bg-slate-400' src={double} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Multiple Users</h2>
                    <p className='text-center text-4xl font-bold'>$249</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>2 TB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-black text-[#3c3acc] w-[200px] rounded-md font-medium my-6 mx-auto py-3 justify-center'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col bg-slate-400 p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[3rem] bg-slate-400' src={triple} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Enterprise</h2>
                    <p className='text-center text-4xl font-bold'>$350</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#3c3acc] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black justify-center'>Start Trial</button>
                </div>

            </div>
        </div>
    )
}

export default Cards