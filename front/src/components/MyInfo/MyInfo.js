import React from 'react';

import classNames from 'classnames/bind';
import style from './MyInfo.scss';

import INSTAGRAM from '../../assets/images/instagram_icon.png';
import FACEBOOK from '../../assets/images/facebook_icon.png';
import LIKES_IMG from '../../assets/images/likes.png';
import COMMENTS_IMG from '../../assets/images/comment.png';

const cx = classNames.bind(style);

const PostItemCard = ({
    title,
    description,
    comments,
    likes
}) => {
    return (
        <li className={cx('MyInfo__post-item-wrap-card')}>
            <div className={cx('MyInfo__post-item-wrap-card-title')}>{title}</div>
            <div className={cx('MyInfo__post-item-wrap-card-des')}>{description}</div>
            <div className={cx('MyInfo__post-item-wrap-card-comments')}>
                <img alt={COMMENTS_IMG} src={COMMENTS_IMG}/>
                {comments}
            </div>
            <div className={cx('MyInfo__post-item-wrap-card-likes')}>
                <img alt={LIKES_IMG} src={LIKES_IMG}/>
                {likes}
            </div>
            <div className={cx('MyInfo__post-item-wrap-card-button')}>
                <button style={{ border: '1px solid #45BD84'}}>수정</button>
                <button style={{ border: '1px solid #EF8181'}}>삭제</button>
            </div>
        </li>
    )
}

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
    let schoolName = '대구 소프트웨어 마이스터고등학교';
    if (school === 1) {
        schoolName = '광주 소프트웨어 마이스터고등학교'
    } else if (school === 2) {
        schoolName = '대덕 소프트웨어 마이스터고등학교'
    }

    return (
        <div className={cx('MyInfo')}>
            <div className={cx('MyInfo__Info')}>
                <div className={cx('MyInfo__Info-user')}>
                    <img alt={profileImg} src={profileImg} className={cx('MyInfo__Info-user-profile')} />
                    <div className={cx('MyInfo__Info-user-content')}>
                        <h1 className={cx('MyInfo__Info-user-title')}>{name}</h1>
                        <p className={cx('MyInfo__Info-user-state')}>{studentState}</p>
                        <p className={cx('MyInfo__Info-user-school')}>{schoolName}</p>
                    </div>
                    <button className={cx('MyInfo__Info-user-editButton')}>프로필 편집</button>
                </div>

                <div className={cx('MyInfo__Info-link')}>
                    <div className={cx('MyInfo__Info-link-wrap')}>
                        <img alt='instagram' src={INSTAGRAM} />
                        {snsLink}
                    </div>
                    <div className={cx('MyInfo__Info-link-wrap')}>
                        <img alt='facebook' src={FACEBOOK} />
                        {snsLink2}
                    </div>
                </div>
            </div>
            <div className={cx('MyInfo__post')}>
                <div className={cx('MyInfo__post-category')}>
                        <button className={cx('MyInfo__post-category-button')} style={{fontWeight: 'bold',color:'#6385FF'}}>
                            프로젝트
                            </button>
                        <button className={cx('MyInfo__post-category-button')}>
                            대회
                            </button>
                        <button className={cx('MyInfo__post-category-button')}>
                            포트폴리오
                            </button>
                        <button className={cx('MyInfo__post-category-button')}>
                            자기소개서
                            </button>
                </div>
                <div className={cx('MyInfo__post-item')}>
                    <ul className={cx('MyInfo__post-item-wrap')}>
                        <PostItemCard
                        title={wrotePost[0].title}
                        description={wrotePost[0].description}
                        comments={wrotePost[0].comments}
                        likes={wrotePost[0].likes}
                        />
                        <PostItemCard
                        title={wrotePost[1].title}
                        description={wrotePost[1].description}
                        comments={wrotePost[1].comments}
                        likes={wrotePost[1].likes}
                        />
                        <PostItemCard
                        title={wrotePost[2].title}
                        description={wrotePost[2].description}
                        comments={wrotePost[2].comments}
                        likes={wrotePost[2].likes}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MyInfo;