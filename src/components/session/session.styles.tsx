import styled from "styled-components";
import { ChartIcon } from "../../../public/Images";

export const SessionBody = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  width: 514px;
  width: 100%;
  height: 294px;
  padding: 55px 82px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 20px 45px 0px #f0edf6;
`;
export const ChartIconStyle = styled(ChartIcon)``;
export const SessionContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SessionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
`;
export const SeesionSubTitle = styled.span`
  margin-bottom: 10px;
  color: #5a5881;
  font-size: 14px;
  font-weight: 700;
`;
export const SessionYearText = styled.span`
  color: #5a5881;
  font-size: 14px;
  font-weight: 700;
  text-transform: capitalize;
`;
export const SessionStrong = styled.strong`
  color: #15134b;
  font-size: 18px;
  font-weight: 500;
`;
export const SessionSpan = styled.span`
  color: #5a5881;
  font-size: 13px;
  font-weight: 500;
`;
export const SessionTitleWrapper = styled(SessionContent)`
  flex-direction: row;
  justify-content: space-between;
`;
export const SessionWrapper = styled.div``;
