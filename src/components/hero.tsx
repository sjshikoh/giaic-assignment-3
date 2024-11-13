import React from "react";
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <div className="h-[829px] bg-[#043873] py-[140px] px-[220px] flex flex-row ">
        <div className="mb-14 mt-[92px]  ">
          <h2 className="w-[656px] h-[154px] font-inter text-[64px] mb-4 font-bold leading-[77.45px] text-white">
            Get More Done with whitepace
          </h2>
          <p className="w-[656px] h-[60px] font-inter text-lg font-normal leading-[30px] text-white mb-14">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>

          <button className="w-[219px] h-[63px] rounded-lg p-5 gap-[10px] bg-[#4F9CF9] text-lg font-medium leading-[23px] text-white mb-4">
            Try Whitepace free
          </button>
        </div>
        <div className="w-[824px] h-[549px]  bg-[#C4DEFD]"></div>
      </div>
      <div className="h-[1588px] bg-[#FFFFFF] py-[140px] px-[220px]  ">
        <div className="mb-14 mt-[92px] flex flex-row ">
          <div>
            <h1 className="w-[656px] h-[154px] font-inter text-[64px] mb-4 font-bold leading-[77.45px] text-[#212529]">
              Project Management
            </h1>
            <p className="w-[672px] h-[90px] font-inter text-lg font-normal leading-[30px] text-[#212529] mb-14">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them
              <br /> to a note.
            </p>
            <button className="w-[201px] h-[63px] rounded-lg px-10 py-5 gap-[10px] bg-[#4F9CF9] text-lg font-medium leading-[23px] text-white mb-4">
              Get Started
            </button>
          </div>
          <div className="w-[748px] h-[547px]  bg-[#C4DEFD]">
           
          </div>
        </div>

        <div className="h-[661px] gap-[100px] mb-14 mt-[92px] flex flex-row-reverse">
          <div className="w-[670px] h-[294px] gap[60px]">
            <h1 className="w-[87px] h-[154px] font-inter mb-10 font-bold leading-[87.14px] text-[72px] text-[#212529] ">
              Work together
            </h1>
            <p className="w-[672px] h-[90px] font-inter text-lg font-normal leading-[30px] text-[#212529] mb-14">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
            <div className="w-[186px] h-[63px] rounded-md flex flex-row px-10 py-5 bg-[#4F9CF9]">
              <button className="w-[82px] h-[23px] gap-[10px]  text-lg font-medium leading-[23px] text-white mb-4">
                Try it now
              </button>
              <span className="p-1  ">
                <Image src={"/Icon.png"} alt="arrow" width={14} height={14} />
              </span>
            </div>
          </div>
          <div className="">
            <Image
              src={"/Work-Image.png"}
              alt="image"
              width={710}
              height={661}
            />
          </div>
        </div>
      </div>
      <div className="h-[759px] bg-[#043873] py-[140px] px-[220px] flex flex-row ">
        <div className="  ">
          <h1 className="w-[697px] h-[87px] font-inter text-[72px] mb-4 font-bold leading-[87.14px] text-white">
            Use as Extension
          </h1>
          <p className="w-[697px] h-[60px] font-inter text-lg font-normal leading-[30px] text-white mb-14 mr-2">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages <br /> or take screenshots as notes.
          </p>
          <div className="w-[171px] h-[63px] rounded-md flex flex-row px-10 py-5 bg-[#4F9CF9]">
            <button className="w-[67px] h-[23px]  text-lg font-medium leading-[23px] text-white ">
              Let’s Go
            </button>
            <span className="p-1 gap-1 ">
              <Image src={"/Icon.png"} alt="arrow" width={14} height={14} />
            </span>
          </div>
        </div>
        <div className="w-[686px] h-[479px]  bg-[#C4DEFD]"></div>
      </div>

      <div className="h-[812px] bg-[#FFFFFF] py-[140px] px-[220px] flex flex-row-reverse gap-[98px] ">
        <div className="w-[669px] h-[411px] gap-[60px]">
          <h1 className="w-[669px] h-[174px] font-inter text-[72px] mb-4 font-bold leading-[87.14px] text-[#212529]">
            Customise it to your needs
          </h1>
          <p className="w-[669px] h-[90px] font-inter text-lg font-normal leading-[30px] text-[#212529] mb-14">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
          <div className="w-[171px] h-[63px] rounded-md flex flex-row px-10 py-5 bg-[#4F9CF9]">
            <button className="w-[67px] h-[23px]  text-lg font-medium leading-[23px] text-white ">
              Let’s Go
            </button>
            <span className="p-1 gap-1 ">
              <Image src={"/Icon.png"} alt="arrow" width={14} height={14} />
            </span>
          </div>
        </div>
        <div className="w-[714px] h-[532.09px] gap-1 bg-[#C4DEFD]">
          
        </div>
      </div>
      <div className="h-[574px] bg-[#043873] px-[220px] py-[140px]">
        <h1 className="w-[1064px] h-[87px]text-white font-bold text-[72px] leading-[87.14px] text-white text-center mb-5">
          Your work, everywhere you are
        </h1>
        <p className="w-[1064px] h-[60px] text-lg font-normal leading-[30px] text-[#FFFFFF] text-center mb-14">
          Access your notes from your computer, phone or tablet by synchronising
          with various services, including whitepace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, Android and iOS. A terminal
          app is also available!
        </p>
        <div className="flex justify-center">
           <div className="w-[171px] h-[63px] rounded-md flex flex-row  px-8 py-5 bg-[#4F9CF9]">
            <button className="w-[91px] h-[23px]  text-md font-medium leading-[23px] text-white ">
            Try Taskey
            </button>
            <span className="p-2 gap-1 ">
              <Image src={"/Icon.png"} alt="arrow" width={14} height={14} />
            </span>
          </div>
        </div>
       
      </div>
      <div className="h-[538px] px-[220px] py-[140px] gap[100px] bg-[FFFFFF]">
        <Image src={"/Our sponsors.png"} alt="sponsors trademarks" width={1922} height={538}/>
      </div>
      
    </div>
  );
};
export default Hero;
