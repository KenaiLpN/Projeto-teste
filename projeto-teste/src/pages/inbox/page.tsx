import ComposeButton from "../../components/inboxbarbuttons/composebutton";
import { MdOutlineEmail, MdMoveToInbox  } from "react-icons/md";
import { FaRegStar, FaChevronLeft,FaChevronRight, FaRegTrashAlt  } from "react-icons/fa";
import { SlPencil } from "react-icons/sl";
import { IoWarningOutline, IoSquareOutline, IoPaperPlaneOutline } from "react-icons/io5";
import { LuMessageCircleWarning } from "react-icons/lu";
import { IoIosInformationCircle, IoMdTrash } from "react-icons/io";
import { useState, useEffect } from "react";
import Checkbox from "../../components/checkbox/checkbox";
import FavoriteButton from "../../components/checkbox/favoritebutton";





export default function InboxPage() {
  const [activeMenu, setActiveMenu] = useState("inbox");
  

  return (
      <div className="m-10 mt-10">
          {/* Título separado */}
          <h2 className="text-3xl font-bold">Inbox</h2>

          {/* Layout principal */}
          <div className="flex items-baseline">
              {/* Sidebar */}
              <div className=" bg-white px-5 rounded-2xl">
                  <div className="flex flex-col rounded bg-white">
                      <div className="flex"> 
                          <ComposeButton nome={"+ Compose"} />
                      </div>

                      {/* Inboxbar */}
                      <div className="h-175">
                          <h1 className="mt-6 mb-6 font-bold">My Email</h1>
                          <div className="w-55 flex flex-col">
                              <button onClick={() => setActiveMenu("inbox")} className={`flex font-medium py-3 rounded ${activeMenu === "inbox" ? "bg-[#E6EEFF] text-blue-500" : "text-black hover:bg-blue-400 hover:text-white"}`}>
                                  <MdOutlineEmail className="h-6 w-15" />Inbox
                              </button>
                              <button onClick={() => setActiveMenu("starred")} className={`flex font-medium py-3 rounded ${activeMenu === "starred" ? "bg-[#E6EEFF] text-blue-500" : "text-black hover:bg-blue-400 hover:text-white"}`}>
                              <FaRegStar className="h-5 w-15" />Starred
                              </button>
                              <button onClick={() => setActiveMenu("sent")} className={`flex font-medium py-3  rounded ${activeMenu === "sent" ? "bg-[#E6EEFF] text-blue-500" : "text-black hover:bg-blue-400 hover:text-white"}`}>
                              <IoPaperPlaneOutline className="h-5 w-15" />Sent
                              </button>
                              <button onClick={() => setActiveMenu("draft")} className={`flex font-medium py-3 rounded ${activeMenu === "draft" ? "bg-[#E6EEFF] text-blue-500" : "text-black hover:bg-blue-400 hover:text-white"}`}>
                              <SlPencil className="h-5 w-15" />Draft
                              </button>
                              <button onClick={() => setActiveMenu("spam")} className={`flex font-medium py-3 rounded ${activeMenu === "spam" ? "bg-[#E6EEFF] text-blue-500" : "text-black hover:bg-blue-400 hover:text-white"}`}>
                              <IoWarningOutline className="h-5 w-15"/>Spam
                              </button>
                              <button onClick={() => setActiveMenu("important")} className={`flex font-medium py-3 rounded ${activeMenu === "important" ? "bg-[#E6EEFF] text-blue-500" : "text-black hover:bg-blue-400 hover:text-white"}`}>
                              <LuMessageCircleWarning className="h-5 w-15"/>Important
                              </button>
                              <button onClick={() => setActiveMenu("bin")} className={`flex font-medium py-3 rounded ${activeMenu === "bin" ? "bg-[#E6EEFF] text-blue-500" : "text-black hover:bg-blue-400 hover:text-white"}`}>
                              <FaRegTrashAlt className="h-5 w-15"/>Bin
                              </button>
                          </div>

                          {/* Parte Final da Sidebar */}
                          <div className="flex flex-col w-60">
                              <h1 className="mt-6 mb-3 font-bold">Label</h1>
                              <button className="flex font-medium py-3 rounded" >
                              <IoSquareOutline className="h-5 w-15 text-[#2B7FFF]"/>Primary
                              </button>

                              <button className="flex font-medium py-3 rounded" >
                              <IoSquareOutline className="h-5 w-15 text-[#F0B100]"/>Social
                              </button>
                              
                              <button className="flex font-medium py-3 rounded" >
                              <IoSquareOutline className="h-5 w-15 text-[#00C951]"/>Work
                              </button>
                              
                              <button className="flex font-medium py-3 rounded" >
                              <IoSquareOutline className="h-5 w-15 text-[#AD46FF]"/>Friends
                              </button>
                              
                          </div>
                      </div>
                  </div>
              </div>

              {/* Conteúdo do Menu Ativo */}
              <div className="w-3/4 p-5">
                  {activeMenu === "inbox" && <InboxContent />}
                  {activeMenu === "starred" && <StarredContent />}
                  {activeMenu === "sent" && <SentContent />}
                  {activeMenu === "draft" && <DraftContent />}
                  {activeMenu === "spam" && <SpamContent />}
                  {activeMenu === "important" && <ImportantContent />}
                  {activeMenu === "bin" && <BinContent />}
              </div>
          </div>
      </div>
  );
}

interface Email {
    id: number;
    from: string;
    message: string;
    time_received: string;
    category: string;
}
// Componentes para cada menu
const InboxContent = () => {
    const [emails, setEmails] = useState<Email[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const emailsPerPage = 12; // Quantos e-mails serão exibidos por página
  

    // Buscar dados do JSON
    useEffect(() => {
        fetch("/emails.json") // Substitua pelo caminho correto do arquivo JSON
            .then(response => response.json())
            .then(data => setEmails(data.emails))
            .catch(error => console.error("Erro ao carregar e-mails:", error));
    }, []);


      // Cálculo para paginação
  const totalPages = Math.ceil(emails.length / emailsPerPage);
  const indexOfLastEmail = currentPage * emailsPerPage;
  const indexOfFirstEmail = indexOfLastEmail - emailsPerPage;
  const currentEmails = emails.slice(indexOfFirstEmail, indexOfLastEmail);

  // Função para alterar a página
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

    return (
        <div className="">
        {/* Barra de pesquisa e botões */}
        <div className="flex bg-white shadow-md rounded-t-2xl items-center justify-between">
          <input 
            id="searchbutton"  
            type="text"  
            placeholder="Search" 
            className="bg-[#F0F0F4] rounded-3xl text-center mt-7 ml-5 h-9 border border-gray-300"
          /> 
          <div className="flex mr-10 mt-2">
            <button className="flex items-center justify-center bg-gray-100 border border-gray-400 rounded-l-2xl p-3 hover:bg-gray-200">
              <MdMoveToInbox className="h-6 w-6" />
            </button>
            <button className="flex items-center justify-center bg-gray-100 border border-gray-400 p-3 hover:bg-gray-200">
             <IoIosInformationCircle className="h-6 w-6" />
            </button>
            <button className="flex items-center justify-center bg-gray-100 border border-gray-400 rounded-r-2xl p-3 hover:bg-gray-200">
              <IoMdTrash className="h-6 w-6" />
            </button>
          </div>
        </div>
  
        {/* Lista de e-mails */}
        <div className="z-50">
          {currentEmails.length > 0 ? (
            currentEmails.map((email) => (
              <div key={email.id} className="bg-white shadow-md p-2">
                <div className="grid grid-cols-6 items-center w-300">
                    <div className="flex">
                  <Checkbox />
                  <FavoriteButton />
                  </div>
                  <h3 className="font-bold">{email.from}</h3>
                  <span className={`flex justify-center items-center h-10 w-20 text-sm rounded-full ${getCategoryColor(email.category)}`}>
                    {email.category}
                  </span>
                  <div className="flex w-150">
                  <p className="text-gray-600">{email.message}</p>
                  
                  </div>
                  <span className="flex justify-end text-sm text-gray-400">{email.time_received}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center mt-5">Carregando e-mails...</p>
          )}
        </div>
  
        {/* Botões de Paginação */}
        <div className="flex justify-end mt-1">
          <button
           
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
             className="px-3 py-1 border border-gray-300 rounded-l hover:bg-gray-200"
          >
          <FaChevronLeft />
          </button>
          
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-gray-300 rounded-r hover:bg-gray-200"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    );
  };
  

// Função para definir cor das categorias
const getCategoryColor = (category: string) => {
    switch (category) {
        case "Primary":
            return "bg-blue-500 text-white";
        case "Work":
            return "bg-green-500 text-white";
        case "Social":
            return "bg-yellow-500 text-black";
        case "Friends":
            return "bg-purple-500 text-white";
        default:
            return "bg-gray-300 text-black";
    }
};


const StarredContent = () => (
    <div className="mt-7.5"></div>
);

const SentContent = () => (
  <div className="mt-7.5"></div>
);

const DraftContent = () => (
  <div className="mt-7.5"></div>
);

const SpamContent = () => (
  <div className="mt-7.5"></div>
);

const ImportantContent = () => (
  <div className="mt-7.5"></div>
);

const BinContent = () => (
  <div className="mt-7.5"></div>
);
