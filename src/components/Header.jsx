import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between lg:w-3/4 mt-20" id='header'>
      <div className="text-2xl text-white flex gap-6 justify-center items-center">
        <Image src="/mylogo.png" width={46} height={24} className='lg:ml-0'/>
        <p className='text-white font-normal lg:text-5xl tracking-wider'><span className='font-bold'>M</span>umair</p>
        </div>
      <nav>
        <ul className="flex space-x-16 text-white justify-center items-center hidden lg:flex text-xl">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">About Me</Link></li>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#testimonials">Testimonials</Link></li>
          <li><Link href="#contact">Contact</Link></li>
          <li><button className="bg-orange-500 text-white px-4 py-2 rounded">Download CV</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
