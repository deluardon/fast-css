// import React from 'react';

import { useEffect, useState } from "react";
import Job from "../../page/Service list/Job";




const Service = () => {

    const [data,SetData]=useState([]);
    useEffect(()=>{
        fetch('data.JSON')
        .then(res=>res.json())
        .then(data=>SetData(data))
     
        // console.log(data);
    },[])
    return (
        <div>
            {
                
                data.map(item=><Job key={item.id}data={item}></Job>)
            }
        </div>
    );
};

export default Service;