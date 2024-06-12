import Image from "next/image";
import Header from "./components/Header";
import SponsorsMarquee from "./components/SponsorsMarquee";


export default function Home() {
  return (
    <div className="bg-light-green h-full w-full">
        <Header></Header>
        <svg xmlns="http://www.w3.org/2000/svg" width="1344" height="1095" viewBox="0 0 1344 1095" fill="none">
          <g filter="url(#filter0_d_1_44)">
            <path d="M914.076 0H0V1080H457.038L894.519 540L1332 0H914.076Z" fill="#DFFEEF"/>
          </g>
          <defs>
            <filter id="filter0_d_1_44" x="-8" y="-5" width="1352" height="1100" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="2" dy="5"/>
              <feGaussianBlur stdDeviation="5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.0413975 0 0 0 0 0.60829 0 0 0 0 0.521469 0 0 0 0.6 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_44"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_44" result="shape"/>
            </filter>
          </defs>
        </svg>

        <div className="absolute top-0 mt-[294px] ml-[80px]">
          <p className="text-primary font-raleway text-[70px] italic font-medium leading-normal ">The Financial Development</p>
          <p className="text-primary font-raleway text-[70px] italic font-medium leading-normal">Platform</p>
        
          <span className="text-primary font-montserrat text-[30px] italic font-bold leading-normal ">Elevate </span> 
          <span className="text-black font-montserrat text-[30px] italic font-normal leading-normal ">your Financial literacy.</span>
          <br></br>
          <span className="text-black font-montserrat text-[30px] italic font-normal leading-normal ">Fully</span>
          <span className="text-primary font-montserrat text-[30px] italic font-bold leading-normal "> Compete </span>
          <span className="text-black font-montserrat text-[30px] italic font-normal leading-normal ">in Business </span>
          <span className="text-black font-montserrat text-[30px] italic font-normal leading-normal ">Competitions.</span>
          <p className="text-primary font-montserrat text-[40px] font-semibold leading-normal mt-20">Money Talks, We Teach.</p>
        </div>

        <div className="flex flex-col mb-[100px]">
          <div className="mt-[83px] w-full text-center text-teal-700 text-[27px] font-semibold font-montserrat leading-10 mb-[40px]" >Used by Students From</div>
          <SponsorsMarquee></SponsorsMarquee>
        </div>

        <div className="flex flex-col bg-[#DFFEEF]">
          <div className="text-[#0A7968] text-[27px] font-semibold leading-[150%] text-center mt-[33px]">Business Competitions</div>
          <div className="text-[#0A7968] text-center font-montserrat text-[40px] font-normal leading-[150%] mt-[20px]">Prepare with the Top Award Winners in each Business Competition</div>
        </div>
    </div>
  );
}
