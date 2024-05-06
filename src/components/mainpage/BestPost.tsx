import styled from 'styled-components';

const BestPostContainer = styled.div`
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

function BestPost() {
    return (
        <BestPostContainer>
            <Title>BEST 게시판</Title>
        </BestPostContainer>
    );
}

export default BestPost;
