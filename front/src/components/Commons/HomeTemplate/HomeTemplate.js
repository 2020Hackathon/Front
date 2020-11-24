import React from 'react';
import Header from '../Header/Header';

const HomeTemplate = ({children}) => {
    return (
        <>
        <Header name="김경훈"/>
        {children}
        </>
    )
}

export default HomeTemplate;