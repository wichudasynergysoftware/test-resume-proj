import { Grid, Typography } from "@mui/material";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

interface Props {
  title: string;
  icon: any;
}

const ContactGrid = ({ title, icon }: Props) => {
  return (
    <Grid
      item
      xs={12}
      display={"flex"}
      bgcolor={"primary.main"}
      py={2}
      alignItems={"center"}
      justifyContent={"center"}
      gap={2}
      borderRadius={3}
    >
      {icon}
      <Typography sx={{ color: "secondary.main" }}>{title}</Typography>
    </Grid>
  );
};

export default function ContactMe() {
  return (
    <Grid
      container
      sx={{
        bgcolor: "primary.light",
        borderTop: "2px solid",
        borderBottom: "2px solid",
        borderColor: "secondary.main",
        py: 10,
        color: "info.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      gap={{ xs: 2, sm: 4 }}
      px={{ xs: 2, sm: 0 }}
    >
      <Grid item xs={12} textAlign={"center"}>
        <Typography variant="h4">Contact Me</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4.5} lg={3}>
        <ContactGrid
          title="wichuda.phromsoda@gmail.com"
          icon={<MailRoundedIcon sx={{ color: "info.main" }} />}
        />
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <ContactGrid
          title="093 103 9230"
          icon={<LocalPhoneRoundedIcon sx={{ color: "info.main" }} />}
        />
      </Grid>
      <Grid item xs={12} sm={9.6} md={6.2}>
        <ContactGrid
          title="2/2 Muang Samsip District, Ubon Ratchathani Province."
          icon={<LocationOnRoundedIcon sx={{ color: "info.main" }} />}
        />
      </Grid>
    </Grid>
  );
}
