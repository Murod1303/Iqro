import {
  BackDrop,
  StatisBody,
  StatisCardWrapper,
  StatisImgWrapper,
  StatisSpan,
  StatisStrong,
  StatisSubTitle,
} from "./statis.style";

type StatisCardType = {
  item: {
    name: string;
    img: string;
    id: number;
    amount: string;
    percentage: string;
    color: string;
  };
};

const StatisticCard = ({ item }: StatisCardType) => {
  console.log(item.img);

  return (
    <StatisCardWrapper>
      <StatisImgWrapper>
        <img src={item.img} alt={item.name} height={16} width={16} />
        <BackDrop style={{ backgroundColor: item.color }}></BackDrop>
      </StatisImgWrapper>
      <StatisBody>
        <StatisSubTitle>{item.name}</StatisSubTitle>
        <StatisStrong>{item.amount}</StatisStrong>
        <StatisSpan>{item.percentage}</StatisSpan>
      </StatisBody>
    </StatisCardWrapper>
  );
};

export default StatisticCard;
