'use client'
import Image from "next/image";
import Header from "./components/Header";
import SponsorsMarquee from "./components/SponsorsMarquee";
import yisComp from "../../public/images/yisComp.png";
import whartonComp from "../../public/images/whartonComp.png";
import decaComp from "../../public/images/decaComp.png";
import {Button} from "@nextui-org/react";
import Money from "./components/3dMoney/Scene";
import { motion, Variants } from "framer-motion";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {Reveal} from "./components/Reveal";

export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      offset: 0,
      duration: 1000,
    });
  });

  return (
    <div className="bg-light-green h-full w-[100vw]">
        <Header></Header>

        <div className="h-full min-h-[100vh]">
          <div className="lg:-mr-100 absolute inset-y-0 right-[40%] -mr-60 w-[200%] origin-top-right skew-x-[-40deg] bg-[#DFFEEF] shadow-xl shadow-[#0B9B85]/60 ring-1 ring-blue-50" aria-hidden="true" ></div>    
          <div className="absolute top-[30%] ml-[80px]">
            <Reveal>
            <p className="text-primary font-raleway 3xl:text-[70px] xl:text-[50px] italic font-medium leading-normal pr-2" >The Financial Development</p>
            </Reveal>
            
            <Reveal>
            <p className="text-primary font-raleway 3xl:text-[70px] xl:text-[50px] italic font-medium leading-normal pr-2">Platform</p>
            </Reveal>
          
            <Reveal>
            <span className="text-primary font-montserrat 3xl:text-[40px] xl:text-2xl italic font-bold leading-normal ">Elevate <span className="text-black font-montserrat 3xl:text-[40px] xl:text-2xl italic font-normal leading-normal pr-2">your Financial literacy.</span></span> 
            
            </Reveal>
            <div className="h-[10px]"></div>

            <Reveal>
            <span className="text-black font-montserrat 3xl:text-[40px] xl:text-2xl italic font-normal leading-normal pr-2">Fully <span className="text-primary font-montserrat 3xl:text-[40px] xl:text-2xl italic font-bold leading-normal"> Compete </span>in Business Competitions.</span>
            </Reveal>
            
            
            <Reveal>
            <p className="text-primary font-montserrat 3xl:text-[40px] xl:text-3xl font-semibold leading-normal mt-20 pr-2">Money Talks, We Teach.</p>
            </Reveal>
          </div>
        
        

          <div className="absolute right-0 top-0 h-[100vh] flex flex-col justify-center">
            <Money></Money>
          </div>
        </div>
        <div className="flex flex-col mb-[100px]">
            <div className="mt-[83px] w-full text-center text-teal-700 text-[27px] font-semibold font-montserrat leading-10 mb-[40px]" >Used by Students From</div>
            <SponsorsMarquee></SponsorsMarquee>
          </div>

        <div className="flex flex-col bg-[#DFFEEF]">
          <div className="text-[#0A7968] text-[27px] font-semibold leading-[150%] text-center mt-[33px]">Business Competitions</div>
          <div className="text-[#0A7968] text-center font-montserrat text-[40px] font-normal leading-[150%] mt-[20px]">Prepare with the Top Award Winners in each Business Competition</div>

          <div className="flex flex-row flex-wrap gap-[84px] mx-[55px] mt-[20px] justify-center">
            <div className="flex flex-col items-center">
              <div className="relative w-[500px] h-[657px] ">
              <Image src={yisComp} alt="YIS Global Stock Pitch Competition" fill style={{objectFit: "cover"}} placeholder="blur"/>
              </div>
              <p className="mt-[29px] w-[485px] shrink-0 text-[#0A7968] text-center font-inter text-[35px] italic font-semibold leading-[150%]">YIS Global Stock Pitch Competition</p>
            <Button radius="md" className="w-[200px] h-[58px] mt-[40px] border border-solid border-[#0A7968] px-5 py-[9px] [background:#ECFFF6]"><p className="text-[#0A7968] text-center font-lato text-3xl font-medium leading-[normal]">Get Started</p></Button>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-[500px] h-[657px] ">
              <Image src={whartonComp} alt="YIS Global Stock Pitch Competition" fill style={{objectFit: "cover"}} placeholder="blur"/>
              </div>
              <p className="mt-[29px] w-[615px] shrink-0 text-[#0A7968] text-center font-inter text-[35px] italic font-semibold leading-[150%]">Wharton Global Investment Competition</p>
            <Button radius="md" className="w-[200px] h-[58px] mt-[40px] border border-solid border-[#0A7968] px-5 py-[9px] [background:#ECFFF6]"><p className="text-[#0A7968] text-center font-lato text-3xl font-medium leading-[normal]">Get Started</p></Button>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-[500px] h-[657px] ">
              <Image src={decaComp} alt="YIS Global Stock Pitch Competition" fill style={{objectFit: "cover"}} placeholder="blur"/>
              </div>
              <p className="mt-[29px] w-[485px] shrink-0 text-[#0A7968] text-center font-inter text-[35px] italic font-semibold leading-[150%]">DECA Business</p>
              <p className="w-[485px] shrink-0 text-[#0A7968] text-center font-inter text-[35px] italic font-semibold leading-[150%]">Competition</p>
            <Button radius="md" className="w-[200px] h-[58px] mt-[40px] border border-solid border-[#0A7968] px-5 py-[9px] [background:#ECFFF6]"><p className="text-[#0A7968] text-center font-lato text-3xl font-medium leading-[normal]">Get Started</p></Button>
            </div>
          </div>
        </div>

        <div className="w-[100vw] h-[769px] shrink-0 [background:linear-gradient(180deg,#DFFEEF_0%,#F0FFF8_79.32%)] flex flex-col items-center">
          <div className="absolute left-[-315px] top-[2839px] w-[205.367px] h-[977.546px] rotate-45 shrink-0 [background:rgba(73,237,211,0.10)] rounded-[100px]"></div>
          <div className="absolute left-[-50px] top-[2917px] w-[205.367px] h-[977.546px] rotate-45 shrink-0 [background:rgba(73,237,211,0.10)] rounded-[180px]"></div>
          <div className="absolute left-[-100px] top-[3311px] w-[205.367px] h-[977.546px] rotate-45 shrink-0 [background:rgba(73,237,211,0.10)] rounded-[157.5px]"></div>

          <p className="mt-[122px] w-[1000px] h-[189px] shrink-0 text-[#02362E] text-center font-inter text-3xl font-normal leading-[150%]">We brought the Global Champions and Finalists in each respective competition and curated complete, in-depth business competition courses to ensure that you will be prepared with all the information to succeed.</p>

          <p className="mt-[100px] w-[628px] h-[76px] shrink-0 text-[#0A7968] text-center font-inter text-[35px] font-normal leading-[150%]">Prepare to Compete, not Participate</p>
        </div>

        <div className="w-[100vw] h-[4668px] shrink-0 fill-[#F0FFF8]">
          <div className="w-full pr-[197px] flex flex-col items-end">
            <p className="w-[961px] text-[#0A7968] text-right font-montserrat text-[53px] font-normal leading-[50px] capitalize">
            Comprehensive Financial Mastery
            </p>
            <p className="w-[775px] h-[243px] shrink-0 text-[#02362E] text-right font-inter text-3xl font-normal leading-[150%] mt-[30px]">Our curriculum is formatted in a <span className="font-bold">multi-leveled structure</span>, a beginner and advanced program. </p>
          </div>
        </div>        
    </div>
  );
}
