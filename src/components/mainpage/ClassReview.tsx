import styled from 'styled-components';
import unbrightStar from '../../assets/mainpage/gray_star.png';
import brightStar from '../../assets/mainpage/yellow_star.png';

const ClassReviewContainer = styled.div`
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

const ReviewPost = styled.div`
    height: 90px;
    padding: 10px;
    outline: solid 1px gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`;

const ReviewScore = styled.div`
    height: 20px;
    display: flex;
    flex-direction: row;

    & img {
        width: 15px;
        height: 15px;
        margin-right: 3px;
    }
`;

const ReviewTitle = styled.h5`
    margin: 0;
    text-align: left;
    color: white;
`;

const ReviewContext = styled.p`
    margin: 8px 0;
    text-align: left;
    color: white;
    font-size: 0.7rem;
`;

function ClassReview() {
    return (
        <ClassReviewContainer>
            <Title>최근 강의평</Title>
            <ReviewPost>
                <ReviewScore>
                    <img src={brightStar} />
                    <img src={brightStar} />
                    <img src={brightStar} />
                    <img src={brightStar} />
                    <img src={unbrightStar} />
                </ReviewScore>
                <ReviewTitle>반도체전자회로 : 김도현</ReviewTitle>
                <ReviewContext>난이도는 있지만 흐름따라 이해하면 괜찮아요 ppt위주수업입니다</ReviewContext>
            </ReviewPost>
        </ClassReviewContainer>
    );
}

export default ClassReview;
