import "./App.css";
// import { BarChart } from './BarChart';
import "c3/c3.css";
import { PieChart } from "./PieChart";
import { AreaChart } from "./AreaChart";
import { ApexBarChart } from "./apex/ApexBarChart";
import { ApexAreaChart } from "./apex/ApexAreaChart";
import { ApexComboChart } from "./apex/ApexComboChart";

function App() {
  return (
    <div className="App">
      <AreaChart />
      {/* <BarChart /> */}
      {/* <PieChart/> */}
      {/* <ApexBarChart/> */}

      {/* <ApexAreaChart/> */}

      <ApexComboChart />
    </div>
  );
}

export default App;
