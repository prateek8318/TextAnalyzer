import React, { useState } from 'react';

const TextAnalyzer = (props) => {
  const [text, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0); 

  const handleTextChange = (e) => {
    const text = e.target.value;
    setText(text);
    setWordCount(text.trim() ? text.trim().split(/\s+/).length : 0);
    setCharacterCount(text.length);
  };

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  const capitalize = () => {
    setText(text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
  };

  const toSentenceCase = () => {
    const sentences = text.split(/(?<=[.!?])\s+/).map(sentence => {
      sentence = sentence.trim().toLowerCase();
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    });
    setText(sentences.join(' '));
  };

  const removeExtraSpaces = () => {
    setText(text.replace(/\s+/g, ' ').trim());
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  const clearText = () => {
    setText('');
    setWordCount(0);
    setCharacterCount(0);
    alert('Text cleared!');
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${props.dark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className={`w-full max-w-xl p-4 ${props.dark ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <h2 className={`text-lg font-bold mb-6 ${props.dark ? 'text-white' : 'text-black'}`}>Enter your Text to Analyze</h2>
        <textarea
          className={`w-full h-40 p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 ${props.dark ? 'bg-black text-white border-black-600 focus:ring-blue-500' : 'bg-white border-black-300 focus:ring-blue-500'}`}
          value={text}
          onChange={handleTextChange}
          placeholder="Enter your text here..." 
        />
        <div className="flex justify-between mb-4">
          <p className={`text-gray-700 ${props.dark ? 'text-white' : 'text-black'}`}>Word Count: {wordCount}</p>
          <p className={`text-gray-700 ${props.dark ? 'text-white' : 'text-black'}`}>Character Count: {characterCount}</p>
        </div>
        <div className="space-x-3 mb-3">
          <button onClick={toUpperCase} className={`bg-blue-500 text-white py-1 px-1 rounded-md hover:bg-blue-600 ${props.dark ? 'bg-blue-900' : ''}`}>Uppercase</button>
          <button onClick={toLowerCase} className={`bg-blue-500 text-white py-1 px-1 rounded-md hover:bg-blue-600 ${props.dark ? 'bg-blue-900' : ''}`}>Lowercase</button>
          <button onClick={capitalize} className={`bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 ${props.dark ? 'bg-blue-900' : ''}`}>Capitalize</button>
          <button onClick={toSentenceCase} className={`bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 ${props.dark ? 'bg-blue-900' : ''}`}>Sentence Case</button>
          <button onClick={removeExtraSpaces} className={`bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 ${props.dark ? 'bg-blue-900' : ''}`}>Remove Extra Spaces</button>
          <button onClick={copyText} className={`bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 ${props.dark ? 'bg-blue-900' : ''}`}>Copy Text</button>
          <button onClick={clearText} className={`bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 ${props.dark ? 'bg-red-900' : ''}` }>Clear Text</button>
        </div>
        <div className="mb-4">
          <h3 className={`font-bold ${props.dark ? 'text-white' : 'text-gray-900'}`}>Preview:</h3>
          <p className={`border border-gray-300 p-2 rounded-lg ${props.dark ? 'bg-gray-800 text-white' : 'bg-white'}`}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TextAnalyzer;