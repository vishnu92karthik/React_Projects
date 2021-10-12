import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import Anime from Anime
export default function App() {
  const [data, setData] = useState([]);
useEffect(() => {
  const axiosData = async () => {
const response = await axios('https://api.aniapi.com/v1/anime');
setData(response.data.documents)
  };
  axiosData();
},[])
 


  return (
    <div className = 'App'>
      <Anime data={data} setData={setData} />
    </div>
  )
  
}
