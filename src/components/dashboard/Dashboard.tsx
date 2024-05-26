import { Images } from "../../../public/Images";
import {
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
      <MenuBtn></MenuBtn>
      <NavBar>
        <ListUl>
          {Images &&
            Images.map((item) => {
              return (
                <ItemLi key={item.id}>
                  <PathTo to={item?.path}>
                    <ImgEl src={item.img} alt={item.name} />
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
