import { Outlet } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  border-radius: 20px;
  gap: 30px;
`;
function App() {
  return (
    <Wrapper>
      <Dashboard />
      <Outlet />
    </Wrapper>
  );
}

export default App;
