export const statisticCardIcon: {
  name: string;
  img: string;
  id: number;
  amount: string;
  percentage: string;
  color: string;
}[] = [
  {
    name: "users",
    img: "./public/user.svg",
    id: 16,
    amount: "72.6k",
    percentage: "+25%",
    color: "#3575FF",
  },
  {
    name: "sessions",
    img: "./public/session.svg",
    id: 17,
    amount: "87.2k",
    percentage: "+47%",
    color: "#F36643",
  },
  {
    name: "bounce rate",
    img: "./public/rate.svg",
    id: 18,
    amount: "26.3%",
    percentage: "-28%",
    color: "#4524F8",
  },
  {
    name: "session duration",
    img: "./public/duration.svg",
    id: 19,
    amount: "2m 18s",
    percentage: "+13%",
    color: "#3575FF",
  },
];

export const DailyCardData = [
  {
    today: "5,461",
    expected: "8,085",
    img: "./public/blue.svg",
    id: 20,
    name: "users",
  },
  {
    today: "140",
    expected: "120",
    img: "./public/orange.svg",
    id: 21,
    name: "goals",
  },
];
