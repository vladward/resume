import React from 'react'
import s from './Skills.module.css'
import c from './../common/styles/Container.module.css'
import {Skill} from "./Skill";


export function Skills() {
    let descriptions = {
        1: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
        2: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
        3: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    }
    return (
        <div className={s.skillsBlock}>
            <div className={`${c.container} ${s.skillsContainer}`}>
                <h2 className={s.skillsTitle}>My skills</h2>
                <div className={s.skills}>
                    <Skill title={'HTML'} description={descriptions[1]}/>
                    <Skill title={'CSS'} description={descriptions[2]}/>
                    <Skill title={'JS'} description={descriptions[3]}/>
                </div>
            </div>
        </div>
    )
}

