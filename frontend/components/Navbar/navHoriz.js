import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const navVertical = () => {
    return ( 
        <>
            <div className="horiz-nav-container flex justify-end bg-black w-full h-20">
                {/* <div className="arrows flex">
                    <FontAwesomeIcon icon={faArrowLeft} className="ml-16" />
                    <FontAwesomeIcon icon={faArrowRight} className="ml-16" />
                </div> */}

                <div className="flex gap-4 justify-end mr-32">
                    <a className="text-white mt-6 text-xl hover:text-red-500 hover:scale-105 transition duration-300 cursor-pointer">Premium</a>
                    <a className="text-white mt-6 text-xl">Support</a>
                    <a className="text-white mt-6 text-xl">Download</a>
                </div>

                <div className="signup-login flex gap-16 justify-end mr-16">
                    <h2 className="text-white mt-6 text-xl">Sign Up</h2>
                    <button class="bg-white text-black rounded-full h-12 px-8 py-2 mt-4">Log In</button>
                </div>

            </div>
        </>
    );
}
 
export default navVertical;