import React from 'react';
import MyInfo from '../../components/MyInfo/MyInfo';

import PROFILE from '../../assets/images/profileImg.png';

const MyInfoContainer = () => {
    const userInfo = {
        name: '김경훈',
        snsLink: 'https://instagram.com',
        snsLink2: 'https://facebook.com',
        wrotePost: [
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
            }],
            profileImg: PROFILE,
            schoolState: 0,
            school: 0
    }

    return <MyInfo userInfo={userInfo} />
}

export default MyInfoContainer;