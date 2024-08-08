import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';   

import { links } from '../data/dummy' ;
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  return (
   <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
    {/* the above div for sidebar main shape and size */}
     {activeMenu && (
     <>
     <div className="flex justify-between items-center">
      {/* the above div for logo and name */}
        <Link to="/" onClick={handleCloseSideBar}
        className='items-center gap-3 ml-3 mt-4 flex text-xl font-bold
         tracking-tight dark:text-white text-[#E03E3E]'>
          <SiShopware /> <span>Co-graph</span>
        </Link>
        <TooltipComponent content="Close" position='BottomCenter'>
          {/* button below is for small devices close button */}
          <button 
            type='button'
            onClick={()=> setActiveMenu((prevActiveMenu) =>!prevActiveMenu)}
            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
          >
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
     </div>
     <div className='mt-10'>
      {links.map((item)=>(
        <div key={item.title}>
          {/* these map callback function for title of menus like dashboard, pages etc.. */}
          <p className='text-gray-500 m-3 mt-4 font-bold'>
          {item.title}
          </p>
          {item.links.map((link)=>(
            <NavLink
            to={`/${link.name}`}
            key={link.name}
            onClick={handleCloseSideBar}
            className={({isActive})=>
            isActive ? activeLink :
          normalLink}
            >
              {/* The above activeLink and normal links was className actually */}
            {link.icon}
            {link.name}
            </NavLink>
          ))}
        </div>
      ))}

     </div>
     </>)}
   </div>
  )
}

export default Sidebar
