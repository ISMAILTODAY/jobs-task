import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShowDetails = () => {
    const {id}= useParams();
    const [allDetails, setAllDetails]= useState([]);
    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res=> res.json())
        .then(data=> {
            setAllDetails(data)
        },);
     },[])
     const details= allDetails.find(detail=> detail.show.id == id);
    return (
        <div className='d-flex justify-content-center gap-5 mt-5 pt-5'>
           <div className='w-25 shadow-lg rounded p-2'>
           <img className='img-fluid ' src={details?.show?.image.original} alt="" />
           <h1 className='text-center'>{details?.show.name}</h1>
           </div>
           <div className='w-50 shadow-lg rounded p-5'>
            <h1 className='text-center'>Movie Details</h1>
            <br/>
           <p><span className='fw-bold '>Name:</span> {details?.show?.name}</p>
           <p><span className='fw-bold '>Duration:</span> {details?.show?.averageRuntime} minutes</p>
           <p><span className='fw-bold '>Language:</span> {details?.show?.language}</p>
            <p><span className='fw-bold '>Summary:</span> {details?.show?.summary}</p>
            <div className='d-flex justify-content-center mt-5'>
                <Link> <button className='btn btn-primary'>Purchase Ticket</button> </Link>
            </div>
           </div>

        </div>
    );
};

export default ShowDetails;