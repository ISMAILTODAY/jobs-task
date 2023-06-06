
import { useEffect } from 'react';
import { useState } from 'react';
import ShowCard from './ShowCard/ShowCard';


const Home = () => {
    const [allData, setAllData]= useState([]);
    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res=> res.json())
        .then(data=> {
            setAllData(data)
        });
    },[])
    
    return (
       <div className='p-5'>
         <div className='row'>
          
          {
               allData?.map(show=> <ShowCard
               key={show.show.id}
               show={show}
               ></ShowCard> )
           }
         
       </div>
       </div>
    );
};

export default Home;