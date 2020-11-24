import React, { useState } from 'react';
// import { requestWithAccessToken } from '../../../lib/ApiRequest';
import ItemList from '../../components/Home/ItemList/ItemList';

const ItemListContainer = () => {
    const [postItemList, setPostItemList] = useState([]);

    let isProjectClick = false;
    let isContestClick = false;
    let isPortfolioClick = false;
    let isSelfIntroductionClick = false;
    
    const getProjectList =  () => {
        isProjectClick = true;
        setPostItemList(
            [
                {
                    title: '학교 청원 게시판 개발인원 구합니다~',
                    description: '성실히 프로젝트에 참여해 줄 학생들을 찾습니다.',
                    day: 1,
                    isLike: true,
                    postInfo: 'Project'
                },
                {
                    title: 'iOS개발 미니 프로젝트 부원 모집합니다 !',
                    description: '같이 공부하는 겸 개발하실 분들 모집해요 ㅎㅎ',
                    day: 2,
                    isLike: false,
                    postInfo: 'Project'
                },
                {
                    title: '프론트엔드 프로젝트 부원을 찾고있습니다.',
                    description: '프론트엔드에 대해 관심 있으신 분들 와주세요.',
                    day: 1,
                    isLike: true,
                    postInfo: 'Project'
                },
                {
                    title: '프론트엔드 프로젝트 부원을 찾고있습니다.',
                    description: '프론트엔드에 대해 관심 있으신 분들 와주세요.',
                    day: 1,
                    isLike: true,
                    postInfo: 'Project'
                }
            ]
        )
    }
    const getContestList = () => {
        setPostItemList(
            [
                {
                    title: '같이 대회 나갈 분을 구합니다~',
                    description: '성실히 프로젝트에 참여해 줄 학생들을 찾습니다.',
                    day: 1,
                    isLike: true,
                    postInfo: 'Contest'
                },
                {
                    title: 'iOS개발 미니 프로젝트 부원 모집합니다 !',
                    description: '같이 공부하는 겸 개발하실 분들 모집해요 ㅎㅎ',
                    day: 2,
                    isLike: false,
                    postInfo: 'Contest'
                },
                {
                    title: '프론트엔드 프로젝트 부원을 찾고있습니다.',
                    description: '프론트엔드에 대해 관심 있으신 분들 와주세요.',
                    day: 1,
                    isLike: true,
                    postInfo: 'Contest'
                },
                {
                    title: '프론트엔드 프로젝트 부원을 찾고있습니다.',
                    description: '프론트엔드에 대해 관심 있으신 분들 와주세요.',
                    day: 1,
                    isLike: true,
                    postInfo: 'Contest'
                }
            ])
    }
    const getPortfolioList = () => {
        setPostItemList(
            [
                {
                    title: '제 포트폴리오 피드백 해주세요',
                    description: '성실히 프로젝트에 참여해 줄 학생들을 찾습니다.',
                    isLike: true,
                    postInfo: 'Portfolio'
                },
                {
                    title: 'iOS개발 미니 프로젝트 부원 모집합니다 !',
                    description: '같이 공부하는 겸 개발하실 분들 모집해요 ㅎㅎ',
                    isLike: false,
                    postInfo: 'Portfolio'
                },
                {
                    title: '프론트엔드 프로젝트 부원을 찾고있습니다.',
                    description: '프론트엔드에 대해 관심 있으신 분들 와주세요.',
                    isLike: true,
                    postInfo: 'Portfolio'
                },
                {
                    title: '프론트엔드 프로젝트 부원을 찾고있습니다.',
                    description: '프론트엔드에 대해 관심 있으신 분들 와주세요.',
                    isLike: true,
                    postInfo: 'Portfolio'
                }
            ])
    }

    const getSelfIntroductionList = () => {
        setPostItemList(
            [
                {
                    title: '자소서 썼는데 첨삭 해주실 분 !!',
                    description: '성실히 프로젝트에 참여해 줄 학생들을 찾습니다.',
                    isLike: true,
                    postInfo: 'SelfIntroduction'
                },
                {
                    title: 'iOS개발 미니 프로젝트 부원 모집합니다 !',
                    description: '같이 공부하는 겸 개발하실 분들 모집해요 ㅎㅎ',
                    isLike: false,
                    postInfo: 'SelfIntroduction'
                },
                {
                    title: '프론트엔드 프로젝트 부원을 찾고있습니다.',
                    description: '프론트엔드에 대해 관심 있으신 분들 와주세요.',
                    isLike: true,
                    postInfo: 'SelfIntroduction'
                },
                {
                    title: '프론트엔드 프로젝트 부원을 찾고있습니다.',
                    description: '프론트엔드에 대해 관심 있으신 분들 와주세요.',
                    isLike: true,
                    postInfo: 'SelfIntroduction'
                },
                {
                    title: '프론트엔드 프로젝트 부원을 찾고있습니다.',
                    description: '프론트엔드에 대해 관심 있으신 분들 와주세요.',
                    isLike: true,
                    postInfo: 'SelfIntroduction'
                },
                {
                    title: '프론트엔드 프로젝트 부원을 찾고있습니다.',
                    description: '프론트엔드에 대해 관심 있으신 분들 와주세요.',
                    isLike: true,
                    postInfo: 'SelfIntroduction'
                }
            ])

    }

    return (
        <ItemList
        getProjectList={getProjectList}
        getContestList={getContestList}
        getPortfolioList={getPortfolioList}
        getSelfIntroductionList={getSelfIntroductionList}
        postItemList={postItemList}
        isProjectClick = {isProjectClick}
        isContestClick = {isContestClick}
        isPortfolioClick = {isPortfolioClick}
        isSelfIntroductionClick = {isSelfIntroductionClick}
         />
    )
}

export default ItemListContainer;