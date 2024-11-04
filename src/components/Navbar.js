import React, { useState } from 'react';

function Menu(props) {
  const [isOpen, setIsOpen] = useState(false);


  const toggleDarkMode = () => {
    if(props.dark){
        props.setDark(false);
    }else{
        props.setDark(true);
    }
   
  };
console.log(props.dark)
  return (
    <div>
      <nav className={`${props.setDark ? 'bg-black text-white' : 'bg-blue-500 text-black'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-white text-xl font-bold">Text Analyzer</a>
              <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">Home</a>
              <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">About</a>
              <a href="#" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md">Text-Changer</a>
            </div>
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={props.dark}
                  onChange={toggleDarkMode}
                />
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <div
                  className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${props.setDark ? 'transform translate-x-6' : ''}`}>
                </div>
              </div>
              <div className="ml-3 text-gray-700 dark:text-gray-300 font-medium">
                Dark Mode
              </div>
            </label>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-700 inline-flex items-center justify-center p-2 rounded-md text-white"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">Home</a>
              <a href="#" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">About</a>
              <a href="#" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Menu;