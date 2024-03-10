import React from "react";
import goa1 from "../assets/portfolio/goa1.jpg";
import ecomm from "../assets/portfolio/ecomm.jpg";
import staranger from "../assets/portfolio/staranger.jpg";
import todo from "../assets/portfolio/todo.jpeg";



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: goa1,
      titles:"Tour & Travel site",
    },
    {
      id: 2,
      src: ecomm,
      titles:"e-comm Dashboard",
    },
    {
      id: 3,
      src: staranger,
      titles:"top 5 netflix series",
    },
    {
      id: 4,
      src: todo,
      titles:"ToDo List",
    }
  ];

  return (
    <div
    
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h- fullscreen"
    >
      
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center px-12 sm:px-0">
          {portfolios.map(({ id, src,titles }) => (
            <div key={id} className=" rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
               
              />
             <p className='mt-4'>{titles}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
