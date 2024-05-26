import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MenuBtn = styled.button`
  background-color: transparent;
  border: none;
`;
export const NavBar = styled.nav`
  width: 100%;
`;
export const ListUl = styled.ul`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
export const ItemLi = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
`;
export const AiFillHomeEl = styled(AiFillHome)`
  fill: #c7c7d2;
`;
export const PathTo = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 66px;
  width: 100%;
  padding: 16px;
  border-radius: 15px;
  &.active {
    background: linear-gradient(180deg, #a93bff 0%, #8834ff 100%);
    box-shadow: 0px 15px 35px 0px rgba(86, 59, 255, 0.26);
    ${AiFillHomeEl} {
      fill: #fff;
    }
  }
  &.active ~ span {
    background-color: #3734a9;
  }
`;

export const ImgEl = styled.img``;
export const BorderSpan = styled.span`
  display: inline-block;
  width: 3px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 0 10px 10px 0;
`;
export const DashboarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 102px;
  height: 100vh;
  padding: 44px 0;
  gap: 20px;
  background-color: #fff;
`;
