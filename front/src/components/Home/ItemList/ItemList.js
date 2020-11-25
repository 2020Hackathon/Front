import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import style from './ItemList.scss';
import SelectBox from '../../Commons/SelectBox/SelectBox'; 

import HEART_CLICK from '../../../assets/images/heart.png';
import HEART_DEFAULT from '../../../assets/images/heat_default.png';

const cx = classNames.bind(style);

const ItemCard = ({
    title,
    description,
    field,
    day,
    isLike
}) => {
    return (
        <li className={cx('ItemList__List-item')}>
            <Link to='/PostView'>
            <div className={cx('ItemList__List-item-title')}>{title}</div>
            </Link>
            <div className={cx('ItemList__List-item-content')}>{description}</div>
            {
                day === undefined ? 
                <>
                <div className={cx('ItemList__List-item-heart-inline')}>
                    {
                    isLike ? <img alt={HEART_CLICK} src={HEART_CLICK} className={cx('ItemList__List-item-heart-default')} />
                    : <img alt={HEART_DEFAULT} src={HEART_DEFAULT} className={cx('ItemList__List-item-heart-click')} />
                    }
                </div>
                </> 
                :
                <>
                <div className={cx('ItemList__List-item-day')}>D-{day}</div>
                <div className={cx('ItemList__List-item-heart')}>
                    {
                    isLike ? <img alt={HEART_CLICK} src={HEART_CLICK} className={cx('ItemList__List-item-heart-default')} />
                    : <img alt={HEART_DEFAULT} src={HEART_DEFAULT} className={cx('ItemList__List-item-heart-click')} />
                    }
                </div>
                </>
            }
        </li>
    )
}



const ItemList = ({
    getProjectList,
    getContestList,
    getPortfolioList,
    getSelfIntroductionList,
    postItemList,
    isProjectClick,
    isContestClick,
    isPortfolioClick,
    isSelfIntroductionClick
}) => {

    const postItemTemp = postItemList.map((data) => {
        const {
            title,
            description,
            day,
            isLike,
            postInfo
        } = data;
        return (
            <>
            <ItemCard 
            title={title}
            description={description}
            day={day}
            isLike={isLike}
            postInfo={postInfo}
            />
            </>
        )
    });
    return (
        <>
        <div className={cx('ItemList')}>
             <div className={cx('ItemList__Category')}>
                 <button className={cx('ItemList__Category-button')} onClick={() => getProjectList()}>
                    프로젝트
                    <div className={cx('ItemList__Category-button-box')} />
                     </button>
                 <button className={cx('ItemList__Category-button')} onClick={() => getContestList()}>
                     대회
                     <div className={cx('ItemList__Category-button-box')}/>
                     </button>
                 <button className={cx('ItemList__Category-button')}  onClick={() => getPortfolioList()}>
                     포트폴리오
                     <div className={cx('ItemList__Category-button-box')}/>
                     </button>
                 <button className={cx('ItemList__Category-button')} onClick={() => getSelfIntroductionList()}>
                     자기소개서
                     <div className={cx('ItemList__Category-button-box')}/>
                     </button>
             </div>
             <div className={cx('ItemList__List')}>
                 <div className={cx('ItemList__List-selectBox')}>
                     <SelectBox>
                         <option>분야</option>
                         <option>웹</option>
                         <option>서버</option>
                         <option>디자인</option>
                         <option>안드로이드</option>
                         <option>iOS</option>
                         <option>윈도우</option>
                     </SelectBox>
                     <SelectBox>
                         <option>날짜순</option>
                     </SelectBox>
                 </div>
                <ul className={cx('ItemList__List-listWrap')}>
                    {postItemTemp}
                 </ul>
            </div>
        </div>
        </>
    )
}

export default ItemList;