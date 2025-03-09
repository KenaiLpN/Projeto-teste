
import { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function UserDropDown() {
    const [selectedUser, setSelectedUser] = useState(null);
    const users = [
        { name: 'Roni Roy', code: 'NY' },
        { name: 'Leu', code: 'RM' },
      
    ];

    return (
        <button className="flexrounded-full h-5 items-center justify-center mt-1 w-30">
            <Dropdown 
            value={selectedUser}
             onChange={(e) => setSelectedUser(e.value)} 
             options={users} 
             optionLabel="name"
            className="items-center justify-center text-black bg-white border-gray-300 rounded-md px-2 py-1 gap-5"  
            panelClassName="bg-white border border-gray-300 shadow-lg rounded-md p-2"
            />
        </button>
    )
}
        