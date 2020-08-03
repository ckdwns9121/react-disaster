import React from 'react';
import Disaster from './Disaster';

const DisasterList =({value ,pageNo})=>{

    const idx = pageNo-2
    const list = value.map((data)=>(
        data.map((item,index)=>(
        <Disaster {...item} key={index}/>
        ))
    ))
    return(
        <>
        {list}
        </>
    )
}

export default DisasterList;