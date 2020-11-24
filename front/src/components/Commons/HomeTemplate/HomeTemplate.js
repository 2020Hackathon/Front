import React from 'react';
import Header from '../Header/Header';

const HomeTemplate = ({children}) => {
    return (
        <>
        <Header/>
        {children}
        </>
    )
}

export default HomeTemplate;