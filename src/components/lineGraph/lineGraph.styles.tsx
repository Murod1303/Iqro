import styled from "styled-components";
import { LineChartIcon } from "../../../public/Images";

export const LineTitle = styled.h4`
  margin-bottom: 15px;
  color: #15134b;
  font-size: 20px;
  font-weight: 700;
  text-transform: capitalize;
`;
export const LineBody = styled.div`
  max-width: 650px;
  width: 100%;
  height: 294px;
  padding: 63px 27px 36px 28px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 20px 45px 0px #f0edf6;
`;
export const LineChartIconStyle = styled(LineChartIcon)`
  & svg {
    width: 592px;
  }
`;
export const ListOfMonth = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ItemOfMonth = styled.li`
  color: #a3abbd;
  font-size: 12px;
  font-weight: 500;
  text-transform: capitalize;
`;
export const LineWrapper = styled.div``;
