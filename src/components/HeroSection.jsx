import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex py-20 w-3/4 space-x-40 sm:flex-col sm:justify-center sm:items-center sm:gap-16 lg:flex-row" id="herosection">
      <div className="info_Container text-white mt-32 sm:space-y-3 lg:space-y-6 w-1/2">
        <p className="text-2xl">Hi I am</p>
        <p className="text-orange-500 text-[20px] w-1/2 font-bold sm:text-[30px] lg:text-4xl tracking-wide lg:text-left">
          Muhammad <span>Umair</span>
        </p>
        
        <p className="font-bold sm:text-[50px] lg:text-8xl">UI & UX </p>
        <p className="flex lg:ml-40 sm:ml-0 sm:text-[50px] w-1/3 font-bold lg:text-8xl tracking-wide">
          Designer
        </p>
        <p className=" mt-4 sm:text-md lg:text-lg sm:text-wrap">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed<br></br> massa nibh lectus netus in. Aliquet donec morbi convallis<br></br> pretium. Turpis tempus pharetra
        </p>

        <button className="bg-orange-500 rounded-md p-3 w-[188px]">Hire Me</button>
      </div>

      <div className="flex flex-col items-center justify-center mr-20 w-1/2 relative">

  <div className="relative hidden lg:block">
    <Image src="/HeroSection.png" width={600} height={300} />
    <div 
      className="absolute bg-orange-500 hidden xl:block" 
      style={{
        width: '370px', 
        height: '100px', 
        top: '70px',  
        left: '110px',
        opacity: 0.4,
      }} 
    />
  </div>

  {/* Social Media Icons */}
  <div className="flex space-x-6 mt-16 text-white hidden lg:flex">
    <Image src="/fb.png" alt="Facebook" width={24} height={24} />
    <Image src="/twitter.png" alt="Twitter" width={24} height={24} />
    <Image src="/insta.png" alt="Instagram" width={24} height={24} />
    <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
  </div>
</div>

    </section>
  );
};

export default HeroSection;
