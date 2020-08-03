import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get_message } from '../store/disaster';
import {getDisasterMsg} from '../api/getDisasterMsg';
import DisasterList from '../components/DisasterList';
import styles from './Disaster.module.scss';



const DisasterContainer = () => {

    const { loading, data, pageNo, error } = useSelector(state => state.disaster);
    const [value,setValue] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
         getDisasterMessage();
    },[]);
    useEffect(()=>{
        // console.log("데이터 받아옴");
    },[data,value])
    const onChageValue =(e)=>{
        setValue(e.target.value);
    }

    const getDisasterMessage = async () => {
        const responce = await getDisasterMsg(pageNo);
        // console.log(responce);
        dispatch(get_message(responce));
        // console.log(pageNo);
    }

    const render=()=>{
        const list = data.map((item,index) =>{
            return item.filter(v =>{
                return (
                    v.location_name.indexOf(value) !==-1
                )
            })
        })
        return (
            <>
            <input className={styles['input']} type="text" placeholder="지역을 검색하세요" value={value} onChange={onChageValue} ></input>
            <DisasterList value={list} pageNo={pageNo}/>
            <div className={styles['btn']} onClick ={getDisasterMessage}>
                더보기
            </div>
            </>
        )
    }

    
    return (
        <div className={styles['list']}>
            {data.length===0 ? "로딩중" :render()}
  
        </div>
        )
}
export default DisasterContainer;