import React from "react"
import s from './Nav.module.css'

export function Nav() {
    return (
        <div className={s.nav}>
            <a href="">Main</a>
            <a href="">Works</a>
            <a href="">Skills</a>
            <a href="">Contacts</a>
        </div>
    )
}
