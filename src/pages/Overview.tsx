import Chart from "../components/overview/Chart";
import Statistics from "../components/overview/Statistics";
import TopProducts from "../components/overview/TopProducts";

const Overview: React.FC = () => {
  return (
    <div className="space-y-5">
      <Statistics />
      <Chart />
      <TopProducts />
    </div>
  );
};

export default Overview;
