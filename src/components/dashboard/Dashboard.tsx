import { BtnMenu, Images } from "../../../public/Images";
import {
  AiFillHomeEl,
  BorderSpan,
  DashboarWrapper,
  ImgEl,
  ItemLi,
  ListUl,
  MenuBtn,
  NavBar,
  PathTo,
} from "./dashboard.styles";

const Dashboard = () => {
  return (
    <DashboarWrapper>
      <MenuBtn>
        <ImgEl src={BtnMenu.img} alt={BtnMenu.name} />
      </MenuBtn>
      <NavBar>
        <ListUl>
          <ItemLi>
            <PathTo to="/">
              <AiFillHomeEl width={16} height={16} fill="#C7C7D2" />
            </PathTo>
            <BorderSpan></BorderSpan>
          </ItemLi>
          {Images &&
            Images.map((item) => {
              return (
                <ItemLi key={item.id}>
                  <PathTo to={item?.path}>
                    <ImgEl
                      width={16}
                      height={16}
                      src={item.img}
                      alt={item.name}
                    />
                  </PathTo>
                  <BorderSpan></BorderSpan>
                </ItemLi>
              );
            })}
        </ListUl>
      </NavBar>
    </DashboarWrapper>
  );
};

export default Dashboard;
