import { Box, Typography } from "@mui/material";

interface ItemProps {
  author: string;
  role: string;
  message: string;
}
export const AnnouncementItem = ({ author, role, message }: ItemProps) => {
  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center", paddingY: 1 }}>
      <Box
        sx={{
          width: { xs: "30px", md: "40px" },
          height: { xs: "30px", md: "40px" },
        }}
      >
        <img
          src="/profile.jpeg"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "100%",
          }}
        />
      </Box>
      <Box>
        <Typography
          sx={{
            color: "text.primary",
            fontWeight: "bold",
            fontSize: { xs: 16, md: 20 },
          }}
        >
          {author}
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            fontWeight: "light",
            fontSize: { xs: 12, md: 16 },
          }}
        >
          {role}
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "text.secondary",
          fontWeight: "light",
          fontSize: { xs: 12, md: 16 },
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};
