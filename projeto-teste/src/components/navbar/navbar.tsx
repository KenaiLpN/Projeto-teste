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

   const baseLinkClass = "flex items-center ml-5 font-medium py-2 px-3 gap-5 rounded hover:text-white hover:bg-blue-500" // Design padrão dos botões
   const active = "bg-blue-500 text-white" // Design dos botões que estão ativos
   const inactive = "text-black" //Design dos botões inativos
 

  return(
  

    <nav className="flex flex-col">
    {/* Sidebar */}
      <div className="flex mt-15 w-50 text-center justify-center mb-5  1">
 </div>
      <div className="flex flex-col w-60 md:w-65">
            <div className="w-60 flex flex-col border-b border-gray-200 gap-1">
              <NavLink className={({isActive}) =>`${baseLinkClass} ${isActive ? active : inactive}`} to="/src/pages/dashboard"><AiOutlineDashboard className="text-2xl"/>Dashboard</NavLink>
              <NavLink className={({isActive}) =>`${baseLinkClass} ${isActive ? active : inactive}`} to="/src/pages/products"><RxDashboard className="text-2xl"/>Products</NavLink>
              <NavLink className={({isActive}) =>`${baseLinkClass} ${isActive ? active : inactive}`} to="/src/pages/favorites"><FaRegHeart className="text-2xl"/>Favorites</NavLink>
              <NavLink className={({isActive}) =>`${baseLinkClass} ${isActive ? active : inactive}`} to="/src/pages/inbox"><HiOutlineChatAlt2 className="text-2xl"/>Inbox</NavLink>
              <NavLink className={({isActive}) =>`${baseLinkClass} ${isActive ? active : inactive}`} to="/src/pages/orderlists"><VscChecklist className="text-2xl"/>Order Lists</NavLink>
              <NavLink className={({isActive}) =>`${baseLinkClass} ${isActive ? active : inactive}`} to="/src/pages/productstock"><LiaDatabaseSolid className="text-2xl"/>Product Stock</NavLink>
            </div>  
            {/* Parte Central da Sidebar */}
            <div className="flex flex-col">
              <h2 className="ml-12 text-xs mt-5 font-bold opacity-40 mb-2">PAGES</h2>
               <div className="w-60 flex flex-col  mb-2">
                <NavLink className={({isActive}) =>`${baseLinkClass} ${isActive ? active : inactive}`} to="/src/pages/pricing"><LiaGiftSolid className="text-2xl"/>Pricing</NavLink>
                <NavLink className={({isActive}) =>`${baseLinkClass} ${isActive ? active : inactive}`} to="/src/pages/calender"><SlCalender className="text-2xl"/>Calender</NavLink>
                <NavLink className={({isActive}) =>`${baseLinkClass} ${isActive ? active : inactive}`} to="/src/pages/todo"><LiaNotesMedicalSolid className="text-2xl"/>To-Do</NavLink>
                <NavLink className={({isActive}) =>`${baseLinkClass} ${isActive ? active : inactive}`} to="/src/pages/contact"><BiMessageAltDetail className="text-2xl"/>Contact</NavLink>
                <NavLink className={({isActive}) =>`${baseLinkClass} ${isActive ? active : inactive}`} to="/src/pages/invoice"><MdOutlinePayments className="text-2xl"/>Invoice</NavLink>
                <NavLink className={({isActive}) =>`${baseLinkClass} ${isActive ? active : inactive}`} to="/src/pages/uielements"><ImStatsBars className="text-2xl"/>UI Elements</NavLink>
                <NavLink className={({isActive}) =>`${baseLinkClass} ${isActive ? active : inactive}`} to="/src/pages/team"><GoPeople className="text-2xl"/>Team</NavLink>
                <NavLink className={({isActive}) =>`${baseLinkClass} ${isActive ? active : inactive}`} to="/src/pages/table"><LiaTableSolid className="text-2xl"/>Table</NavLink>
               </div>
            </div>
            {/* Parte Final da Sidebar */}
            <div className="flex flex-col w-60 border-t border-gray-200">
              <NavLink className={({isActive}) =>`${baseLinkClass} ${isActive ? active : inactive}`} to="/src/pages/settings"><IoSettingsOutline className="text-2xl"/>Settings</NavLink>
              <button className="flex items-center ml-5 font-medium py-2 px-3 gap-5 rounded hover:text-white hover:bg-blue-500"><FaPowerOff className="text-2xl"/>Logout</button>
            </div>
      </div>

    </nav>
        


     
    
)}