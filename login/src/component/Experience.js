import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import react from "../assets/react.png"
import node from "../assets/node.png"
import mongodb from "../assets/mongodb.jpg"
import github from "../assets/github.png"
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import express from "../assets/express.png";


function Skills() {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: 'shadow-blue-400'
    },
    {
      id: 3,
      src: javascript,
      title: "javascript",
      style: 'shadow-yellow-400'
    },
    {
      id: 4,
      src: react,
      title: "react",
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: java,
      title: "JAVA",
      style: 'shadow-red-600'
    },
    {
      id: 6,
      src: node,
      title: "node js",
      style: 'shadow-green-500'
    },
    {
      id: 7,
      src: mongodb,
      title: "MongoDB",
      style: 'shadow-green-600'
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: 'shadow-gray-300'
    },
    {
      id: 8,
      src: express,
      title: "EXpress js",
      style: 'shadow-gray-300'
    }
  ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 
       to-black w-full h-fullscreen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center
        w-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500
          p-2 inline'>Experience</p>
          <p className='py-6'>these are the tech i work with </p>

        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {
            tech.map(({ id, src, title, style }) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
              </div>
            ))
          }

        </div>


      </div>

    </div>
  )
}
export default Skills;