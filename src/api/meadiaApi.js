import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXLES_KEY=import.meta.env.VITE_PEXLES_KEY
//const TENOR_KEY=import.meta.env.VITE_TENOR_KEY
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;

export async function fetchPhotos(query, page = 1, per_page = 20) {

    const res = await axios.get("https://api.unsplash.com/search/photos",{
        params: { query, page, per_page },
        headers: {Authorization: `Client-ID ${UNSPLASH_KEY}`,  },
      });

    return res.data

}


export async function fetchVideo(query, per_page = 35) {

    const res = await axios.get("https://api.pexels.com/videos/search",{
        params: { query, per_page },
        headers: {Authorization:PEXLES_KEY},
      });

    return res.data

}

export async function fetchGIF(query,limit=40) {

    const res = await axios.get("http://api.giphy.com/v1/gifs/search",{
        params: {q:query,api_key:GIPHY_KEY,limit },
        
      });

    return res.data
}


