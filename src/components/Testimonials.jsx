import Image from "next/image";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full flex flex-col text-white justify-center items-center mt-40 p-3"
    >
      <h1 className="text-6xl font-bold">Testimonials</h1>
      <p className="mt-5 sm:text-center sm:w-2/3 lg:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis, u
        desporio nooernn!
      </p>
      <p className="mt-2 hidden text-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
      </p>

      <div className="container w-full flex text-white mt-20 sm:flex-col lg:flex-row sm:gap-10">
        <div className="half-left w-[600px] h-[400px] bg-white lg:-translate-x-[500px] flex rounded-md text-center justify-center items-center opacity-30">
          <p className="text-black">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            inventore! Quidem perspiciatis consequuntur atque voluptatem! Nihil
          </p>
        </div>

        <div className="middleone w-full h-[400px] bg-white rounded-md flex justify-center items-center gap-3">
          <Image
            src="/testimonial1.png"
            alt=""
            width={400}
            height={46}
            className="ml-10"
          />
          <p className="text-wrap text-black">
            Lorem ipsum dolor sit amet consectetur. In enim cursus odio
            accumsan. Id leo urna velit neque mattis id tellus arcu condimentum.
            Augue dictum dolor elementum convallis dignissim malesuada commodo
            ultrices.
          </p>
        </div>

        <div className="half-right w-[600px] h-[400px] bg-white lg:translate-x-[580px] rounded-md flex justify-center items-center opacity-30 gap-2">
          <Image src="/testimonial2.png" alt="" width={300} height={46} className="ml-4"/>
          <p className="text-wrap text-black">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ad delectus tenetur perspiciatis at maiores ullam quisquam ratione odit doloribus.
          </p>
        </div>
      </div>

      <div className="container2 flex justify-center items-center mt-10 space-x-3">
        <div className="w-[50px] h-3 rounded-full bg-white"></div>
        <div className="w-[50px] h-3 rounded-full bg-orange-500"></div>
        <div className="w-[50px] h-3 rounded-full bg-white"></div>
        <div className="w-[50px] h-3 rounded-full bg-white"></div>
      </div>

    </section>
  );
};

export default Testimonials;
