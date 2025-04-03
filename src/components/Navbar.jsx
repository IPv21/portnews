import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { BsFillPersonLinesFill } from 'react-icons/bs'; 
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick=()=> setNav(!nav)

  return (
    <div  className='fixed top-0 w-full z-50 w-full h-[80px] flex justify-between items-center px-4 bg-[#081222] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '50px' }} /></div>
      {/* menu */}                   <ul className='hidden md:flex hover:cursor-pointer'>
          <li  id='neon'>    
            <Link  
             to="home" 
             spy={true} 
             smooth={true} 
             duration={500}>
             Home
            </Link>
         </li>

         <li id='neon' >    
            <Link  
             to="theman" 
             spy={true} 
             smooth={true} 
             duration={500}>
             The Man...
            </Link>
         </li>

         <li id='neon'>    
            <Link  
             to="theskills" 
             spy={true} 
             smooth={true} 
             duration={500}>
             The Skills...
            </Link>
         </li>

         <li id='neon'>    
            <Link  
             to="theworks" 
             spy={true} 
             smooth={true} 
             duration={500}>
             The Works...
            </Link>
         </li>

         <li id='neon'>    
            <Link  
             to="contact" 
             spy={true} 
             smooth={true} 
             duration={500}>
              The Call...
            </Link>
         </li>



        </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 hover:cursor-pointer'>
        {!nav ?  <FaBars /> : <FaTimes />}
       
      </div>

      {/* mubile */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl hover:text-red-600'>            <Link onClick={handleClick}
             to="home" 
             spy={true} 
             smooth={true} 
             duration={500}>
             Home
            </Link></li>
          <li  className='py-6 text-4xl hover:text-red-600'>            <Link  onClick={handleClick}
             to="theman" 
             spy={true} 
             smooth={true} 
             duration={500}>
             The Man...
            </Link></li>
          <li className='py-6 text-4xl hover:text-red-600'>            <Link onClick={handleClick} 
             to="theskills" 
             spy={true} 
             smooth={true} 
             duration={500}>
             The Skills...
            </Link></li>
          <li className='py-6 text-4xl hover:text-red-600'>            <Link onClick={handleClick} 
             to="theworks" 
             spy={true} 
             smooth={true} 
             duration={500}>
             The Works...
            </Link></li>
          <li className='py-6 text-4xl hover:text-red-600'>            <Link onClick={handleClick} 
             to="contact" 
             spy={true} 
             smooth={true} 
             duration={500}>
              The Call...
            </Link></li>
        </ul>
        {/* social menu */}
        {/* <div className='hidden'></div> */}
    <div className='hidden sm:flex fixed flex-col top-[40%] left-0 transform -translate-y-1/2'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-content items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-red-600'>
            <a className='flex justify-between items-center w-full text-black' href='https://instagram.com/the.matthewshumanexperience'>Instagram <SiInstagram size={30} /></a>
        </li >
        <li className='w-[160px] h-[60px] flex justify-content items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-700'>
            <a className='flex justify-between items-center w-full text-black' href='https://www.linkedin.com/in/matthew-shuman-8781b6220/'>LinkedIn <FaLinkedin size={30} /></a>
        </li >
     
        <li className='w-[160px] h-[60px] flex justify-content items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-gray-500'>
            <a className='flex justify-between items-center w-full text-black' href='https://github.com/ipv21'>GitHub<FaGithub size={30} /></a>
        </li >

        <li className='w-[160px] h-[60px] flex justify-content items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-green-500'>
            <a className='flex justify-between items-center w-full text-red-600' href='https://docs.google.com/document/d/1m_MskQjb8HAYL3o7LhYkwPu__Ls5pDez_IBt2dXfjYY/edit?usp=sharing'>Resume<BsFillPersonLinesFill size={30} /></a>
        </li >

     </ul>
    </div>
  </div>
  );
};

export default Navbar;

