import React from 'react'
import s from './Works.module.scss'
import c from '../common/styles/Container.module.scss'
import {Work} from './Work';
import {Title} from '../common/Title/Title';
import sn from '../common/assets/image/SN.png'
import currency from '../common/assets/image/currency.png'
import burger from '../common/assets/image/burger.png'
import todo from '../common/assets/image/Todolist.png'

export const Works = () => {

    const imagePath = (path) => {
        return {
            backgroundImage: 'url(' + path + ')'
        }
    }

    return (
        <div className={s.works}>
            <div className={`${c.container} ${s.worksContainer}`}>
                <Title title={'My works'}/>
                <div className={s.worksItem}>

                    <Work style={imagePath(sn)}
                          title='Social network'
                          description='not bad google project'
                    />
                    <Work style={imagePath(currency)}
                          title='Exchange'
                          description='not bad google project not bad google project not bad google project'
                    />
                    <Work style={imagePath(burger)}
                          title='google project'
                          description='not bad google project not bad google project'
                    />
                    <Work style={imagePath(todo)}
                          title='google project'
                          description='not bad google project not bad google project not bad google project not bad google project'
                    />

                </div>
            </div>
        </div>
    )
}