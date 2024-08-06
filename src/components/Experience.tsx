import { Box, Chip, Divider, Grid, Typography } from "@mui/material";

interface Props {
  title: string;
  subTitle?: string;
  body: any;
}

const ExperienceBox = ({ title, subTitle, body }: Props) => {
  return (
    <Box
      sx={{
        px: 2,
        position: "relative",
        mb: 10,
      }}
    >
      <Typography variant="h6" sx={{ color: "secondary.main" }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        {subTitle}
      </Typography>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          height: { xs: "100%", sm: "100%" },
          bgcolor: "info.main",
          position: "absolute",
          top: 0,
          left: -5,
          width: 4,
        }}
      />
      {body}
    </Box>
  );
};

export default function Experience() {
  return (
    <Grid
      container
      gap={2}
      display={"flex"}
      flexDirection={{ xs: "column", sm: "row" }}
    >
      <Grid item>
        <Typography variant="h4" color={"secondary.main"}>
          Experiences
        </Typography>
      </Grid>
      <Grid
        item
        flex={1}
        display={"flex"}
        flexDirection={"column-reverse"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          gap={3}
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Grid
            item
            xs={12}
            sm={2}
            display={"flex"}
            justifyContent={{ xs: "flex-start", sm: "flex-end" }}
          >
            <Chip
              color="success"
              label="2022"
              sx={{
                border: "1px solid",
                borderColor: "secondary.main",
                width: "100%",
              }}
            />
          </Grid>
          <Grid item flex={1}>
            <ExperienceBox
              title={"Final Year Project"}
              subTitle="Full Stack"
              body={
                <Grid container gap={2}>
                  <Grid item sx={{ textAlign: "justify" }}>
                    - Developed a website for a clinic management system that
                    can handle patient data, prescription data, income data and
                    expense data. Details on patient appoinments patients
                    recieving therapy keeping medical records among them.
                  </Grid>
                  <Grid item sx={{ textAlign: "justify" }}>
                    <Typography variant="body2" color="secondary.main">
                      Tools - Django, Python, MySql, Bootstrap
                    </Typography>
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          gap={3}
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Grid
            item
            xs={12}
            sm={2}
            display={"flex"}
            justifyContent={{ xs: "flex-start", sm: "flex-end" }}
          >
            <Chip
              color="success"
              label="2022 (4 months)"
              sx={{
                border: "1px solid",
                borderColor: "secondary.main",
                width: "100%",
              }}
            />
          </Grid>
          <Grid item flex={1}>
            <ExperienceBox
              title={"Touch Technologies Co., Ltd (North East Region)"}
              subTitle="Backend Developer"
              body={
                <Grid container gap={2}>
                  <Grid container sx={{ textAlign: "justify" }} gap={2}>
                    <Typography>
                      - Prepare a website documents such as ER diagrams,
                      sequence diagrams.
                    </Typography>
                    <Typography>
                      - Developed the back-end of the website that the
                      organization uses to display employee information and
                      comprehensive information.
                    </Typography>
                  </Grid>
                  <Grid item sx={{ textAlign: "justify" }}>
                    <Typography variant="body2" color="secondary.main">
                      Tools - Golang, MongoDB, Postman
                    </Typography>
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          gap={3}
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Grid
            item
            xs={12}
            sm={2}
            display={"flex"}
            justifyContent={{ xs: "flex-start", sm: "flex-end" }}
          >
            <Chip
              color="success"
              label="Part time"
              sx={{
                border: "1px solid",
                borderColor: "secondary.main",
                width: "100%",
              }}
            />
          </Grid>
          <Grid item flex={1}>
            <ExperienceBox
              title={"Ubon Microtech Co., Ltd"}
              subTitle="Developer"
              body={
                <Grid container gap={2}>
                  <Grid container gap={2} sx={{ textAlign: "justify" }}>
                    <Typography>
                      - Developed a website that users can submit ideas for
                      topics and respond to the posts of others.
                    </Typography>
                    <Typography>
                      - Developed an application that notifies users when
                      lightning strikes happens nearby. (React Native)
                    </Typography>
                    <Typography>
                      - Developed a website that may notify user when there is a
                      lightning strike nearby the user’s present location.
                    </Typography>
                  </Grid>
                  <Grid item sx={{ textAlign: "justify" }}>
                    <Typography variant="body2" color="secondary.main">
                      Tools - ReactJs, NodeJs, MySql, Docker
                    </Typography>
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          gap={3}
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Grid
            item
            xs={12}
            sm={2}
            display={"flex"}
            justifyContent={{ xs: "flex-start", sm: "flex-end" }}
          >
            <Chip
              color="success"
              label="June 2023 - Present"
              sx={{
                border: "1px solid",
                borderColor: "secondary.main",
                width: "100%",
              }}
            />
          </Grid>
          <Grid item flex={1}>
            <ExperienceBox
              title={"Synergy Software Co., Ltd"}
              subTitle="Full Stack Developer"
              body={
                <Grid container gap={4}>
                  <Grid container sx={{ textAlign: "justify" }}>
                    <Typography>
                      - Developed a DCC system that users wishing to book a room
                      will utilize or office supplies. Some of the system’s
                      capabilities are device management and user work hours.
                    </Typography>
                    <Typography variant="body2" color="secondary.main">
                      Tools - NextJs, .Net Core C#, Oracle Sql Developer, MUI
                    </Typography>
                  </Grid>
                  <Grid container sx={{ textAlign: "justify" }}>
                    <Typography>
                      - Developed a case file document system (E-DOC system) to
                      store documents in the required categories, the system has
                      the ability to create folders and create several divisions
                      within the document respository to safeguard the
                      confidentiality of the documents. Additional features of
                      the system, including as transfer, share, delete and move
                      files or folders.
                    </Typography>
                    <Typography variant="body2" color="secondary.main">
                      Tools - React, TypeScript .Net Core C#, Oracle Sql
                      Developer, MUI
                    </Typography>
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
