import {useParams} from "react-router";
import useFetch from "../Custom Hooks/useFetch";
import {useState} from "react";import React from 'react';
import "./Novels.css";

 import {NovelsData } from '../../assets/NovelsData';
import NovelsCard from './NovelsCard';

const Novels = () => {
    const {id} = useParams();
    const[name, changeName] = useState('1');
    const {blogs,changeBlogs, error} = useFetch(`http://localhost:8000/Shows/${name}`);
    console.log(name);
    return (
        <div className="section-container">
     
        <div className="novel-cards-container">
        
           {NovelsData.map(({
               novelName,
               novelDescription,
               imageUrl,
               novelUrl,

           })=>{
               return <NovelsCard
               novelName={novelName}
               novelDescription={novelDescription}
               novelUrl={novelUrl}
               imageUrl={imageUrl}/>
               

           })}
         </div>
      
        </div>
    )
}

export default Novels
