import Image from "next/image";

const Services = () => {
    return (
      <section id="services" className="sm:w-1/2 lg:w-3/4 flex flex-col  text-white justify-center items-center mt-32 p-3">
        <h1 className="text-6xl font-bold">Services</h1>
        <p className="mt-5  sm:text-center lg:flex lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis, u desporio nooernn!</p>
        <p className="mt-2 hidden lg:flex text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>

        <div className="services_container flex w-full justify-between mt-10 sm:flex-col lg:flex-row sm:gap-5 lg:gap-x-10">

          <div className="w-[350px] bg-white p-6 space-y-4 flex flex-col justify-center rounded-xl" style={{height:"300px"}}>
            <Image src="/vector.png" width={70} height={46} />
            <h6 className="text-black font-bold text-2xl">UI/UX</h6>
            <p className="text-wrap text-black">Lorem ipsum dolor, sit amet consect adip elit. Similique nobis culpa, fifu eihf fibu febwhif </p> 
          </div>

          <div className="w-[350px] bg-white p-6 space-y-4 flex flex-col justify-center rounded-xl" style={{height:"300px"}}>
            <Image src="/Layer_1.png" width={70} height={46} />
            <h6 className="text-black font-bold text-2xl">Web Design</h6>
            <p className="text-wrap text-black">Lorem ipsum dolor, sit amet consect adip elit. Similique nobis culpa, fifu eihf fibu febwhif</p> 
          </div>


          <div className="w-[350px] bg-white p-6 space-y-4 flex flex-col justify-center rounded-xl" style={{height:"300px"}}>
            <Image src="/Group 18.png" width={52} height={46} />
            <h6 className="text-black font-bold text-2xl">App Design</h6>
            <p className="text-wrap text-black">Lorem ipsum dolor, sit amet consect adip elit. Similique nobis culpa, fifu eihf fibu febwhif </p> 
          </div>


          <div className="w-[350px] bg-white p-6 space-y-4 flex flex-col justify-center rounded-xl" style={{height:"300px"}}>
            <Image src="/Vector.png" width={80} height={46} />
            <h6 className="text-black font-bold text-2xl">Graphic Design</h6>
            <p className="text-wrap text-black">Lorem ipsum dolor, sit amet consect adip elit. Similique nobis culpa, fifu eihf fibu febwhif </p> 
          </div>

        </div>
      </section>
    );
  };
  
  export default Services;
  