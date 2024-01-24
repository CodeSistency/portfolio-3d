import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";

export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened, section } = props;
  
  useEffect(() => {
    console.log(section)
  }, [section])

  return (
    <>
    <div className="z-20 fixed top-4 right-4 md:top-12 md:right-12 w-13 h-full flex flex-col justify-between">
      <div>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="p-3 bg-indigo-600 w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      </div>
      {/* <div className="flex flex-col gap-2 items-center justify-around pb-3">
        <div className="flex flex-col justify-center items-center w-4 h-4 border border rounded-lg">
          
        </div>
        <div className="flex flex-col justify-center items-center w-4 h-4 border border rounded-lg">
          
        </div>
        <div className="flex flex-col justify-center items-center w-4 h-4 border rounded-lg ">
          
        </div>
        <div className="flex flex-col justify-center items-center w-4 h-4 border rounded-lg">
          
          </div>
      </div> */}
      {!menuOpened && 
      <div className="flex flex-col gap-2 items-center pb-20">
            <a href="https://www.linkedin.com/in/joseg-valero" target="_blank">
              <FaLinkedin size={40}/>
            </a>
            <a href="https://github.com/CodeSistency" target="_blank">
              <FaGithub size={40}/>
            </a>
        </div>}
    </div>
      {/* <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-4 right-4 md:top-12 md:right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button> */}
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-full md:w-80" : "w-0"}`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton label="About" onClick={() => onSectionChange(0)} />
          <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
          <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
          <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
        
        </div>
        <div className="w-full flex items-center justify-around pb-3">
            <a href="https://www.linkedin.com/in/joseg-valero" target="_blank">
              <FaLinkedin size={50}/>
            </a>
            <a href="https://github.com/CodeSistency" target="_blank">
              <FaGithub size={50}/>
            </a>
          </div>
      </div>
      
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
    >
      {label}
    </button>
  );
};
