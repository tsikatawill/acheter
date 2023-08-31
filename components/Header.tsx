import Image from "next/image";
import Container from "./Container";
import CustomHeading from "./CustomHeading";
import Navbar from "./Navbar";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

export default function Header() {
  return (
    <header
      className="bg-slate-900 h-screen max-h-[810px]"
      style={{ background: "url(/images/headerbg.jpg) center center/cover" }}
    >
      <Navbar />

      <Container>
        <div className="relative mt-36">
          <CustomHeading
            variant="h3"
            className="absolute -top-16 -rotate-12 z-10"
          >
            Mid-Season
          </CustomHeading>
          <p className="text-[300px] text-[#bbbbba] font-bold -translate-x-72 leading-[20px]">
            2023
          </p>
        </div>

        <div className="relative left-20 w-fit h-[154px]">
          <Image
            src={"/images/ink-blot.svg"}
            alt="ink-blot"
            width={157}
            height={154}
          />
          <CustomHeading
            className="absolute text-white top-1/2 -translate-y-1/2 pl-[25px] whitespace-nowrap"
            variant="h1"
          >
            50% <span className="text-[#FF3F90]">OFF</span>
          </CustomHeading>
          <Button className="bg-primary text-white flex items-center gap-2 mt-6">
            Shop now <FaArrowRight />
          </Button>
        </div>
      </Container>
    </header>
  );
}

// <div>
//           <div className="">
//             <CustomHeading variant="h3" className="-rotate-12">
//               Mid-Season
//             </CustomHeading>
//             <p className="text-[300px] text-[#bbbbba] font-bold -left-72 border absolute top-0 leading-[220px]">
//               2023
//             </p>
//           </div>

//      <div>
//             <div className="relative h-[154px] border border-red-600">
//               <Image
//                 src={"/images/ink-blot.svg"}
//                 alt="ink-blot"
//                 width={157}
//                 height={154}
//               />

//               <CustomHeading
//                 className="absolute text-white top-1/2 -translate-y-1/2 pl-[25px]"
//                 variant="h1"
//               >
//                 50% <span className="text-[#FF3F90]">OFF</span>
//               </CustomHeading>
//             </div>

//           </div>
//         </div>
