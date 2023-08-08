import React,{useEffect, useState} from "react";
import Typewriter from "typewriter-effect";
import imgh from "../images/homeimg.png" ;

const Home = ({daynight,setDaynight}) =>{

    return(
    <div className={`${daynight ? "bg-[#EEEDED]" : "bg-[#001C30]"} w-full h-screen `}>
       <div className="w-[90%] mx-auto md:flex md:justify-between md:pt-[8rem] pt-[5rem] px-[2rem]"> 
            {/* introduction starts here */}
            <div className={` ${daynight ? "text-black" :"text-[#DAFFFB]"} xl:text-5xl md:text-4xl  md:m-2 text-3xl mb-[3rem]`}>
                <div className=" ">
                    Hello <span className="inline-block 2.1s animate-wave">👋</span>
                </div>
                <div className="my-7">
                    I am Piush Singh
                </div>
                <div className="">
                     < Typewriter options={{
                        strings:['Frontend Developer',"UI Developer","React JS Developer"],
                        loop:true,
                        pauseFor:1000,
                        autoStart:true,
                     }}
                      />
                </div>
            </div>
            {/* introduction ends here */}



            {/* image starts here */}
            <div className="lg:mr-[6rem] md:mr-4">
                <img src={imgh} alt="image" className="lg:w-[32rem] xl:w-[36rem] md:w-[28rem]"/>
            </div>


            {/* image ends here */}
        </div>
    </div>

    )

}

export default Home;