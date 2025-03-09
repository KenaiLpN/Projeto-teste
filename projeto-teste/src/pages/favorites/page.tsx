import { ItemCard } from "../../components/itemcard/itemcard"

export default function FavoritesPage(){
    return(

<div>
   <h2 className="text-3xl font-bold mt-15 ml-10">Favorites</h2>
   <div className="grid grid-cols-4 gap-6 mt-5 ml-10 bg-[#F0F0F4]">

     <ItemCard/>
     <ItemCard/>
     <ItemCard/>
     <ItemCard/>
     <ItemCard/>
     <ItemCard/>
     <ItemCard/>
     <ItemCard/>
   </div>
   </div>
    

    )}