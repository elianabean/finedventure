import Marquee from "react-fast-marquee";
import Image from 'next/image'
import logoExeter from "../../../public/images/logoExeter.png"
import logoNyu from "../../../public/images/logoNyu.png"
import logoHorace from "../../../public/images/logoHorace.png"
import logoBronx from "../../../public/images/logoBronx.png"
import logoLehigh from "../../../public/images/logoLehigh.png"
import logoCornell from "../../../public/images/logoCornell.png"
import logoHewitt from "../../../public/images/logoHewitt.png"
import logoBeverly from "../../../public/images/logoBeverly.png"
import logoBuckingham from "../../../public/images/logoBuckingham.png"
import logoHarvard from "../../../public/images/logoHarvard.png"

export default function SponsorsMarquee() {
    return (
        <div className="relative">
            <Marquee direction="right" speed={80} className="gap-10 overflow-y-hidden" gradient={true}>
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

                <div className="flex flex-row items-end mr-[116px]">
                    <div className="relative w-[447px] h-[106px]">
                        <Image src={logoLehigh} alt="Lehigh University Logo" fill style={{objectFit: "cover"}} placeholder="blur"/>
                    </div>
                </div>

                <div className="flex flex-row items-end mr-[116px]">
                    <div className="relative w-[449px] h-[114px]">
                        <Image src={logoCornell} alt="Cornell University Logo" fill style={{objectFit: "cover"}} placeholder="blur"/>
                    </div>
                </div>

                <div className="flex flex-row items-center mr-[116px]">
                    <div className="relative w-[127px] h-[119px]">
                        <Image src={logoHewitt} alt="The Hewitt School Logo" fill style={{objectFit: "cover"}} placeholder="blur"/>
                    </div>
                    <div className="flex flex-col ml-[18px] text-[#9B9B9B]">
                            <p className="text-4xl font-bold font-inter w-[337px]">The Hewitt School</p>
                    </div>
                </div>

                <div className="flex flex-row items-center mr-[116px]">
                    <div className="relative w-[120px] h-[120px]">
                        <Image src={logoBeverly} alt="Beverly Hills High School Logo" fill style={{objectFit: "cover"}} placeholder="blur"/>
                    </div>
                    <div className="flex flex-col ml-[18px] text-[#9B9B9B]">
                            <p className="text-4xl font-bold font-inter w-[460px]">Beverly Hills High School</p>
                    </div>
                </div>

                <div className="flex flex-row items-center mr-[116px]">
                    <div className="relative w-[120px] h-[120px]">
                        <Image src={logoBuckingham} alt="Buckingham Browne & 
Nicholas School Logo" fill style={{objectFit: "cover"}} placeholder="blur"/>
                    </div>
                    <div className="flex flex-col ml-[18px] text-[#9B9B9B]">
                            <p className="text-4xl font-bold font-inter w-[435px]">Buckingham Browne & Nicholas School</p>
                    </div>
                </div>

                <div className="flex flex-row items-end mr-[116px]">
                    <div className="relative w-[445px] h-[134px]">
                        <Image src={logoHarvard} alt="Harvard Westlake School" fill style={{objectFit: "cover"}} placeholder="blur"/>
                    </div>
                </div>

            </Marquee>
        </div>
);
}