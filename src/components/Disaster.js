import React from 'react';
import styles from './Disaster.module.scss';

const Disaster = (props) => {
    return (
        <div className={styles['item-box']}>
            <Title location_name={props.location_name} create_date={props.create_date} />
            <Msg msg={props.msg} />
        </div>
    )

}

function Title({ location_name, create_date }) {
    return (
        <div className={styles['title']}>
            <div className={styles['create-date']}>
                {create_date}
            </div>
            <div className={styles['location-name']}>
                {location_name}
            </div>
        </div>
    )
}

function Msg({ msg }) {
    return (
        <div className={styles['msg']}>
            {msg}
        </div>
    )
}

export default Disaster;
