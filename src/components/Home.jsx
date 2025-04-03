import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='home' className='md:pt-[200px] pt-[100px] sm:pl-[75px] w-full h-screen bg-[#1b0e45]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-red-600 font-extrabold'>Hi, my name is</p>

            <div className='flex'>
            <h1 className='text-4xl sm:text-7xl font-bold text-gray-300'>Matthew Shuman</h1>
            <div class="pyramid-loader">
  <div class="wrapper">
    <span class="side side1"></span>
    <span class="side side2"></span>
    <span class="side side3"></span>
    <span class="side side4"></span>
    <span class="shadow"></span>
  </div>  
</div>
            </div>
            <h2 className='text-3xl sm:text-6xl font-bold text-gray-600'>I'm a Full Stack Web Developer. </h2>
            <p className='text-gray-300 py-4 max-w-[700px] font-bold'>I specialize in crafting stylish digital experiences and responsive web applications. By leveraging modern development practices and intuituve UI/UX desing principles, I create digital products that not only stand out but also perform seamlessly.  </p>
            <div>
            <button href='/theworks' className='text-white group border-2 px-6 py-3 my-2 flex items-center transition-colors duration-200 hover:bg-red-600 hover:border-green-400'><Link 
             to="theworks" 
             spy={true} 
             smooth={true} 
             duration={500}>
             The Works...
            </Link><span className='group-hover:rotate-90 duration-200'> <HiArrowNarrowRight className='ml-4'/></span></button>

        </div>
        </div>

        </div>
    );
    }

export default Home;