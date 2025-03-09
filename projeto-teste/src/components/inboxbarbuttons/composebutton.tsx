interface ButtonProp {
  nome:string;
}


export default function ComposeButton({nome}:ButtonProp){
    return(
      <div>
         <button className="flex items-center mt-5 ml-2 py-3 px-17 gap-5 rounded text-white bg-[#5B8DFF] hover:bg-blue-600">{nome}</button>
      </div>
    
    )}

  