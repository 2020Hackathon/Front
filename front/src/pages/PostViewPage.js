import React from 'react';
import PostViewContainer from '../containers/PostViewContainer/PostViewContainer';
import HomeTemplate from '../components/Commons/HomeTemplate/HomeTemplate';

const PostViewPage = () => {
    return (
        <HomeTemplate>
            <PostViewContainer/>
        </HomeTemplate>
    )
}

export default PostViewPage;