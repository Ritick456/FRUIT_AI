import React, { useState } from 'react';


const Translator = () => {
  const [text, setText] = useState('');

  const handleTranslate = () => {
    // Implement your translation logic here
    console.log('Translating:', text);

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">Translator</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Enter Your Text</label>
          <input
            type="text"
            placeholder="Enter Your Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          onClick={handleTranslate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Translate
        </button>
      </div>
    </div>
  );
};

export default Translator;