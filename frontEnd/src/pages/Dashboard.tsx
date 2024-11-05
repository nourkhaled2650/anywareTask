import requireAuth from "../components/requireAuth";

const Dashboard = requireAuth(() => {
  return <div>Dashboard</div>;
});

export default Dashboard;
