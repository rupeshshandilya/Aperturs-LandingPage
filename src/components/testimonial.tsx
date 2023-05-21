import React from 'react'
import { logo } from '@/assets';
import Image from 'next/image';


export const Testimonial = () => {
  return (
    <section className="bg-white" id='testimonial'>
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Testimonials</h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Aperturs Testimonial</p>
      </div> 
      <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900">Speechless with how easy this was to integrate</h3>
                  <p className="my-4">&quot;I recently got my hands on Flowbite Pro, and holy crap, I&apos;m speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.</p>
                  <p className="my-4">Flowbite has code in one place and I&apos;m not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.</p>
                  <p className="my-4">If you care for your time, I hands down would go with this.&quot;</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <Image className="w-9 h-9 rounded-full" src={logo.src} alt="profile picture" width={10} height={10}/>
                  <div className="space-y-0.5 font-medium text-left">
                      <div>Aperturs</div>
                      <div className="text-sm font-light text-gray-500 dark:text-gray-400">Aperturs Developer</div>
                  </div>
              </figcaption>    
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900">Speechless with how easy this was to integrate</h3>
                  <p className="my-4">&quot;I recently got my hands on Flowbite Pro, and holy crap, I&apos;m speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.</p>
                  <p className="my-4">Flowbite has code in one place and I&apos;m not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.</p>
                  <p className="my-4">If you care for your time, I hands down would go with this.&quot;</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <Image className="w-9 h-9 rounded-full" src={logo.src} alt="profile picture" width={10} height={10}/>
                  <div className="space-y-0.5 font-medium text-left">
                      <div>Aperturs</div>
                      <div className="text-sm font-light text-gray-500 dark:text-gray-400">Aperturs Developer</div>
                  </div>
              </figcaption>    
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900">Speechless with how easy this was to integrate</h3>
                  <p className="my-4">&quot;I recently got my hands on Flowbite Pro, and holy crap, I&apos;m speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.</p>
                  <p className="my-4">Flowbite has code in one place and I&apos;m not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.</p>
                  <p className="my-4">If you care for your time, I hands down would go with this.&quot;</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <Image className="w-9 h-9 rounded-full" src={logo.src} alt="profile picture" width={10} height={10}/>
                  <div className="space-y-0.5 font-medium text-left">
                      <div>Aperturs</div>
                      <div className="text-sm font-light text-gray-500 dark:text-gray-400">Aperturs Developer</div>
                  </div>
              </figcaption>    
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900">Speechless with how easy this was to integrate</h3>
                  <p className="my-4">&quot;I recently got my hands on Flowbite Pro, and holy crap, I&apos;m speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.</p>
                  <p className="my-4">Flowbite has code in one place and I&apos;m not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.</p>
                  <p className="my-4">If you care for your time, I hands down would go with this.&quot;</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <Image className="w-9 h-9 rounded-full" src={logo.src} alt="profile picture" width={10} height={10}/>
                  <div className="space-y-0.5 font-medium text-left">
                      <div>Aperturs</div>
                      <div className="text-sm font-light text-gray-500 dark:text-gray-400">Aperturs Developer</div>
                  </div>
              </figcaption>    
          </figure>
      </div>
    </div>
</section>
  );
};