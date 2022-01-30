import React from 'react';
import s from './Work.module.scss'
import c from './../common/styles/Container.module.css'

export const Work = (props) => {
    return (
        <div className={s.work}>
            <div className={s.workImage}>
                <a className={s.viewButton}>View</a>
            </div>
            <h3 className={s.workTitle}>{props.title}</h3>
            <span className={s.workDescription}>{props.description}</span>
        </div>
    )
}