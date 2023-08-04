import React from 'react'

const About = () => {
  return (
    <div name="about"
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20'>
            Hi...I am Aayushi. I'm 23 year old.I am currently pursuing my computer Engineering bachelor's degree from LDRP Institue of Technology and Research , Gandhinagar. Desire to be a full stack devloper.
        </p>
        <br />

        <p className='text-xl'>I am from Chikhli which has district Navasari. My schooling is from D.E.Italia Sarvajanik High School , Chikhli. And also I passed 12th from A.B. school, kaliyawadi , Navasari. <br /> My hobbie is Painting, Playing Guitar - specially Classical Music , Reading books, Listening Songs and go for long walk.  
        </p>
      </div>
    </div>
  )
}

export default About
