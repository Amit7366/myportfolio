"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { FaGithub,FaLinkedin,FaSquareTwitter,FaInstagram,FaDiscord,FaFacebookF } from "react-icons/fa6";

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  const menu = [
    { name: "Home", url: "/" },
    {
      name: "Services",
      url: "/",
      dropdown: [
        { name: "Service 1", url: "" },
        { name: "Service 2", url: "" },
        { name: "Service 3", url: "" },
      ],
    },
    { name: "About", url: "/" },
    { name: "Contact", url: "/" },
  ];
  return (
    <main className="min-h-screen max-h-screen py-16 px-40 bg-hero-pattern bg-no-repeat bg-center">
      <nav className="flex justify-end">
        <div className="flex items-center gap-4">
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 duration-500 ${navbar ? "block" : "!hidden"
              }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-12 md:space-y-0">
              {menu.map(({ name, url, dropdown }, index) => (
                <li key={index} className="text-white  hover:text-[#FF014F] hover:border-b-[1px] border-b-[#FF014F] duration-500">

                  <Link href={url}>{name}</Link>

                </li>
              ))}
            </ul>
          </div>
          <button
            className="p-2 text-gray-700 rounded-md outline-none"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <RxCross1 className="text-white" />
            ) : (
              <AiOutlineMenu className="text-white" />
            )}
          </button>
        </div>
      </nav>
      <div className="flex justify-between py-24">
        <div className="w-1/2 py-24">
          <h6 className="font-bold text-5xl">Hi.</h6>
          <div className="flex gap-2 items-center mt-3">
            <small className="font-normal text-lg">meet</small><h1 className="font-bold text-7xl text-[#FF014F]">Amit Singha</h1>
          </div>
          <h2 className="font-semibold text-4xl mt-3">Web Developer & Mentor</h2>
          <Link href={'/'} className="inline-block w-28 h-10  relative mt-5"> <div className="absolute z-10 w-16 h-10 bg-[#FF014F] rounded-t-full rounded-bl-full rounded-b-none"></div> <span className="absolute inline-block z-20 right-7 top-2">Hire me</span></Link>


          <div className= "mt-10 flex gap-3 text-base ">
          
           <Link href={'https://github.com/Amit7366'} className="text-gray-400 hover:text-gray-200"><FaGithub/></Link>
           <Link href={'https://www.linkedin.com/in/amitksingha/'} className="text-gray-400 hover:text-gray-200"><FaLinkedin/></Link>
           <Link href={'https://twitter.com/Amit463Singh'} className="text-gray-400 hover:text-gray-200"><FaSquareTwitter/></Link>
           <Link href={'https://www.instagram.com/omit333/'} className="text-gray-400 hover:text-gray-200"><FaInstagram/></Link>
           <Link href={''} className="text-gray-400 hover:text-gray-200"><FaDiscord/></Link>
           <Link href={'https://www.facebook.com/omit.singh.7'} className="text-gray-400 hover:text-gray-200"><FaFacebookF/></Link>
          </div>


        </div>
        <div className="w-1/2 flex flex-col justify-between">
          <div className="w-1/2 px-12">
            <Image src="/images/trophy.png" alt="" width={'30'} height={'30'} />
            <h3 className="my-2">Expertise</h3>
            <p className="text-xs text-gray-400">
              I’m currently Freelancing on multiple projects for International Clients.
              (App and Web Development)
            </p>
          </div>
          <div className="w-1/2 ml-auto px-12">
            <Image src="/images/work.png" alt="" width={'30'} height={'30'} />
            <h3 className="my-2">Work</h3>
            <p className="text-xs text-gray-400">
              With a 93% client satisfaction rate, unique layouts, interactions and great typography is what I focus on when working on websites.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
