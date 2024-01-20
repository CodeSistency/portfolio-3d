import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const HtmlProjectDetail = ({project, toggle}) => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 50000);
    }, []);
    console.log(project)
    return(
      <>
      <Html>
      <div className="fixed w-full h-screen ">
      
      <div className={`flex relative flex-col h-5/6 items-center w-5/6 border-[#522b5b] bg-white z-20 p-5 rounded overflow-hidden ${isVisible ? 'transform translate-y-0 transition-transform duration-500' : 'transform translate-y-[-300%]'}`}>
          <IoMdCloseCircle onClick={toggle} className='absolute top-4 right-4'/>
          <p className='text-xl mb-3'>contenido</p>
      </div>
  
        </div> 
      </Html>
       
      </>
    )
  }

  export default HtmlProjectDetail