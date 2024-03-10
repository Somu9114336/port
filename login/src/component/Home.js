import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import NavBar from './NavBar';
import { Link } from "react-scroll";
import About from './About';
import Experience from './Experience';

import Portfolio from './Portfolio';
import SocialLinks from './SocialLinks';
import Contact from './Contact';


const Home = () => {
  
  return (
    <>
    <NavBar/>
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-yellow-500 py-4 max-w-md ">
           I am a fresher and Currently looking for a opportunitie to 
            prove my self. I love to work on web application using technologies 
            like React, node.js,  MongoDB.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
      
      <SocialLinks/>
      <About/>
      
      <Portfolio/>
      <Experience/>
      <Contact/>
      
     

    </div>
    </>
  );
};

export default Home;
