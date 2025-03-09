import { useState } from 'react';

function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
      />
      <label className="ml-2 text-gray-700"></label>
    </div>
  );
}

export default Checkbox;