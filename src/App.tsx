import { Outlet } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import { Wrapper } from "./general.styles";

function App() {
  return (
    <Wrapper>
      <Dashboard />
      <Outlet />
    </Wrapper>
  );
}

export default App;
