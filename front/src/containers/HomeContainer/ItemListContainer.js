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
                    title: '기숙사 관리 시스템 같이 한번 개발해보실 분?',
                    description: '플랫폼은 웹, 앱, 윈도우 등 계획 중입니다.',
                    day: 7,
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
                    title: '2020 청소년 스마틴 앱 챌린지',
                    description: '청소년 모바일 앱 공모전',
                    day: 1,
                    isLike: true,
                    postInfo: 'Contest'
                },
                {
                    title: '사이버 윤리 포스터 공모전',
                    description: '사이버 윤리에 관한 포스터 공모전 입니다.',
                    day: 8,
                    isLike: false,
                    postInfo: 'Contest'
                },
                {
                    title: '네이버 2020 개발자 컨퍼런스',
                    description: '네이버에서 주최하는 220년도 개발자 컨퍼런스 입니다.',
                    day: 2,
                    isLike: true,
                    postInfo: 'Contest'
                },
                {
                    title: '소프트웨어 ICT융합 컨퍼런스',
                    description: '대구 엑스코에서 진행하는 AI 소프트웨어 컨퍼런스',
                    day: 1,
                    isLike: false,
                    postInfo: 'Contest'
                }
            ])
    }
    const getPortfolioList = () => {
        setPostItemList(
            [
                {
                    title: '제 포트폴리오 피드백 해주세요',
                    description: '대구 소프트웨어고 2학년 모바일 개발자의 포트폴리오 입니다.',
                    isLike: false,
                    postInfo: 'Portfolio'
                },
                {
                    title: '3학년 취업자 포트폴리오',
                    description: '취업 후 포트폴리오 게시합니다.',
                    isLike: true,
                    postInfo: 'Portfolio'
                },
                {
                    title: '웹 프론트엔드 개발자의 포트폴리오 꿀팁 !',
                    description: '나만 알고 싶었던 꿀팁 알려준다',
                    isLike: true,
                    postInfo: 'Portfolio'
                },
                {
                    title: '포트폴리오 제작 중인데 혹시...',
                    description: '모바일 개발자 포트폴리오 작업 중인데 어떤가요!',
                    isLike: false,
                    postInfo: 'Portfolio'
                }
            ])
    }

    const getSelfIntroductionList = () => {
        setPostItemList(
            [
                {
                    title: '자소서 썼는데 첨삭 해주실 분 !!',
                    description: '자소서 첨삭해주실 분을 찾습니당',
                    isLike: true,
                    postInfo: 'SelfIntroduction'
                },
                {
                    title: '서버 개발자는 자소서 어떻게 쓰나요?',
                    description: '서버로 취업할 때 자소서 어떻게 써야하나요ㅠㅠ',
                    isLike: false,
                    postInfo: 'SelfIntroduction'
                },
                {
                    title: '자기소개서를 잘 쓰는 기술',
                    description: '리액트를 다루는 기술 아닙니다',
                    isLike: true,
                    postInfo: 'SelfIntroduction'
                },
                {
                    title: '서로 첨삭 하실 분!',
                    description: '서로서로 자소서 봐주고 첨삭 해줄 분을 구합니당',
                    isLike: true,
                    postInfo: 'SelfIntroduction'
                },
                {
                    title: '프론트엔드 프로젝트 부원을 찾고있습니다.',
                    description: '프론트엔드에 대해 관심 있으신 분들 와주세요.',
                    isLike: false,
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