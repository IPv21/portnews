import React from 'react'
import factors from '../assets/factors.png';
import connectus from '../assets/connectus.png'
import expense from '../assets/expense.png'
import primal from '../assets/primal.png'
import retreat from '../assets/retreatsport.png'
import firstsite from '../assets/firstsite.png'
import news from '../assets/hotnews.png'


const Theworks = () => {
  return (
    <div name='theworks' className='pt-[60px] vh-100% sm:pl-[75px] w-full  bg-[#1b0e45] text-gray-300'>
        <div className=' max-w-[1000px] mx-auto p-6 flex flex-col justify-center w-full h-full'>
           <div className='pb-10'>
                <p className='text-4xl font-bold inline border-b-4 border-red-600'>The Works...</p>
                <p className='py-6'>These are some of my recent projects...</p>
            </div> 

            {/* cont */}
            <div className='grid sm:grid-cols-2 pl-[20px] md:grid-cols-2 gap-8'>



            <div className="card" style={{ backgroundImage: `url(${factors})`, backgroundSize: 'cover' }}>
                <div className="card__content">
                 <p className="card__title">Factors</p>
                 <p className="card__description"> Factors is a search engine that allows users to search for an actor or actress and see what movies they have been in. It uses the OMDB API to make the calls and is deployed on Github Pages.
                 </p>
                 <a href="https://brousy.github.io/factors/">
                 <button class="btn-23">
                   <span class="text"></span>
                   <span class="marquee">Find EM!</span>
                 </button>
                    </a>
                </div>
            </div>

            <div className="card" style={{ backgroundImage: `url(${connectus})`, backgroundSize: 'cover' }}>
                <div className="card__content">
                 <p className="card__title">ConnectUs</p>
                 <p className="card__description">  ConnectUs is a powerful React application designed to streamline communication within a company across different departments. This project leverages GraphQL and MongoDB to  provide a seamless and efficient communication platform.
                 </p>
                 <a href="https://connectus943-7bbab6a61bad.herokuapp.com/">
                 <button class="btn-23">
                   <span class="text"></span>
                   <span class="marquee">Get Connected!</span>
                 </button>
                    </a>
                </div>
            </div>

            <div className="card" style={{ backgroundImage: `url(${primal})`, backgroundSize: 'cover' }}>
                <div className="card__content">
                 <p className="card__title">Primal Planner</p>
                 <p className="card__description"> Primal Planner is a fitness scheduling tool that allows users to plan their workouts. It offers features like user authentication for secure access, a database to store workouts, and API calls to fetch relevant fitness data. With Primal Planner, you can create a personalized workout plan and stay motivated on your fitness journey.
                 </p>
                 <a href="https://primalplanner-6f3879bf7f09.herokuapp.com/">
                 <button class="btn-23">
                   <span class="text"></span>
                   <span class="marquee">Get Pumped Up!</span>
                 </button>
                    </a>
                </div>
            </div>

            <div className="card" style={{ backgroundImage: `url(${expense})`, backgroundSize: 'cover' }}>
                <div className="card__content">
                 <p className="card__title">Jan's Expenses</p>
                 <p className="card__description"> Jan's Expenses is a PWA built with React that allows users to track their expenses and is deployed to GitHub Pages. 
                 </p>
                 <a href="https://ipv21.github.io/exp-react/">
                 <button class="btn-23">
                   <span class="text"></span>
                   <span class="marquee">Start Tracking!</span>
                 </button>
                    </a>
                </div>
            </div>

            <div className="card" style={{ backgroundImage: `url(${retreat})`, backgroundSize: 'cover' }}>
                <div className="card__content">
                 <p className="card__title">Edhati.org</p>
                 <p className="card__description"> Edhati.org is an existing  Wordpress site that offers career coaching and counceling services, as well as Wellness Retreats, that I maintained and redesigned. 

                 </p>
                 <a href="https://ipv21.github.io/exp-react/">
                 <button class="btn-23">
                   <span class="text"></span>
                   <span class="marquee">Show Me!</span>
                 </button>
                    </a>
                </div>
            </div>

            <div className="card" style={{ backgroundImage: `url(${news})`, backgroundSize: 'cover' }}>
                <div className="card__content">
                 <p className="card__title">Hot News!</p>
                 <p className="card__description"> Hot News! is a React application that allows users to search for news articles by keyword. It uses the News API to fetch the articles and is deployed on Vercel.
                 </p>
                 <a href="https://newsreact-5b1l-hve6tmogp-matthew-shumans-projects.vercel.app/">
                 <button class="btn-23">
                   <span class="text"></span>
                   <span class="marquee">Stay Informed</span> 
                 </button>
                    </a>
                </div>
            </div>

            </div>

        </div>
    </div>

    
    )
}


export default Theworks
