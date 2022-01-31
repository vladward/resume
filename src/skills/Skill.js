import React from 'react'
import s from './Skill.module.scss'

export function Skill(props) {
    return (
        <div className={s.skill}>
            <div className={s.icon}>

            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    )
}