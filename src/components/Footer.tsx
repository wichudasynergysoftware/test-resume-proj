import { Grid, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Grid
      flexDirection={"column"}
      textAlign={"center"}
      bgcolor={"primary.main"}
      pb={10}
    >
      <Typography variant="h5" fontWeight={700}>
        " Thanks for watching "
      </Typography>
      <Typography variant="h6" fontWeight={700} mt={3}>
        Are you interested me?
      </Typography>
      <Typography variant="h6" fontWeight={700}>
        Contact me
      </Typography>
      <Typography variant="h6" fontWeight={700}>
        wichuda.phromsoda@gmail.com
      </Typography>
    </Grid>
  );
}
