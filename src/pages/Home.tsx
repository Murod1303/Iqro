import Button from "../components/button/Button";
import { Header } from "../components/header/Header";
import LineGraph from "../components/lineGraph/LineGraph";
import Session from "../components/session/Session";
import DailyCard from "../components/statistic/DailyCard";
import StatisticCard from "../components/statistic/StatisticCard";
import { statisticCardIcon } from "../data";
import {
  HomeInner,
  HomeWrapper,
  StatisCard,
  StatisContainer,
} from "../general.styles";

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <HomeInner>
        <LineGraph />
        <Session />
        <StatisContainer>
          <StatisCard>
            {statisticCardIcon &&
              statisticCardIcon.map((item) => (
                <StatisticCard key={item.id} item={item} />
              ))}
          </StatisCard>
          <Button name="Export" left={{ marginLeft: "auto" }} />
        </StatisContainer>
        <DailyCard />
      </HomeInner>
    </HomeWrapper>
  );
};

export default Home;
