// our custom hooks to reduce random and tag replication

import React from "react";

const randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);

    const { data } = await axios.get(tag?tagMemeurl:randomMemeurl); data);
    const imageSource = data.data.image.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
};

export default useGif;
