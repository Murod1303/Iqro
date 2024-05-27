import { LineTitle } from "../lineGraph/lineGraph.styles";
import {
  ChartIconStyle,
  SeesionSubTitle,
  SessionBody,
  SessionContent,
  SessionContentWrapper,
  SessionSpan,
  SessionStrong,
  SessionWrapper,
} from "./session.styles";

const MockData: {
  desktop: string;
  id: number;
  strong: string;
  span: string;
}[] = [
  {
    desktop: "Desktop",
    id: 1,
    strong: "8,085",
    span: "13%",
  },
  {
    desktop: "Mobile ",
    id: 2,
    strong: "8,085",
    span: "13%",
  },
  {
    desktop: "Tablets ",
    id: 3,
    strong: "8,085",
    span: "13%",
  },
];
const Session = () => {
  return (
    <SessionWrapper>
      <LineTitle>Sessions By Device</LineTitle>
      <SessionBody>
        <ChartIconStyle />
        <SessionContentWrapper>
          {MockData &&
            MockData.map((item) => {
              return (
                <SessionContent key={item.id}>
                  <SeesionSubTitle>{item.desktop} </SeesionSubTitle>
                  <p>
                    <SessionStrong>{item.strong}</SessionStrong>{" "}
                    <SessionSpan>{item.span}</SessionSpan>
                  </p>
                </SessionContent>
              );
            })}
        </SessionContentWrapper>
      </SessionBody>
    </SessionWrapper>
  );
};

export default Session;
