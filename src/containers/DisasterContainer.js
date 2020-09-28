import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get_message, get_message_success, get_message_error } from '../store/disaster';
import { getDisasterMsg } from '../api/getDisasterMsg';
import DisasterList from '../components/DisasterList';
import styles from './Disaster.module.scss';



const DisasterContainer = () => {

    const { loading, data, error } = useSelector(state => state.disaster);
    let page_number = useRef(1);

    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const getDisasterMessage = async () => {
        dispatch(get_message());
        try {
            const responce = await getDisasterMsg(page_number.current);
            page_number.current += 1;
            console.log(page_number.current);
            console.log(responce);
            dispatch(get_message_success(responce));

        }
        catch (e) {
            console.error(e);
            dispatch(get_message_error());
        }

    };

    useEffect(() => {
        window.addEventListener('scroll', onScorll, true);
    }, [])

    useEffect(() => {
        getDisasterMessage();
    }, []);
    useEffect(() => {
        console.log(page_number.current)
        console.log('바뀜');
    }, [page_number])


    const onScorll = useCallback(() => {
        let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        let clientHeight = document.documentElement.clientHeight;
        // console.log(scrollHeight);
        // console.log(scrollTop + clientHeight);
        let height = Math.round(scrollTop + clientHeight);
        if (height === scrollHeight) {
            console.log("페이지 끝");
            getDisasterMessage();
        }
    }, [getDisasterMessage]);

    const onChageSearch = useCallback((e) => {
        setSearch(e.target.value);
    }, [setSearch]);

    const render = () => {
        const list = data.map((item, index) => {
            return item.filter(v => {
                return (
                    v.location_name.indexOf(search) !== -1
                )
            })
        })
        return (
            <>
                <input className={styles['input']} type="text" placeholder="지역을 검색하세요" value={search} onChange={onChageSearch} ></input>
                <DisasterList value={list} />
                {loading ? 'LOADING...' :

                    <div className={styles['btn']} onClick={getDisasterMessage}>
                        더보기
                     </div>
                }

            </>
        )
    }


    return (
        <div className={styles['list']}>
            {data.length === 0 ? "LOADING..." : render()}
        </div>
    )
}
export default DisasterContainer;