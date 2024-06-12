import Marquee from "react-fast-marquee";
import Image from 'next/image'
import logoExeter from "../../../public/images/logoExeter.png"
import logoNyu from "../../../public/images/logoNyu.png"
import logoHorace from "../../../public/images/logoHorace.png"
import logoBronx from "../../../public/images/logoBronx.png"

export default function SponsorsMarquee() {
    return (
        <div>
            <Marquee direction="right" speed={30} className="gap-10 overflow-y-hidden" gradient={true}>
                <div className="flex flex-row items-end mr-[116px]">
                    <div className="relative w-[83px] h-[87px] grayscale">
                        <Image src={logoExeter} alt="Exeter Logo" fill style={{objectFit: "cover"}} placeholder="blur"/>
                    </div>
                    <div className="flex flex-col ml-[18px] text-[#A0A0A0]">
                            <p className="text-4xl font-bold font-inter">Phillip's</p>
                            <p className="text-7xl font-bold font-inter">Exeter</p>
                    </div>
                </div>

                <div className="flex flex-row items-end mr-[116px]">
                    <div className="relative w-[272px] h-[100px]">
                        <Image src={logoNyu} alt="New York University Logo" fill style={{objectFit: "cover"}} placeholder="blur" className="grayscale"/>
                    </div>
                </div>

                <div className="flex flex-row items-end mr-[116px]">
                    <div className="relative w-[435px] h-[107px]">
                        <Image src={logoHorace} alt="Exeter Logo" fill style={{objectFit: "cover"}} placeholder="blur"/>
                    </div>
                </div>

                <div className="flex flex-row items-end mr-[116px]">
                    <div className="relative w-[83px] h-[87px]">
                        <Image src={logoBronx} alt="Bronx High School of Science Logo" fill style={{objectFit: "cover"}} placeholder="blur"/>
                    </div>
                    <div className="flex flex-col ml-[18px] text-[#9B9B9B]">
                            <p className="text-4xl font-bold font-inter w-[320px]">The Bronx High School of Science</p>
                    </div>
                </div>
            </Marquee>
        </div>
);
}