import React from 'react';

import classNames from 'classnames/bind';
import style from './PostView.scss';

import COMMENT_ICON from '../../assets/images/comment.png';
import LIKE_ICON from '../../assets/images/likes.png';

const cx = classNames.bind(style);

const CommentList = ({comment}) => {
    const {
        name,
        profileImg,
        content
    } = comment;
    return (
        <li className={cx('PostView__comment-listWrap-item')}>
            <div className={cx('PostView__comment-listWrap-item-img')}>
                <img alt={profileImg} src={profileImg} />
            </div>
            <div className={cx('PostView__comment-listWrap-item-name')}>{name}</div>
            <div className={cx('PostView__comment-listWrap-item-content')}>{content}</div>
        </li>
    )
}
const PostView = ({ postData }) => {
    const {
        title,
        date,
        day,
        description,
        comment,likes
    } = postData;
    return (
        <>
        <div className={cx('PostView')}>
            <div className={cx('PostView__post')}>
                <div className={cx('PostView__post-titleWrap')}>
                    <div className={cx('PostView__post-titleWrap-title')}>{title}</div>
                    <div className={cx('PostView__post-titleWrap-date')}>{date}</div>
                    <div className={cx('PostView__post-titleWrap-day')}>D-{day}</div>
                </div>
                <div className={cx('PostView__post-content')}>
                    <div className={cx('PostView__post-content-title')}>프로젝트 소개</div>
                    <div className={cx('PostView__post-content-des')}>{description}</div>
                </div>
                <div className={cx('PostView__post-commentWrap')}>
                    <input placeholder="댓글을 입력하세요."  className={cx('PostView__post-commentWrap-input')} />
                    <button className={cx('PostView__post-commentWrap-button')}>확 인</button>
                </div>
            </div>
            <div className={cx('PostView__comment')}>
                <div className={cx('PostView__comment-icons')}>
                    <img alt={COMMENT_ICON} src={COMMENT_ICON} />{comment.length}
                    <img alt={LIKE_ICON} src={LIKE_ICON} />{likes}
                </div>
                <div className={cx('PostView__comment-listWrap')}>
                    <ul>
                        <CommentList
                        comment={comment[0]}
                        likes={likes}
                        />
                    </ul>
                </div>
                <button>목록보기</button>
            </div>
        </div>
        </>
    )
}

export default PostView;