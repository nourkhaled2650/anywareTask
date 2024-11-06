import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useGetAnnouncementsQuery } from "../state/serverState/announcementApi";
import { AnnouncementItem } from "./AnnouncementItem";

const Announcements = () => {
  const {
    data: announcements,
    isLoading,
    isSuccess,
  } = useGetAnnouncementsQuery();
  return (
    <Box
      component={"section"}
      sx={{
        bgcolor: "background.paper",
        position: "relative",
        padding: 2,
        borderRadius: "10px",
      }}
    >
      <Typography
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          fontSize: { xs: 20, md: 30 },
        }}
      >
        Announcements
      </Typography>
      <Typography sx={{ color: "text.secondary" }}>
        Recent Updates, You are missing something.
      </Typography>
      <Box sx={{ padding: 1 }}>
        {isLoading && <CircularProgress color="secondary" />}
        {isSuccess &&
          announcements.map((annouc) => (
            <AnnouncementItem
              key={annouc._id}
              author={annouc.author}
              role={annouc.role}
              message={annouc.message}
            />
          ))}
      </Box>
      <Button
        variant="text"
        sx={{
          position: "absolute",
          top: 2,
          right: 2,
          color: "secondary.main",
          fontWeight: "bold",
        }}
      >
        All
      </Button>
    </Box>
  );
};

export default Announcements;
