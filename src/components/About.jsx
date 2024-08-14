import Image from "next/image";

const AboutMe = () => {
  return (
    <section id="about" className="flex w-3/4">
      <div className="relative w-1/2 hidden lg:flex">
        <Image src="/Group2.png" alt="" width={700} height={300} />
        <div
          className="absolute bg-orange-500"
          style={{
            width: "380px",
            height: "100px",
            top: "90px",
            left: "160px",
            opacity: 0.4,
          }}
        />
      </div>

      <div className="aboutInfo_container text-white lg:w-1/2 mt-20 flex justify-center items-center space-y-12 font-bold sm:flex-col sm:justify-center sm:items-center">
        <p className="text-white font-bold text-5xl">About Me</p>
        <p className="mt-5 sm:text-center lg:text-left lg:font-normal lg:text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
          minima iste placeat aliquid, quisquam praesentium totam asperiores
          expedita beatae soluta
        </p>

        <div className="w-full">
          <h3 className="font-bold text-lg">UX</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
            <div
              className="bg-orange-500 h-2.5 rounded-full relative"
              style={{ width: "85%" }}
            >
              {/* Circular indicator */}
              <div
                className="absolute bg-white border-4 border-orange-500 rounded-full"
                style={{
                  width: "26px",
                  height: "26px",
                  top: "-7px", // Adjust to center the circle vertically
                  right: "0", // Position at the end of the orange bar
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="w-full ">
          <h3 className="font-bold text-lg">Website Design</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-orange-500 h-2.5 rounded-full relative"
              style={{ width: "81%" }}
            >
              {/* Circular indicator */}
              <div
                className="absolute bg-white border-4 border-orange-500 rounded-full"
                style={{
                  width: "26px",
                  height: "26px",
                  top: "-7px", // Adjust to center the circle vertically
                  right: "0", // Position at the end of the orange bar
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="w-full ">
          <h3 className="font-bold text-lg">App Design</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
              className="bg-orange-500 h-2.5 rounded-full relative"
              style={{ width: "89%" }}
            >
              {/* Circular indicator */}
              <div
                className="absolute bg-white border-4 border-orange-500 rounded-full"
                style={{
                  width: "26px",
                  height: "26px",
                  top: "-7px", // Adjust to center the circle vertically
                  right: "0", // Position at the end of the orange bar
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h3 className="font-bold text-lg">Graphic Design</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
              className="bg-orange-500 h-2.5 rounded-full relative"
              style={{ width: "85%" }}
            >
              {/* Circular indicator */}
              <div
                className="absolute bg-white border-4 border-orange-500 rounded-full"
                style={{
                  width: "26px",
                  height: "26px",
                  top: "-7px", // Adjust to center the circle vertically
                  right: "0", // Position at the end of the orange bar
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
