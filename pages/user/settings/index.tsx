import { AppPage } from '@/shared/components/layouts/Types'
import Link from 'next/link'
import React from 'react'

const SettingsPage:AppPage = () => {
  return (
    <>
    <div>
    <div className="text-center">
          <p className="text-2xl lg:text-4xl lg:fw-6600">Settings</p>
          <p className="mt-4 lg:text-2xl brown">
          All your account settings in one place
          </p>
        </div>
        <div className='mt-12 lg:mt-16 lg:w-9/12 mx-auto'>
            <div className='flex items-center gap-x-3'>
                <div className='w-24 h-24 bg-[#1489C8] circle grid place-content-center'>
                    <p className='text-white text-5xl fw-600'>C</p>
                </div>
                <div>
                    <p className='text-xl'>Chigozie Victor</p>
                    <p className='mt-2 brown'>Active</p>
                </div>
            </div>
            <div className='mt-12'>
                <div className='grid lg:grid-cols-2 gap-x-12 gap-y-8'>
                    <div>
                        <p className='text-xl mb-2'>Your Email Address</p>
                        <div className='border border-[#D7DCE0] p-3 rounded bg-[#F4F5F6]'>
                            <p className='text-[#677684]'>chigoziegreg5@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl mb-2'>Registered Phone Number</p>
                        <div className='border border-[#D7DCE0] p-3 rounded bg-[#F4F5F6]'>
                            <p className='text-[#677684]'>+234 81 47511 481</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl mb-2'>Password Reset</p>
                        <p className='gray mt-3 mb-5'>Click the button below to reset your password</p>
                        <Link href='/user' className='btn-sec'>Reset Password</Link>
                    </div>
                    <div>
                        <p className='text-xl mb-2'>Generate API Keys</p>
                        <p className='gray mt-3 mb-5'>Click the button below to generate API keys</p>
                        <Link href='/user' className='btn-sec'>Generate API keys</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SettingsPage
SettingsPage.Layout = 'Dashboard'