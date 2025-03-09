interface InboxButtonProp{
     nome:string;
}


export default function InboxButton({nome}:InboxButtonProp){
    return(
      <div>
         <button className="flex items-center mt-5 py-2 px-20 gap-5 rounded text-white bg-[#5B8DFF] hover:bg-blue-600">{nome}</button>
      </div>
    
    )}

  