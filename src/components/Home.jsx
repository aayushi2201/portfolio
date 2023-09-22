import React from 'react'
import MyImage from '../assets/myImage.jpg'
// import {FaPersonWalkingDashedLineArrowRight} from 'react-icons';
import {TbArrowRightRhombus} from 'react-icons/tb'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Front End Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>I am currently a Student. My desire to be a Successful Full Stack Devloper.
            Currently, I love to work on Web    application using technologies like JavaScript, React, Tailwind and Other.
            </p>

            <div>
                <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-purple-950 cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'> <TbArrowRightRhombus size={27} className='ml-2'/>
                    </span>
                </Link>
            </div>
        </div>
        <div>
            <img src={MyImage} alt="my Profile"
            className='rounded-2xl mx-auto w-2/5 h-3/7 mr-2' />
            {/* md:w-full */}
        </div>
      </div>
    </div>
  )
}

export default Home;
