import React from 'react'
import s from './Main.module.css'
import c from './../common/styles/Container.module.css'

export function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={c.container}>
                <div className={s.mainText}>
                    <span>Hi</span>
                    <h1>I am Vladislav Malohvey</h1>
                    <p>A Frontend Developer</p>
                </div>
                <div className={s.mainPhoto}>

                </div>
            </div>
        </div>
    )
}