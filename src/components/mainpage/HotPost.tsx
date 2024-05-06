import styled from 'styled-components';

const HotPostContainer = styled.div`
    width: 100%;
    background: #323232;
    margin-bottom: 10px;
`;

const Title = styled.h4`
    margin: 0;
    padding: 10px;
    outline: solid 1px gray;
    color: yellow;
    text-align: left;
`;

const Post = styled.div`
    padding: 10px;
    max-width: 100%;
    height: 20px;
    outline: solid 1px gray;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const PostTitle = styled.h4`
    margin: 0;
    width: 70%;
    color: white;
    text-align: left;
    font-size: 0.8rem;
`;

const PostSub = styled.p`
    position: relative;
    right: 0;
    margin: 0;
    color: gray;
    text-align: right;
    font-size: 0.7rem;
`;

function HotPost() {
    return (
        <HotPostContainer>
            <Title>HOT 게시물</Title>
            <Post>
                <PostTitle>페드로</PostTitle>
                <PostSub>05/06 11:46</PostSub>
            </Post>
            <Post>
                <PostTitle>뭐? 어린이날?</PostTitle>
                <PostSub>05/06 11:46</PostSub>
            </Post>
            <Post>
                <PostTitle>드디어 오늘이다 책상컨닝</PostTitle>
                <PostSub>05/06 11:46</PostSub>
            </Post>
            <Post>
                <PostTitle>사랑 받고 싶다</PostTitle>
                <PostSub>05/06 11:46</PostSub>
            </Post>
        </HotPostContainer>
    );
}

export default HotPost;
