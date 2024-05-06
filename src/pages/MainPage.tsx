import React from 'react';
import styled from 'styled-components';
import PopularPost from '../components/mainpage/PopularPost';
import HotPost from '../components/mainpage/HotPost';
import BestPost from '../components/mainpage/BestPost';
import ClassReview from '../components/mainpage/ClassReview';
import Topic from '../components/mainpage/Topic';
import Post from '../components/mainpage/Post';

const MainContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 80%;
    background: #252525;
    display: flex;
    justify-content: center;
`;

const ContainerLeft = styled.div`
    margin: 20px 10px;
    min-width: 30rem;
    width: 40%;
`;

const BoardTitle = styled.h2`
    margin: 0;
    margin-bottom: 5px;
    padding: 10px 15px;
    outline: solid 1px gray;
    text-align: left;
    color: white;
`;

const WritePost = styled.div`
    margin-bottom: 5px;
    padding: 10px;
    outline: solid 1px gray;
    text-align: left;
    color: white;

    & input {
        margin: 0;
        padding: 0;
        background-color: transparent;
        border: none;
        color: gray;

        &:focus {
            outline: none;
        }
    }
`;

const PostingBoard = styled.div`
    width: 100%;
`;

const ContainerRight = styled.div`
    margin: 20px 10px;
    min-width: 15rem;
    width: 20%;
`;

function MainPage() {
    return (
        <MainContainer>
            <ContainerLeft>
                <BoardTitle>자유게시판</BoardTitle>
                <Topic />
                <WritePost>
                    <input value={'새 글을 작성해주세요!'}></input>
                </WritePost>
                <PostingBoard>
                    <Post />
                </PostingBoard>
            </ContainerLeft>
            <ContainerRight>
                <PopularPost />
                <HotPost />
                <BestPost />
                <ClassReview />
            </ContainerRight>
        </MainContainer>
    );
}

export default MainPage;
