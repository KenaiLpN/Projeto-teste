import { useState } from "react";
import { FaBell } from "react-icons/fa6";


const NotificationButton = () => {
  const [open, setOpen] = useState(false);
  
  const notifications = [
    { id: 1, message: "Você recebeu uma nova mensagem" },
    { id: 2, message: "Seu pedido foi enviado" },
    { id: 3, message: "Nova atualização disponível" },
  ];

  return (
    <div className="relative mr-10 mt-1">
      {/* Botão de Notificações */}
      <button 
        onClick={() => setOpen(!open)} 
        className="relative p-2"
      >
        <FaBell className="h-5 w-5 text-blue-600" />
        {notifications.length > 0 && (
          <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Dropdown de Notificações */}
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 shadow-lg rounded-md p-3 z-50">
          <h3 className="text-gray-700 font-semibold mb-2">Notificações</h3>
          {notifications.length > 0 ? (
            <ul>
              {notifications.map((notif) => (
                <li key={notif.id} className="p-2 text-gray-600 border border-gray-100 hover:bg-gray-100 rounded-md cursor-pointer">
                  {notif.message}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">Nenhuma notificação</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationButton;
