import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data} = await axios.get(url);
    const imageSource =data.data.image.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData(); }, [] )

  function clickHandler(event) {
    fetchData();
    event.preventDefault();
  }

  return (
    <div
      className="w-1/2  bg-cyan-300 border border-black flex flex-col
      items-center mt-4"
    >
      <h1 className="font-bold text-3xl underline"> Random Gif Generator</h1>
      {
        loading ? (<Spinner></Spinner>):(<img src={gif} width={450}></img>)

      }
      

      <button
        onClick={clickHandler}
        className="w-8/12 bg-slate-700 text-white
        text-lg py-2 rounded-lg mb-4"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
