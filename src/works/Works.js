import React from 'react'
import s from './Works.module.scss'
import c from './../common/styles/Container.module.css'
import {Work} from "./Work";
import {Title} from "../common/Title/Title";

export const Works = () => {
    return (
        <div className={s.works}>
            <div className={`${c.container} ${s.worksContainer}`}>
                <Title title={'My works'}/>
                <div className={s.worksItem}>

                    <Work
                        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBBU2BuAf62cEvN35u62QVIeWeu2nN6hpjQ&usqp=CAU'
                        title='google project'
                        description='not bad google project'
                    />
                    <Work
                        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBBU2BuAf62cEvN35u62QVIeWeu2nN6hpjQ&usqp=CAU'
                        title='google project'
                        description='not bad google project'/>
                    <Work
                        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBBU2BuAf62cEvN35u62QVIeWeu2nN6hpjQ&usqp=CAU'
                        title='google project'
                        description='not bad google project'
                    />
                    <Work
                        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBBU2BuAf62cEvN35u62QVIeWeu2nN6hpjQ&usqp=CAU'
                        title='google project'
                        description='not bad google project'/>
                </div>
            </div>
        </div>
    )
}