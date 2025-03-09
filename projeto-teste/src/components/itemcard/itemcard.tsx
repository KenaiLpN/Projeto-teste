import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@smastrom/react-rating/style.css";

export function ItemCard() {
  const [liked, setLiked] = useState(false);
  const [rating, setRating] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0); // Estado para armazenar o slide atual
  const carouselRef = useRef<Carousel | null>(null);

  const toggleLike = () => setLiked(!liked);

  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };

  const images = [
    "/src/assets/Bitmap.png",
    "/src/assets/Bitmap.png",
    "/src/assets/Bitmap.png",
  ];

  // Função para mudar o slide
  const goToSlide = (index: number) => {
    if (index < 0) index = images.length - 1; // Volta ao último slide se negativo
    if (index >= images.length) index = 0; // Retorna ao primeiro slide se passar do limite
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col bg-white w-80 h-auto rounded-2xl shadow-lg">
      {/* Container do carousel (Agora relative para conter os botões dentro) */}
      <div className="relative">
        <Carousel
          showThumbs={false}
          infiniteLoop
          showArrows={false}
          selectedItem={currentSlide} // Controla o slide atual
          onChange={(index) => setCurrentSlide(index)} // Atualiza o estado quando o usuário muda de slide
          ref={carouselRef}
          showStatus={false}
        >
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Produto ${index + 1}`}
                className="h-70 w-full object-cover rounded-t-2xl"
              />
            </div>
          ))}
        </Carousel>

        {/* Botões de navegação personalizados dentro do carousel */}
        <button
          className="absolute top-1/2 left-3 transform -translate-y-1 bg-gray-200 bg-opacity-50 text-gray-500 p-2 rounded-full hover:bg-opacity-80"
          onClick={() => goToSlide(currentSlide - 1)}
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          className="absolute top-1/2 right-3 transform -translate-y-1 bg-gray-200 bg-opacity-50 text-gray-500 p-2 rounded-full hover:bg-opacity-80"
          onClick={() => goToSlide(currentSlide + 1)}
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Nome do produto */}
      <p className="font-bold ml-5 mt-5">Apple Watch Series 4</p>

      <div className="grid grid-cols-2 ml-5 mt-1">
        <p className="text-[#2b80ff96] font-bold">$120.00</p>

        {/* Botão de Like */}
        <button
          onClick={toggleLike}
          className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center ml-20 hover:bg-gray-300"
        >
          {liked ? (
            <FaHeart className="text-red-600" size={20} />
          ) : (
            <FaRegHeart className="text-red-600" size={20} />
          )}
        </button>
      </div>

      {/* Avaliação do produto */}
      <div className="flex ml-5 mb-2 w-40">
        <Rating
          className="h-10"
          value={rating}
          onChange={setRating}
          itemStyles={myStyles}
        />
      </div>

      {/* Botão de Editar */}
      <button className="bg-[#dee5ee] w-30 h-10 rounded ml-5 mb-2 text-black hover:bg-gray-300">
        Edit Product
      </button>
    </div>
  );
}
