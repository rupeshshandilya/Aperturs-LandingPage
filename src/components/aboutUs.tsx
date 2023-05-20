import React from 'react'
import { logo } from '@/assets'
import Image from 'next/image';

export const AboutUs = () => {
  return (
    <section className="bg-white" id="about-us">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Apertus</h2>
            <p className="mb-4 text-gray-900">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p className='text-gray-900'>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <Image className="w-full rounded-lg" src={logo.src} width={20} height={20} alt="office content 1" />
            <Image className="mt-4 w-full lg:mt-10 rounded-lg" src={logo.src} width={20} height={20} alt="office content 2" />
        </div>
    </div>
</section>
  )
}

