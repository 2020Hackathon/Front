import React from 'react';

import classNames from 'classnames/bind';
import style from './MyInfo.scss';

const cx = classNames.bind(style);

const MyInfo = ({userInfo}) => {
    const {
        name,
        snsLink,
        snsLink2,
        wrotePost,
        profileImg,
        schoolState,
        school
    } = userInfo;

    // schoolSate 0:재학중, 1:졸업생, 2:선생님
    let studentState = '재학중';
    if (schoolState === 1) {
        studentState = '졸업생';
    } else if (schoolState === 2) {
        studentState = '선생님'
    }

    // school 0:대구, 1:광주, 2:대덕
    let schoolName = '대구 소프트웨어 고등학교';
    if (school === 1) {
        schoolName = '광주 소프트웨어 고등학교'
    } else if (school === 2) {
        schoolName = '대덕 소프트웨어 고등학교'
    }

    return (
        <div className={cx('MyInfo')}>
            <div className={cx('MyInfo__Info')}>
                <div className={cx('MyInfo__Info-user')}>
                    <img alt={profileImg} src={profileImg} className={cx('MyInfo__Info-user-profile')} />
                        <h1 className={cx('MyInfo__Info-user-title')}>{name}</h1>
                        <p className={cx('MyInfo__Info-user-state')}>{studentState}</p>
                        <p className={cx('MyInfo__Info-user-school')}>{schoolName}</p>
                </div>

                <div className={cx('MyInfo__Info-link')}>
                    <div className={cx('MyInfo__Info-link-wrap')}>
                        <img alt='instagram' />
                        {snsLink}
                    </div>
                    <div className={cx('MyInfo__Info-link-wrap')}>
                        <img alt='facebook' />
                        {snsLink2}
                    </div>
                </div>
            </div>
            <div className={cx('MyInfo__post')}>
                <div className={cx('MyInfo__post-category')}>
                    <div className={cx('ItemList__Category')}>
                        <button className={cx('ItemList__Category-button')}>
                            프로젝트
                            <div className={cx('ItemList__Category-button-box')} />
                            </button>
                        <button className={cx('ItemList__Category-button')}>
                            대회
                            <div className={cx('ItemList__Category-button-box')}/>
                            </button>
                        <button className={cx('ItemList__Category-button')}>
                            포트폴리오
                            <div className={cx('ItemList__Category-button-box')}/>
                            </button>
                        <button className={cx('ItemList__Category-button')}>
                            자기소개서
                            <div className={cx('ItemList__Category-button-box')}/>
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyInfo;