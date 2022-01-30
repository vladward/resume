import React from 'react';
import s from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footer__items}>
                <h2>Uladzislau Malakhvei</h2>
                <div className={s.footer__icons}>
                    <div className={s.footer__icon}>
                        <a href="/">
                            <FontAwesomeIcon icon={faGithub} size="3x"/>
                        </a>
                    </div>
                    <div className={s.footer__icon}>
                        <a href="/">
                            <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                        </a>
                    </div>
                    <div className={s.footer__icon}>
                        <a href="/">
                            <FontAwesomeIcon icon={faTelegram} size="3x"/>
                        </a>
                    </div>
                </div>
                <span>2022 All rights reserved</span>
            </div>
        </div>
    )
}