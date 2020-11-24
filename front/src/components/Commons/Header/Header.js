import React from 'react';

import classNames from 'classnames/bind';
import style from './Header.scss';

import Button from '../Button/Button';
import LOGO from '../../../assets/images/logo.png';
import SEARCH_ICON from '../../../assets/images/searchIcon.png';

const cx = classNames.bind(style);

const Header = ({name}) => {
    return (
        <>
        <div className={cx('Header')}>
            <div className={cx('Header__Logo')}>
                <img alt={LOGO} src={LOGO} />
            </div>
            <div className={cx('Header__Search')}>
                <img alt={SEARCH_ICON} src={SEARCH_ICON} className={cx('Header__Search-icon')} />
                <input placeholder="검색어를 입력하세요." />
            </div>
            <div className={cx('Header__Name')}>
                <img alt="profile" />
                {name}님 환영합니다!
            </div>
            <div className={cx('Header__LogOut')}>
                <Button content="로그아웃" handleFunction={() => alert("로그아웃 하시겠습니까?")} />
            </div>
        </div>
        </>
    )
}

export default Header;