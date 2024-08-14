import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white py-8 w-full mt-32">
      <div className="text-2xl  text-white flex gap-3 justify-center items-center">
        <Image src="/mylogo.png" width={46} height={24} />
        <p className="text-white font-serif text-3xl tracking-wider font-medium"><span className="font-bold">M</span>umair</p>
      </div>

    <div className="container2">
       <ul className="flex space-x-10 mt-10 text-white justify-center items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">About Me</Link></li>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#testimonials">Testimonials</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
    </div>

        <div className="flex space-x-4 mt-16 text-white justify-center items-center">
          <Image src="/fb.png" alt="Facebook" width={24} height={24} />
          <Image src="/twitter.png" alt="Twitter" width={24} height={24} />
          <Image src="/insta.png" alt="Instagram" width={24} height={24} />
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </div>

      <div className="containerBottom text-center mt-10 bg-black p-8 w-full">
        <p className="">© 2023 <span className="text-orange-500">Mumair</span> All Rights Reserved , Inc</p>
      </div>
    </footer>
  );
};

export default Footer;
