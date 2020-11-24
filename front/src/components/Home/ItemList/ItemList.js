import React from 'react';

import classNames from 'classnames/bind';
import style from './ItemList.scss';
import SelectBox from '../../Commons/SelectBox/SelectBox'; 

import HEART_CLICK from '../../../assets/images/heart.png';
import HEART_DEFAULT from '../../../assets/images/heat_default.png';

const cx = classNames.bind(style);

const ItemList = ({
    getProjectList,
    getContestList,
    getPortfolioList,
    getSelfIntroductionList,
    postItemList
}) => {
    const ItemCard = ({
        title,
        content,
        field,
        endDate,
        isLike
    }) => {
        const day = parseInt(endDate) - parseInt(new Date('yyyyMMdd').toString());
        return (
            <li className={cx('ItemList__List-item')}>
                <div className={cx('ItemList__List-item-title')}>{title}</div>
                <div className={cx('ItemList__List-item-content')}>{content}</div>
                <div className={cx('ItemList__List-item-day')}>D-{day}</div>
                <div className={cx('ItemList__List-item-heart')}>
                    {
                    isLike ? <img alt={HEART_CLICK} src={HEART_CLICK} className={cx('ItemList__List-item-heart-default')} />
                    : <img alt={HEART_DEFAULT} src={HEART_DEFAULT} className={cx('ItemList__List-item-heart-click')} />
                    }
                </div>
            </li>
        )
    }
    postItemList.map((data) => {
        const {
            title,
            description,
            endDate,
            isLike
        } = data.post;
        return(
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
                        </SelectBox>
                        <SelectBox>
                            <option>날짜순</option>
                        </SelectBox>
                    </div>
                    <div>
                        <ul>
                            <ItemCard 
                            title={title}
                            content={description}
                            // field={
                            //     "XD",
                            //     "Figma"
                            // }
                            endDate={endDate}
                            isLike={isLike}
                             />
                        </ul>
                    </div>
                </div>
            </div>
        )
    });
}

export default ItemList;