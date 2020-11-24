import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import style from './Header.scss';

import Button from '../Button/Button';
import LOGO from '../../../assets/images/logo.png';
import SEARCH_ICON from '../../../assets/images/searchIcon.png';
import PROFILE from '../../../assets/images/profileImg.png';

const cx = classNames.bind(style);

const Header = ({name}) => {
    return (
        <>
        <div className={cx('Header')}>
            <div className={cx('Header__Logo')}>
                <Link to="/Home">
                    <img alt={LOGO} src={LOGO} />
                </Link>
            </div>
            <div className={cx('Header__Search')}>
                <img alt={SEARCH_ICON} src={SEARCH_ICON} className={cx('Header__Search-icon')} />
                <input placeholder="검색어를 입력하세요." />
            </div>
            <div className={cx('Header__Name')}>
                <Link to='/MyInfo'>
                <img alt={PROFILE} src={PROFILE}  className={cx('Header__Name-profileImg')} />
                </Link>
                {name}님 환영합니다!
            </div>
            <div className={cx('Header__LogOut')}>
                <Link to='/Login'>
                <Button content="로그아웃" handleFunction={() => alert("로그아웃 하시겠습니까?")} />
                </Link>
            </div>
        </div>
        </>
    )
}

export default Header;