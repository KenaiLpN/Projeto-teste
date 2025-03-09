import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Rating, ThinStar } from '@smastrom/react-rating'




import "@smastrom/react-rating/style.css"; // Importação do CSS da biblioteca


export function ItemCard(){
  const [liked, setLiked] = useState(false);
  const [rating, setRating] = useState(0); // Estado para armazenar a avaliação

  function toggleLike() {
    setLiked(!liked);

} 

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9'
}


    return(


<div>
  <div className="flex flex-col bg-white w-80 h-110 rounded">


      <img src="/src/assets/Bitmap.png" alt="image 1" className="h-full w-full object-cover"/>

     
      
      <p className="font-bold ml-5 mt-3">Apple Watch Series 4</p> 


      <div className="grid grid-cols-2 ml-5">
      <p className="text-[#2b80ff96] font-bold ">$120.00</p>
      
      {/* Botão de Like */}
      <button
            onClick={toggleLike}
            className="bg-gray-100 w-7 h-7 rounded-full flex items-center justify-center ml-25 hover:bg-gray-300">
            {liked ? (
              <FaHeart className="text-red-600" size={20} />
            ) : (
              <FaRegHeart className="text-red-600" size={20} />
            )}
      </button>
      <div className="flex mb-2">
        <Rating
          className=" flex h-10"
          value={rating}
          onChange={setRating}
          itemStyles={myStyles}
        />
        </div>

   </div>
      <button className=" bg-[#dee5ee] w-30 h-10 rounded ml-5 mb-2 text-black hover:bg-gray-300">Edit Product</button>
      
   
  </div>
</div>

)}








{/* <div>
  <div className="flex flex-col bg-white w-80 h-110 rounded">


      <img
        src="/src/assets/Bitmap.png"
        alt="image 1"
        className="h-full w-full object-cover"
      />
     

      
      <p className="font-bold ml-5 mt-3">Apple Watch Series 4</p> 


      <div className="grid grid-cols-2 ml-5">
      <p className="text-[#2b80ff96] font-bold ">$120.00</p> */}
      
      {/* Botão de Like */}
      {/* <button
            onClick={toggleLike}
            className="bg-gray-100 w-7 h-7 rounded-full flex items-center justify-center ml-25 hover:bg-gray-300">
            {liked ? (
              <FaHeart className="text-red-600" size={20} />
            ) : (
              <FaRegHeart className="text-red-600" size={20} />
            )}
      </button>
      <div className="flex mb-2">
        <Rating
          className=" flex h-10"
          value={rating}
          onChange={setRating}
          itemStyles={myStyles}
        />
        </div>

   </div>
      <button className=" bg-[#dee5ee] w-30 h-10 rounded ml-5 mb-2 text-black hover:bg-gray-300">Edit Product</button>
      
   
  </div>
</div> */}