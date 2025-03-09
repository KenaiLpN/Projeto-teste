import { NavLink } from "react-router-dom"

import { AiOutlineDashboard } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { VscChecklist } from "react-icons/vsc";
import { LiaDatabaseSolid } from "react-icons/lia";
import { LiaGiftSolid } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { GoPeople } from "react-icons/go";
import { MdOutlinePayments } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";
import { BiMessageAltDetail } from "react-icons/bi";
import { LiaTableSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
 

export function NavBar(){

  const baseLinkClass = "flex items-center ml-5 font-medium py-4 px-3 gap-5 rounded hover:text-white hover:bg-blue-500" // Design padrão dos botões
   const active = "bg-blue-500 text-white" // Design dos botões que estão ativos
   const inactive = "text-black" //Design dos botões inativos


  return(
  

    <nav className="flex flex-col">
    {/* Sidebar */}
      <div className="flex mt-15 w-50 text-center justify-center mb-5  1">
 </div>
      <div className="flex flex-col w-60 md:w-65">
            <div className="w-60 flex flex-col border-b border-gray-200">
              <NavLink className={({isActive}) =>`${baseLinkClass} ${isActive ? active : inactive}`} to="/src/pages/dashboard"><AiOutlineDashboard className="text-2xl"/>Dashboard</NavLink>
              <button className="flex items-center ml-5 font-medium py-4 px-3 gap-5 rounded text-black hover:text-white hover:bg-blue-500"><RxDashboard className="text-2xl"/>Products</button>
              <NavLink className={({isActive}) =>`${baseLinkClass} ${isActive ? active : inactive}`} to="/src/pages/favorites"><FaRegHeart className="text-2xl"/>Favorites</NavLink>
              <NavLink className={({isActive}) =>`${baseLinkClass} ${isActive ? active : inactive}`} to="/src/pages/inbox"><HiOutlineChatAlt2 className="text-2xl"/>Inbox</NavLink>
              <button className="flex items-center ml-5 font-medium py-4 px-3 gap-5 rounded text-black hover:text-white hover:bg-blue-500"><VscChecklist className="text-2xl"/>Order Lists</button>
              <button className="flex items-center ml-5 font-medium  mb-2 py-4 px-3 gap-5 rounded text-black hover:text-white hover:bg-blue-500"><LiaDatabaseSolid className="text-2xl"/>Product Stock</button>
            </div>  
            {/* Parte Central da Sidebar */}
            <div className="flex flex-col">
              <h2 className="ml-12 text-xs mt-5 font-bold opacity-40">PAGES</h2>
               <div className="w-60 flex flex-col border-b border-gray-200">
                <button className="flex items-center ml-5 font-medium py-2 px-3 gap-5 mt-3 rounded text-black hover:text-white hover:bg-blue-500"><LiaGiftSolid className="text-2xl"/>Pricing</button>
                <button className="flex items-center ml-5 font-medium py-2 px-3 gap-5 rounded text-black hover:text-white hover:bg-blue-500"><SlCalender className="text-2xl"/>Calender</button>
                <button className="flex items-center ml-5 font-medium py-2 px-3 gap-5 rounded text-black hover:text-white hover:bg-blue-500"><LiaNotesMedicalSolid className="text-2xl"/>To-Do</button>
                <button className="flex items-center ml-5 font-medium py-2 px-3 gap-5 rounded text-black hover:text-white hover:bg-blue-500"><BiMessageAltDetail className="text-2xl"/>Contact</button>
                <button className="flex items-center ml-5 font-medium py-2 px-3 gap-5 rounded text-black hover:text-white hover:bg-blue-500"><MdOutlinePayments className="text-2xl"/>Invoice</button>
                <button className="flex items-center ml-5 font-medium py-2 px-3 gap-5 rounded text-black hover:text-white hover:bg-blue-500"><ImStatsBars className="text-2xl"/>UI Elements</button>
                <button className="flex items-center ml-5 font-medium py-2 px-3 gap-5 rounded text-black hover:text-white hover:bg-blue-500"><GoPeople className="text-2xl"/>Team</button>
                <button className="flex items-center ml-5 font-medium mb-2 py-2 px-3 gap-5 rounded text-black hover:text-white hover:bg-blue-500"><LiaTableSolid className="text-2xl"/>Table</button>
               </div>
            </div>
            {/* Parte Final da Sidebar */}
            <div className="flex flex-col w-60">
              <button className="flex items-center ml-5 font-medium py-4 px-3 gap-5 mt-2 rounded text-black hover:text-white hover:bg-blue-500"><IoSettingsOutline className="text-2xl"/>Settings</button>
              <button className="flex items-center ml-5 font-medium py-4 px-3 gap-5 rounded text-black hover:text-white hover:bg-blue-500"><FaPowerOff className="text-2xl"/>Logout</button>
            </div>
      </div>

    </nav>
        


     
    
)}