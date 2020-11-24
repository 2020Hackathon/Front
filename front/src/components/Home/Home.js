import React from 'react';

import classNames from 'classnames/bind';
import style from './Home.scss';

import Header from '../Commons/Header/Header';
import ItemList from './ItemList/ItemList';
import Chart from './Chart/Chart';

const cx = classNames.bind(style);

const Home = () => {
    return (
        <>
        <div className={cx('Home')}>
            <div className={cx('Home__Header')}>
                <Header/>
            </div>
            <div className={cx('Home__Content')}>
                <div className={cx('Home__Content-itemList')}>
                    <ItemList/>
                </div>
                <div className={cx('Home__Content-chart')}>
                    <Chart/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;