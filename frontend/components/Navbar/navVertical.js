import React from "react";
// import NavImage from "../images/navlogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faHeart, faHome, faPlusSquare, faSearch } from '@fortawesome/free-solid-svg-icons';
// import Image from "next/image";

const navVertical = () => {
    return ( 
        <>
            <div className="vertical-nav-container flex flex-col bg-black h-screen w-60"> 
                <div className="mt-4">
                    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" className="w-40"/>
                    {/* <Image src="/components/images/navlogo.png" alt="logo" width={300} height={200}/> */}
                </div>

                <div className="ver-container-components flex flex-col mt-8 gap-4">
                    <div className="space-y-4">                
                        <p className="text-white"><FontAwesomeIcon icon={faHome} className="mr-2 ml-4" />Home</p>
                        <p className="text-white"><FontAwesomeIcon icon={faSearch} className="mr-2 ml-4" />Search</p>
                        <p className="text-white"><FontAwesomeIcon icon={faBookOpen} className="mr-2 ml-4" />Your Library</p>
                    </div>

                    <div className="mt-8 space-y-4">
                        <p className="text-white"><FontAwesomeIcon icon={faPlusSquare} className="mr-2 ml-4" />Create Playlist</p>
                        <p className="text-white"><FontAwesomeIcon icon={faHeart} className="mr-2 ml-4" />Liked Songs</p>
                    </div>
                </div>

                <div className="privacy-section flex flex-col justify-end h-screen gap-2 text-xs ">
                     <p className="text-white">Legal</p>
                     <p className="text-white">Privacy centre</p>
                     <p className="text-white">Privacy Policy</p>
                     <p className="text-white">Cookies</p>
                     <p className="text-white">About ads</p>
                </div>
            </div>
        </>
     );
}
 
export default navVertical;