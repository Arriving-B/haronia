import styled from 'styled-components';
import logo from '../../assets/mainpage/logo512.png';

const PostContainer = styled.div`
    width: 100%;
    height: 100px;
    outline: solid 1px gray;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const PostContainerLeft = styled.div`
    width: 80%;
    padding: 20px;
`;

const PostContainerRight = styled.div`
    width: 8rem;
    padding-right: 15px;
    display: flex;
    justify-content: end;
`;

const PostTitle = styled.h4`
    margin: 0;
    color: white;
    text-align: left;
    font-size: 0.8rem;
`;

const PostContext = styled.p`
    margin: 2px 0 2px 0;
    color: white;
    text-align: left;
    font-size: 0.75rem;
`;

const PostBottom = styled.div`
    margin: 10px 0 0 0;
`;

const PostImage = styled.img`
    width: 60%;
    height: 60%;
    border-radius: 10px;
`;

const PostData = styled.p`
    margin: 0;
    color: white;
    text-align: left;
    font-size: 0.7rem;
`;

function Post() {
    return (
        <PostContainer>
            <PostContainerLeft>
                <PostTitle>총장님 뒷통수</PostTitle>
                <PostContext>너무 땡글땡글해</PostContext>
                <PostBottom>
                    <PostData>방금 | 익명</PostData>
                </PostBottom>
            </PostContainerLeft>
            <PostContainerRight>
                <PostImage src={logo} />
            </PostContainerRight>
        </PostContainer>
    );
}

export default Post;
