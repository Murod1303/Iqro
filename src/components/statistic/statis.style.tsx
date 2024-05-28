import styled from "styled-components";

export const StatisImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 50px;
  height: 50px;
  margin-bottom: 30px;
  border-radius: 10px;
  overflow: hidden;
  & img {
    position: relative;
    z-index: 2;
  }
`;
export const BackDrop = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0.1;
`;
export const StatisBody = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StatisSubTitle = styled.span`
  margin-bottom: 10px;
  color: #5a5881;
  font-size: 13px;
  font-weight: 700;
  text-transform: capitalize;
`;
export const StatisStrong = styled.strong`
  margin-bottom: 10px;
  color: #15134b;
  font-size: 24px;
  font-weight: 500;
  text-transform: capitalize;
`;
export const StatisSpan = styled.span`
  color: #5a5881;
  font-size: 13px;
  font-weight: 500;
  text-transform: capitalize;
`;
export const StatisCardWrapper = styled.div`
  width: 140px;
  height: 200px;
  padding: 20px 10px 20px 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 20px 45px 0px #f0edf6;
`;

/* Daily Card  */
export const DailyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const DailyCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 46px;
  width: 310px;
  height: 140px;
  padding: 40px 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 20px 45px 0px #f0edf6;
`;
export const DailyTodayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const DailyTodayStrong = styled.strong``;
export const DailyTodayText = styled.span``;
export const DailyStatisWrapper = styled.div`
  width: 58px;
  height: 58px;
  background-size: 100%;
  background-position: 180px -45px;
`;
export const DailyStatistext = styled.span``;
export const DailyExpWrapper = styled(DailyTodayWrapper)``;
export const DailyExpStrong = styled.strong``;
export const DailyExpText = styled.span``;
/* Daily Card  */
