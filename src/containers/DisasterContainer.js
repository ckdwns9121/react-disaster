import React, { useEffect, useState,useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get_message } from '../store/disaster';
import {getDisasterMsg} from '../api/getDisasterMsg';
import DisasterList from '../components/DisasterList';
import styles from './Disaster.module.scss';



const DisasterContainer = () => {

    const { loading, data, pageNo, error } = useSelector(state => state.disaster);
    const [search,setSearch] = useState('');
    const dispatch = useDispatch();

    const getDisasterMessage = useCallback(async () => {
        const responce = await getDisasterMsg(pageNo);
        dispatch(get_message(responce));
        console.log(responce);
    },[dispatch]);

    useEffect(()=>{
    window.addEventListener('scroll',onScorll,true);
    },[])

    useEffect(() => {
         getDisasterMessage();
    },[getDisasterMessage]);


    const onScorll =()=>{
        let scrollHeight = Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
        let scrollTop = Math.max (document.documentElement.scrollTop,document.body.scrollTop);
        let clientHeight = document.documentElement.clientHeight;
        if(scrollTop + clientHeight=== scrollHeight){
            console.log("페이지 끝");
            getDisasterMessage();
        }
    }

    const onChageSearch =useCallback((e)=>{
        setSearch(e.target.value);
    },[setSearch]);

    const render=()=>{
        const list = data.map((item,index) =>{
            return item.filter(v =>{
                return (
                    v.location_name.indexOf(search) !==-1
                )
            })
        })
        return (
            <>
            <input className={styles['input']} type="text" placeholder="지역을 검색하세요" value={search} onChange={onChageSearch} ></input>
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