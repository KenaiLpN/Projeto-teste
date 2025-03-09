import { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function LanguageDropDown() {
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const languages = [
        { name: 'Português', code: 'PT', flag: 'https://flagcdn.com/w40/br.png' },
        { name: 'English', code: 'EN', flag: 'https://flagcdn.com/w40/us.png' },
    ];

    return (
        <div className="flex items-center mr-10 w-50">
            <Dropdown 
                value={selectedLanguage} 
                onChange={(e) => setSelectedLanguage(e.value)} 
                options={languages} 
                optionLabel="name"
                className="gap-2 items-center justify-center text-black bg-white border-gray-300 px-2 py-1"
                panelClassName="bg-white border border-gray-300 shadow-lg p-2"
                placeholder="Select Language"
                valueTemplate={(option) => option ? (
                    <div className="flex items-center gap-2">
                        <img src={option.flag} alt={option.name} className="w-12 h-8 rounded" />
                        <span>{option.name}</span>
                    </div>
                ) : <span>Select Language</span>}
                itemTemplate={(option) => (
                    <div className="flex items-center gap-2">
                        <img src={option.flag} alt={option.name} className="w-5 h-5" />
                        <span>{option.name}</span>
                    </div>
                )}
            />
        </div>
    );
}
