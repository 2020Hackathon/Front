import React from 'react';

import classNames from 'classnames/bind';
import style from './Chart.scss';

const cx = classNames.bind(style);

const Chart = ({
    DGPercent,
    DSMPercent,
    GMSPercent
}) => {
    const SchoolChart = ({
        schoolName,
        percent,
        color
    }) => {
        return (
            <li className={cx('Chart__chartWrap-item')}>
                <div className={cx('Chart__chartWrap-item-title')}>{schoolName}</div>
                <div className={cx('Chart__chartWrap-item-chart')} 
                style={{ backgroundColor: `${color}`}}>
                    {percent/10}%
                </div>
            </li>
        )
    }
    return(
        <div className={cx('Chart')}>
            <div className={cx('Chart__title')}>취업 현황</div>
            <div className={cx('Chart__chartWrap')}>
                <ul>
                    <SchoolChart
                    schoolName='대구 소프트웨어 마이스터 고등학교'
                    percent={DGPercent}
                    color='#6dd3b1'
                    />
                    <SchoolChart
                    schoolName='대덕 소프트웨어 마이스터 고등학교'
                    percent={DSMPercent}
                    color='#946dd3'
                    />
                    <SchoolChart
                    schoolName='광주 소프트웨어 마이스터 고등학교'
                    percent={GMSPercent}
                    color='#fdbe6b'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Chart;