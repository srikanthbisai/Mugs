import Image from "next/image";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full flex flex-col  text-white justify-center items-center mt-24 p-6"
    >
      <h1 className="text-6xl font-bold">My Projects</h1>
      <p className="mt-5 text-center sm:text-center sm:w-2/3 lg:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis, u
        desporio nooernn!
      </p>
      <p className="text-center hidden lg:flex text-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      </p>

      <div className="container flex justify-center items-center space-x-6 mt-10">
        <button className=" sm:p-1 lg:p-3 w-[80px] bg-white text-black rounded-lg text-lg">
          All
        </button>
        <button className=" sm:p-1 lg:p-3 w-[100px] bg-white text-black rounded-lg text-lg">
          UI/UX
        </button>
        <button className=" sm:p-1  lg:p-3 w-[180px] bg-orange-500 text-white font-bold rounded-lg text-lg">
          Web Design
        </button>
        <button className=" sm:p-1  lg:p-3 w-[180px] bg-white text-black rounded-lg text-lg">
          App Design
        </button>
        <button className="sm:p-1 lg:p-3 w-[180px] bg-white text-black rounded-lg text-lg">
          Graphic Design
        </button>
      </div>

      <div className="container2 w-3/4 flex llg:space-x-20 gap-10 mt-20 sm:flex-col lg:flex-row">
        
        <div className="w-[500px] relative flex flex-col rounded-md lg:justify-center lg:items-center items-center bg-[#FFEBDB]">
        <Image
            src="/Design1.png"
            alt="Business Landing Page Design"
            width={250}
            height={0}
            className="relative z-0 left-8"
            style={{height: "480px"}}
          />
          <Image
            src="/Design12.png"
            alt="Business Landing Page Design"
            width={252}
            height={400}
            className="absolute top-28 left-8 z-10"
          />
        </div>

        <div className="w-[500px] relative flex flex-col rounded-md sm:justify-center sm:items-center items-center bg-[#FFEBDB]">
        <Image
            src="/Design3.png"
            alt="Business Landing Page Design"
            width={250}
            height={0}
            className="relative z-0 left-8"
            style={{height: "480px"}}
          />
          <Image
            src="/Design2.png"
            alt="Business Landing Page Design"
            width={248}
            height={400}
            className="absolute top-28 left-10 z-10"
          />
        </div>

       
        <div className="w-[500px] relative flex flex-col rounded-md items-center bg-[#FFEBDB]">
        <Image
            src="/Design4.png"
            alt="Business Landing Page Design"
            width={250}
            height={0}
            className="relative z-0 left-8"
            style={{height: "480px"}}
          />
          <Image
            src="/Design32.png"
            alt="Business Landing Page Design"
            width={249}
            height={400}
            className="absolute top-28 left-10 z-10"
          />
            
        </div>
      </div>
      <div className="bottomContainer flex hidden lg:flex w-3/4 justify-between space-x-32 mt-10">
        <div className="1 w-1/3 space-y-4">
          <h1 className="text-orange-500 text-xl">Web Design</h1>
          <p className="font-bold text-xl">Aircalling Landing page Desgin</p>
        </div>
        <div className="2 w-1/3 space-y-4">
        <h1 className="text-orange-500 text-xl">Web Design</h1>
        <p className="font-bold text-xl">Business Landing Page Design </p>
        </div>
        <div className="3 w-1/3 space-y-4">
        <h1 className="text-orange-500 text-xl">Web Design</h1>
        <p className="font-bold text-xl">Ecom Web Page Design </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
