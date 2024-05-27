import { Header } from "../components/header/Header";
import LineGraph from "../components/lineGraph/LineGraph";
import Session from "../components/session/Session";
import { HomeInner, HomeWrapper } from "../general.styles";

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <HomeInner>
        <LineGraph />
        <Session />
      </HomeInner>
    </HomeWrapper>
  );
};

export default Home;
