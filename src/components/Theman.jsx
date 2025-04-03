import React from 'react'


const Theman = () => {
  return (
      <div name='theman' className='sm:pl-[75px] w-full h-screen  bg-[#1b0e45] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-red-600'>
                The Man...
              </p>
            </div>
            <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. My name's Matt. Thank you for taking a few minutes to stop by.</p>            
            </div>

            <div>
              <p>I was born in California, USA, raised in Lancaster, Pennsylvania, and settled in Philadelphia after the COVID-19 lockdowns. Reflecting on my career journey, it has been filled with exciting and unexpected turns. My experience in the culinary arts has been diverse, from working as a sous chef at a prestigious 5-star restaurant to training various team members. My passion for the culinary sector remains strong. However, driven by my love for computers, design, and problem-solving, I decided to switch career paths to web development. After researching various courses, I enrolled in the UPenn LPS Coding Bootcamp. Having spent time honing my skills through a few small projects and freelance work, I'm ready to take another step in my career.</p>  

              <p>A dedicated team member with a passion for learning, I'm looking for a
                company that will allow me to learn and grow as a developer. An avid
                runner, I have completed several half marathons and one full marathon.
                The mental toughness and dedication required to complete a marathon is
                something I bring to every aspect of my life. I'm looking forward to
                bringing that same dedication to my new career.</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Theman;