import React, {useState} from 'react';
import PostView from '../../components/PostView/PostView';

import PROFILE1 from '../../assets/images/profileImg.png';
import PROFILE2 from '../../assets/images/commentProfile1.png';

const PostViewContainer = () => {
    const postData =
        {
            title: "학교 청원 게시판 개발인원 구합니다~",
            date: "2020.11.26",
            day: 1,
            description: "이번 학생회의 공약이였던 청원 게시판을 개발하려고 합니다.학생 여러분들의 소리에 좀 더 귀 기울이기 위한 프로젝트 입니다.많은 지원 부탁드립니다 !",
            comment: [{
                name: "김재원",
                profileImg: PROFILE2,
                content: "안드로이드 할래요 !",
            },
            {
                name: "박재훈",
                profileImg: PROFILE1,
                content: "어떤 언어 사용해서 개발하시나용",
            },
            {
                name: "김경훈",
                profileImg: PROFILE1,
                content: "윈도우 개발자 필요한가요??",
            }],
            likes: 3
        }
    return <PostView postData={postData}/>
}

export default PostViewContainer;