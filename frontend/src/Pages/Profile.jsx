import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const profile = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(false);
    const navigate = useNavigate()
    useEffect(async () => {
        let fetchUserData = () => {
            let token = localStorage.getItem('token', data.token);
            if (!token) {
                navigate('/login')
                return;
            }

        }
    })

    return (
        <>
            <div className='flex justify-center items-center min-h-screen  px-4'>
                <div className='relative flex flex-col rounded-xl bg-white shadow-lg p-6 w-full max-w-md'>
                    <h2 className='text-2xl font-semibold text-gray-800 text-center'>Profile</h2>
                    <p className='text-gray-500 text-center mb-6'>Welcome back!</p>
                    <p className='text-gray-500 text-center '>user : </p>
                    <p className='text-gray-500 text-center mb-6'>email : </p>
                </div>
            </div>
        </>
    )
}
export default profile