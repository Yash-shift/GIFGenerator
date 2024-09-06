import React from 'react';
import './App.css';
import Random from './Components/Random'
import Tag from './Components/Tag'

function App() {
  return (


    <div className=" relative bg-gradient-to-r from-sky-800 to-indigo-500 w-full  flex flex-col h-screen overflow-x-hidden">
      <h1 className=' bg-slate-300 rounded-xl w-11/12 text-center mt-8  px-10 ml-16 py-3 text-3xl  font-bold'>
        Hello, Gif Generator! 
      </h1>
      {/* <div className="flex flex-col w-full">
        <Random/>
        <Tag/>
      </div> */}
      
    </div>
  );
}

export default App;
