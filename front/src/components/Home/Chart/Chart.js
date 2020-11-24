import React from 'react';

import classNames from 'classnames/bind';
import style from './Chart.scss';

const cx = classNames.bind(style);

const Chart = () => {
    return(
        <div className={cx('Chart')}>
            <div className={cx('Chart__title')}>취업 현황</div>
        </div>
    )
}

export default Chart;