import { DailyCardData } from "../../data";
import {
  DailyCardWrapper,
  DailyExpStrong,
  DailyExpText,
  DailyExpWrapper,
  DailyStatisWrapper,
  DailyStatistext,
  DailyTodayStrong,
  DailyTodayText,
  DailyTodayWrapper,
  DailyWrapper,
} from "./statis.style";

const DailyCard = () => {
  return (
    <DailyWrapper>
      {DailyCardData &&
        DailyCardData.map((item) => (
          <DailyCardWrapper key={item.id}>
            <DailyTodayWrapper>
              <DailyTodayStrong>{item.today}</DailyTodayStrong>
              <DailyTodayText>Today</DailyTodayText>
            </DailyTodayWrapper>
            <DailyStatisWrapper style={{ backgroundImage: `url(${item.img})` }}>
              <DailyStatistext>{item.name}</DailyStatistext>
            </DailyStatisWrapper>
            <DailyExpWrapper>
              <DailyExpStrong>{item.expected}</DailyExpStrong>
              <DailyExpText>Expected</DailyExpText>
            </DailyExpWrapper>
          </DailyCardWrapper>
        ))}
    </DailyWrapper>
  );
};

export default DailyCard;
