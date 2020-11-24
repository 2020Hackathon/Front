import React, { useState } from 'react';
import { requestWithAccessToken } from '../../../lib/ApiRequest';
import ItemList from '../../components/Home/ItemList/ItemList';

const ItemListContainer = () => {
    const [postItemList, setPostItemList] = useState([]);

    const getProjectList = async () => {
        try{
            const res = await requestWithAccessToken('/v1/post/dateSearch', {postInfo : 'Project'},{},'get');
            console.log(res);
        } catch (error) {console.log('error',error)}
    }
    const getContestList = async () => {
        try{
            const res = await requestWithAccessToken('/v1/post/dateSearch', {postInfo : 'Contest'},{},'get');
            console.log(res);
        } catch (error) {console.log('error',error)}
    }
    const getPortfolioList = async () => {
        try{
            const res = await requestWithAccessToken('/v1/post/dateSearch', {postInfo : 'Portfolio'},{},'get');
            console.log(res);
        } catch (error) {console.log('error',error)}
    }
    const getSelfIntroductionList = async () => {
        try{
            const res = await requestWithAccessToken('/v1/post/dateSearch', {postInfo : 'SelfIntroduction'},{},'get');
            console.log(res);
        } catch (error) {console.log('error',error)}
    }

    setPostItemList([
        {
            title: '제목입니다',
            description: '작게 들어가는 내용입니다.',
            endDate: '20201126',
            isLike: true
        }, {
            title: '제목입니다.2',
            description: '작게 들어가는 내용입니다.2',
            endDate: 2,
            isLike: false
        }
    ])

    return (
        <ItemList
        getProjectList={getProjectList}
        getContestList={getContestList}
        getPortfolioList={getPortfolioList}
        getSelfIntroductionList={getSelfIntroductionList}
        postItemList={postItemList}
         />
    )
}

export default ItemListContainer;