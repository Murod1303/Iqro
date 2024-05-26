import { SMSHeadrIcon, notificationIcon } from "../../../public/Images";
import Search from "../search/Search";
import {
  HeaderEl,
  RightSide,
  RightSideImg,
  RightSideItem,
  RightSideList,
} from "./header.styles";

export const Header = () => {
  return (
    <HeaderEl>
      <Search />
      <RightSide>
        <RightSideList>
          <RightSideItem>
            <RightSideImg src={SMSHeadrIcon.img} alt={SMSHeadrIcon.name} />
          </RightSideItem>
          <RightSideItem>
            <RightSideImg
              src={notificationIcon.img}
              alt={notificationIcon.name}
            />
          </RightSideItem>
          <RightSideItem>
            <RightSideImg className="lastImg" src="./avatar.png" alt="avatar" />
          </RightSideItem>
        </RightSideList>
      </RightSide>
    </HeaderEl>
  );
};
