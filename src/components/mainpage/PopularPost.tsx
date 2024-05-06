import styled from 'styled-components';

const PopularPostContainer = styled.div`
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
    outline: solid 1px gray;
`;

const PostTitle = styled.h4`
    margin: 0;
    color: white;
    text-align: left;
`;

const PostContext = styled.p`
    margin: 5px 0 5px 0;
    color: white;
    text-align: left;
    font-size: 0.75rem;
`;

const PostBottom = styled.div`
    margin: 25px 0 0 0;
`;

const PostBoradName = styled.p`
    margin: 0;
    color: white;
    text-align: left;
    font-size: 0.75rem;
`;

function PopularPost() {
    return (
        <PopularPostContainer>
            <Title>실시간 인기 글</Title>
            <Post>
                <PostTitle>뭐? 어린이날?</PostTitle>
                <PostContext>못참지</PostContext>
                <PostBottom>
                    <PostBoradName>자유게시판</PostBoradName>
                </PostBottom>
            </Post>
            <Post>
                <PostTitle>페드로</PostTitle>
                <PostContext>페드로페드로</PostContext>
                <PostBottom>
                    <PostBoradName>자유게시판</PostBoradName>
                </PostBottom>
            </Post>
        </PopularPostContainer>
    );
}

export default PopularPost;
