import React from 'react';
import s from './Work.module.scss'

export const Work = ({style, title, description}) => {
    return (
        <div className={s.work}>
            <div className={s.workImage} style={style}>
                <a className={s.viewButton}>View</a>
            </div>
            <div className={s.workInfo}>
                <h3 className={s.workTitle}>{title}</h3>
                <span className={s.workDescription}>{description}</span>
            </div>
        </div>
    )
}