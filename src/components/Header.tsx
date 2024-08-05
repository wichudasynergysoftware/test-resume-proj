import { Button, Grid, Tooltip, Typography } from "@mui/material";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

export default function Header() {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "space-between", py: 4 }}
    >
      <Grid item xs={12} md={4}>
        <Typography
          variant="h3"
          fontWeight={700}
          textAlign={{ xs: "center", md: "left" }}
        >
          Logo
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        display={"flex"}
        alignItems={"center"}
        justifyContent={{ xs: "space-between", sm: "center" }}
        gap={{ xs: 2, sm: 5 }}
        my={{ xs: 2, sm: 0 }}
      >
        <Button
          color="inherit"
          sx={{
            "&:hover": {
              color: "secondary.main",
            },
          }}
          onClick={() => handleScroll("about-me")}
        >
          About Me
        </Button>
        <Button
          color="inherit"
          sx={{
            "&:hover": {
              color: "secondary.main",
            },
          }}
          onClick={() => handleScroll("experience")}
        >
          Experience
        </Button>
        <Button
          color="inherit"
          sx={{
            "&:hover": {
              color: "secondary.main",
            },
          }}
          onClick={() => handleScroll("contact-me")}
        >
          Contact Me
        </Button>
      </Grid>
      <Grid
        item
        xs={4}
        display={{ xs: "none", sm: "flex" }}
        alignItems={"center"}
        justifyContent={"right"}
      >
        <Tooltip
          title="To be informed in advance at least 30 days."
          placement="bottom-start"
        >
          <ErrorRoundedIcon
            color="secondary"
            sx={{ cursor: "pointer", fontSize: 30 }}
          />
        </Tooltip>
      </Grid>
    </Grid>
  );
}
