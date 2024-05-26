import { Outlet } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div>
      <Dashboard />
      <Outlet />
    </div>
  );
}

export default App;
