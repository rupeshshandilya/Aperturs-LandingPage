"use client"

import { AboutUs } from "@/components/aboutUs";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import Footer from "@/components/footer";
import {Header} from "@/components/header";
import { Hero } from "@/components/hero";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
  return (
   <>
   <Header/>
   <Hero/>
   <AboutUs/>
   <Features/>
   <Testimonial/>
   <FAQ/>
   <Footer/>
    </>
  )
}
