import React from 'react';

import classNames from 'classnames/bind';
import style from './Home.scss';

import Header from '../Commons/Header/Header';
import ChartContainer from '../../containers/HomeContainer/ChartContainer';
import ItemListContainer from '../../containers/HomeContainer/ItemListContainer'

const cx = classNames.bind(style);

const Home = () => {
    return (
        <>
        <div className={cx('Home')}>
            <div className={cx('Home__Header')}>
                <Header name="김경훈" />
            </div>
            <div className={cx('Home__Content')}>
                <div className={cx('Home__Content-itemList')}>
                    <ItemListContainer />
                </div>
                <div className={cx('Home__Content-chart')}>
                    <ChartContainer/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;