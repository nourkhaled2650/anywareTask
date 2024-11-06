import Grid from "@mui/material/Grid2";
import requireAuth from "../components/requireAuth";
import Tips from "../components/Tips";
import Announcements from "../components/Announcements";
import Quizzes from "../components/Quizzes";

const Dashboard = requireAuth(() => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <Tips />
      </Grid>
      <Grid
        sx={{ border: "4px solid green", order: { xs: 2, sm: 1 } }}
        size={{ xs: 12, sm: 8 }}
      >
        <Announcements />
      </Grid>
      <Grid
        sx={{ border: "4px solid yellow", order: { xs: 1, sm: 2 } }}
        size={{ xs: 12, sm: 4 }}
      >
        <Quizzes />
      </Grid>
    </Grid>
  );
});

export default Dashboard;
