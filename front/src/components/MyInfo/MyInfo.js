import React from 'react';

import classNames from 'classnames/bind';
import style from './MyInfo.scss';

const cx = classNames.bind(style);

const MyInfo = () => {
    return (
        <div className={cx('MyInfo')}></div>
    )
}

export default MyInfo;