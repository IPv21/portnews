import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Mongo from '../assets/mongo.png';

export const Theskills = () => {
  return (
<div>
<div name='theskills'className='pl-[20px] sm:pl-[75px]  text-gray-300 bg-[#1b0e45]'>
        <p className='text-4xl font-bold'><span className='border-b-4 border-red-600'>The Skills...</span></p>
        <p className='text-2xl font-bold py-4'>These are some of the technologies I have learned thus far...</p>

  </div>

<div name="theskills" class="container">
  <div class="box">
    <span></span>
    <div class="content">
      <h2>MongoDB</h2>
      <img className='w-20 mx-auto' src={Mongo} alt="Mongo" />
      
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>JavaScript</h2>
      <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript" />
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>HTML</h2>
      <img className='w-20 mx-auto' src={HTML} alt="HTML" />
     
    </div>
  </div>

  <div class="box">
    <span></span>
    <div class="content">
      <h2>CSS</h2>
      <img className='w-20 mx-auto' src={CSS} alt="CSS" />
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>React</h2>
      <img className='w-20 mx-auto' src={ReactImg} alt="React" />
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>GitHub</h2>
      <img className='w-20 mx-auto' src={GitHub} alt="GitHub" />
    </div>
  </div>

</div>
</div>
  
  
  )
}

export default Theskills;