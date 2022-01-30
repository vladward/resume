import React from 'react';
import { useFormik } from 'formik';

export const ContactsForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (

        <form onSubmit={formik.handleSubmit}>

            <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                onChange={formik.handleChange}
                value={formik.values.name}
            />

            <input
                id="email"
                placeholder="Email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <textarea
                id="message"
                placeholder="Your message"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
            />

            <button type="submit">Submit</button>

        </form>

    );
};