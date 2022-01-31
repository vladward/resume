import React from 'react';
import c from '../common/styles/Container.module.scss'
import s from './Contacts.module.scss'
import {ContactsForm} from "./ContactsForm/ContactsForm";

export const Contacts = () => {
    return (
        <div>
            <div className={`${c.container} ${s.contacts}`}>
                <h2>Contacts</h2>
                <ContactsForm/>
            </div>
        </div>
    )
}