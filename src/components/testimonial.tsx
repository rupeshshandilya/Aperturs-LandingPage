import React from 'react'
import { logo } from '@/assets';
import Image from 'next/image';

const testimonialData = [
    {
        name: "Maria Smantha",
        description: "Aperturs transformed my content sharing as a web developer. Seamless GitHub integration, dynamic posts, and customization options made it effortless and efficient. Highly recommended!",
        position: "Web Developer",
        imgeUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
        starIcon: <ul className="mb-0 flex justify-center">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
            <path fill="currentColor"
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
          </svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
            <path fill="currentColor"
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
          </svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
            <path fill="currentColor"
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
          </svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
            <path fill="currentColor"
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
          </svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
            <path fill="currentColor"
              d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
          </svg>
        </li>
      </ul>
    },
    {
        name: "Lisa Cudrow",
        description: "Aperturs has revolutionized content sharing for Android developers like me. With GitHub integration and dynamic post generation, it's an efficient and indispensable tool for showcasing my work. ",
        position: "Android Developer" ,
        imgeUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
        starIcon: <ul className="mb-0 flex justify-center">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
            <path fill="currentColor"
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
          </svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
            <path fill="currentColor"
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
          </svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
            <path fill="currentColor"
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
          </svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
            <path fill="currentColor"
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
          </svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
            <path fill="currentColor"
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
          </svg>
        </li>
      </ul>
    },
        {
        name: "John Smith",
        description: "For software engineers, material sharing has been simplified by Aperturs. It is an indispensable tool for showing projects and updates because it integrates with GitHub and generates posts dynamically. Software engineers should definitely consider this!",
        position: "Software Developer",
        imgeUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).jpg",
        starIcon: <ul className="mb-0 flex justify-center">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
            <path fill="currentColor"
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
          </svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
            <path fill="currentColor"
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
          </svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
            <path fill="currentColor"
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
          </svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
            <path fill="currentColor"
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
          </svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
            <path fill="currentColor"
              d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" />
          </svg>
        </li>
      </ul>
    }
]

export const Testimonial = () => {
  return (
<div className="container my-24 mx-auto md:px-6">
  <section className="mb-32 text-center">
    <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">

        {testimonialData.map((data)=>(
                    <div className="mb-12 md:mb-0">
                    <div className="mb-6 flex justify-center">
                      <img src={data.imgeUrl}
                        className="w-32 rounded-full shadow-lg dark:shadow-black/20" />
                    </div>
                    <h5 className="mb-2 text-lg font-bold">{data.name}</h5>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      {data.position}
                    </h6>
                    <p className="mb-4">
                        {data.description}
                    {/* Quotation */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                        <path fill="currentColor"
                          d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                      </svg>
                    </p>

                    {/* Rating */}
                    {data.starIcon}
                  </div>
        ))}

    </div>
  </section>
</div>
  );
};