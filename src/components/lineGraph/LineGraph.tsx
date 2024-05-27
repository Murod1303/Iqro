import {
  ItemOfMonth,
  LineBody,
  LineChartIconStyle,
  LineTitle,
  LineWrapper,
  ListOfMonth,
} from "./lineGraph.styles";

const months: {
  id: number;
  month: string;
}[] = [
  {
    id: 1,
    month: "Jan",
  },
  {
    id: 2,
    month: "Feb",
  },
  {
    id: 3,
    month: "Mar",
  },
  {
    id: 4,
    month: "Apr",
  },
  {
    id: 5,
    month: "May",
  },
  {
    id: 6,
    month: "Jun",
  },
  {
    id: 7,
    month: "Jul",
  },
  {
    id: 8,
    month: "Aug",
  },
  {
    id: 9,
    month: "Sep",
  },
  {
    id: 10,
    month: "Oct",
  },
  {
    id: 11,
    month: "Nov",
  },
  {
    id: 12,
    month: "Dec",
  },
];
const LineGraph = () => {
  return (
    <LineWrapper>
      <LineTitle>Performance</LineTitle>
      <LineBody>
        <LineChartIconStyle />
        <ListOfMonth>
          {months &&
            months.map((item) => {
              return <ItemOfMonth key={item.id}>{item.month}</ItemOfMonth>;
            })}
        </ListOfMonth>
      </LineBody>
    </LineWrapper>
  );
};

export default LineGraph;
