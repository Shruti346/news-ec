import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// import { Link } from 'react-router-dom';
// import Hooks from "react-router-dom"
// import Hero from './Hero'
const FetchData = ({ Cat }) => {
    const [Data, setData]=useState("");
    const fetchData = async () => {
        await axios
        .get(
            Cat
           ? `https://newsapi.org/v2/top-headlines?country=in&category=${Cat}&apiKey=172f744db2e040a4b7797ceb38482083`
           : "https://newsapi.org/v2/top-headlines?country=in&apiKey=172f744db2e040a4b7797ceb38482083  "
            )
            .then((res) => setData(res.data.articles));
    };
    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Cat]);
    // console.log(fetchData);
    return (
        <div className='container my-4'>
       <h3><u> TOP HEADLINES</u></h3>
           <div className=' container d-flex justify-content-center align-items-center flex-column my-2' style={{minheight:"100vh"}}>
            {Data ? Data.map((items, index)=>(
                <>
                <div className='container my-3 p-3' style={{width:"600px",boxShadow:"2px 2px 10px silver",borderRadius:"30px"}}>
                <h5 className='my-1'>{items.title}</h5>
           <div className='d-flex justify-content-center align-items-center flex-column my-2'>
                <img 
                src={items.urlToImage} 
                alt='/'
                className='img-fluid' 
                style={{
                    width:"auto",
                    height:"300px",
                    objectFit:"cover",
               }}/>
          </div>

            <p>{items.content}</p>
                <p className='my-1'>{items.description}</p>
                <a href={items.url} target='blank'>View More</a>
                </div>
                </>
            )) :"loading" }
       </div>
        
    </div>
  );
};

export default FetchData
