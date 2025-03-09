
import { HiMiniBars3 } from "react-icons/hi2";
import UserDropDown from "../dropdownbutton/userdropdown"
import LanguageDropDown from "../dropdownbutton/languagedropdown";
import NotificationButton from "../dropdownbutton/notificationbutton";

export default function TopBar(){

    return(
<header className="fixed top-0 left-0 w-full bg-white p-4 flex justify-between items-center z-50">
<div className="flex">
      <h1 className="font-bold font-sans text-blue-600 text-2xl ml-10 mt-1">Dash</h1>
      <h1 className="font-bold font-sans text-2xl mt-1">Stack</h1>
      </div>
      <div className="flex">
   
      </div>
  <nav className="flex">
    <ul className="flex gap-1">
      <li><button  className="text-3xl hover:bg-[#F0F0F4] rounded px-1 py-1 mr-6"><HiMiniBars3/></button></li>
      <li><input 
      id="searchbutton"  
      type="text"  
      placeholder="Search" 
      className="bg-[#F0F0F4] rounded-3xl text-center px-25 h-9 mt-1 border border-gray-300 mr-155"
      /></li>
      <li><NotificationButton/></li>
      <li><LanguageDropDown/></li>
      <li><img className= "h-10 w-10"
      src="/src/assets/Imagem de perfi.png" 
      alt="" 
      /></li>
      <li><UserDropDown/></li>
      
    </ul>
  </nav>
</header>



)}