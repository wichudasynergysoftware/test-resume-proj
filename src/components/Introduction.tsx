import { Box, Button, Grid, Stack, Typography } from "@mui/material";

export default function Introduction() {
  return (
    <Grid container>
      <Grid
        item
        gap={4}
        flex={1}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2.5, sm: 5 }}
        >
          <Typography
            color={"secondary.main"}
            letterSpacing={{ xs: 0, sm: 5 }}
            variant="h1"
          >
            Wichuda
          </Typography>
          <Typography
            color={"secondary.main"}
            letterSpacing={{ xs: 0, sm: 5 }}
            variant="h1"
          >
            Phromsoda
          </Typography>
        </Stack>
        <Typography
          variant="h3"
          fontWeight={700}
          letterSpacing={{ xs: 0, sm: 5 }}
        >
          Developer /
        </Typography>
        <Typography
          variant="h3"
          fontWeight={700}
          letterSpacing={{ xs: 0, sm: 5 }}
        >
          Full Stack Developer
        </Typography>
        <Box>
          <Button
            variant="contained"
            sx={{
              border: "3px solid",
              borderColor: "secondary.main",
              boxShadow: 0,
              borderRadius: 2,
            }}
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        flex={1}
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: { xs: "center", sm: "center", lg: "flex-end" },
          borderRight: { xs: "none", sm: "2px solid" },
          borderColor: "info.main",
        }}
      >
        <Box
          sx={{
            width: { xs: 200, sm: 400, lg: 400 },
            height: { xs: 200, sm: 400, lg: 400 },
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bottom: -100,
            right: 0,
            bgcolor: "primary.light",
            borderRadius: 50,
          }}
        >
          <img
            src={`/icons/wichuda1.png`}
            alt={"wichuda"}
            style={{
              width: "100%",
              objectFit: "cover",
              filter: "sepia(100%)",
            }}
          />
        </Box>
        {/* <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
          <Typography>HI</Typography>
          <Typography>There</Typography>
        </Box> */}
      </Grid>
    </Grid>
  );
}
