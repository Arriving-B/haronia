import styled from 'styled-components';

const TopicContainer = styled.div`
    margin-bottom: 5px;
    padding: 5px 10px;
    outline: solid 1px gray;
    text-align: left;
    color: white;
`;

const TopicGroup = styled.div`
    margin: 10px 0px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
`;

const TopicTitle = styled.p<{ color: string }>`
    position: relative;
    margin: 0 5px;
    padding: 10px;
    background-color: ${(props) => props.color};
    color: black;
    border-radius: 10px;
    white-space: nowrap;
    font-size: 0.8rem;
`;

function Topic() {
    return (
        <TopicContainer>
            <TopicGroup>
                <TopicTitle color="#EDFFFE">3D겜플 과제</TopicTitle>
                <TopicTitle color="#EDFFFE">데이터베이스 설계 휴강</TopicTitle>
                <TopicTitle color="#EDFFFE">내일 ㅅㅇㅎ 문유역 휴강인가요.</TopicTitle>
            </TopicGroup>
            <TopicGroup>
                <TopicTitle color="#FFF3F3">뭐? 어린이날?</TopicTitle>
            </TopicGroup>
        </TopicContainer>
    );
}

export default Topic;
