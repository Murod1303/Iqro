import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  background-color: #fff;
`;
export const Container = styled.div`
  max-width: 1446px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;
export const HomeWrapper = styled.div`
  width: calc(100% - 102px);
  padding: 26px 30px 30px 30px;
  height: 100vh;
  overflow-y: scroll;
`;

export const HomeInner = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;
export const StatisCard = styled.div`
  display: flex;
  gap: 30px;
`;
export const StatisContainer = styled(StatisCard)`
  flex-direction: column;
`;
