import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get_message } from '../store/disaster';
import {getDisasterMsg} from '../api/getDisasterMsg';


const DisasterContainer = () => {

    const { loading, data, pageNo, error } = useSelector(state => state.disaster);
    const dispatch = useDispatch();

    useEffect(() => {
        getDisasterMessage();
    },[]);

    const getDisasterMessage = async () => {
        const responce = await getDisasterMsg(pageNo);
        console.log(responce);
        dispatch(get_message(responce))

    }
    const test =()=>{
        console.log("바뀐 데이터");
        console.log(data);
        console.log(pageNo);
        
    }
    
    return (
        <div>
            {data.length===0 ? "데이터 없음" : "데이터 있음"}
            <div onClick={test}>gdgd</div>
            <div onClick={getDisasterMessage}>다음데이터</div>

        </div>
        )
}
export default DisasterContainer;