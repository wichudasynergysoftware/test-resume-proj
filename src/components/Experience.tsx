import { Box, Button, Divider, Grid, Typography } from "@mui/material";

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
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item xs={12} sm={12} md={8} display={"flex"} gap={3}>
          <Grid item>
            <Button variant="contained">2022</Button>
          </Grid>
          <Grid item flex={1}>
            <ExperienceBox
              title={"Ubon Microtech Co., Ltd"}
              subTitle="Developer"
              body={
                <Grid container gap={2}>
                  <Grid item sx={{ textAlign: "justify" }}>
                    1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eos optio tempora doloremque sint totam explicabo architecto
                    iure odio sed accusantium unde iste omnis facere quis
                    doloribus, itaque blanditiis eum ipsa.
                  </Grid>
                  <Grid item sx={{ textAlign: "justify" }}>
                    2. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eos optio tempora doloremque sint totam explicabo architecto
                    iure odio sed accusantium unde iste omnis facere quis
                    doloribus, itaque blanditiis eum ipsa.
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={8} display={"flex"} gap={3}>
          <Grid item>
            <Button variant="contained">2022</Button>
          </Grid>
          <Grid item flex={1}>
            <ExperienceBox
              title={"Ubon Microtech Co., Ltd"}
              subTitle="Developer"
              body={
                <Grid container gap={2}>
                  <Grid item sx={{ textAlign: "justify" }}>
                    1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eos optio tempora doloremque sint totam explicabo architecto
                    iure odio sed accusantium unde iste omnis facere quis
                    doloribus, itaque blanditiis eum ipsa.
                  </Grid>
                  <Grid item sx={{ textAlign: "justify" }}>
                    2. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eos optio tempora doloremque sint totam explicabo architecto
                    iure odio sed accusantium unde iste omnis facere quis
                    doloribus, itaque blanditiis eum ipsa.
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={8} display={"flex"} gap={3}>
          <Grid item>
            <Button variant="contained">2022</Button>
          </Grid>
          <Grid item flex={1}>
            <ExperienceBox
              title={"Ubon Microtech Co., Ltd"}
              subTitle="Developer"
              body={
                <Grid container gap={2}>
                  <Grid item sx={{ textAlign: "justify" }}>
                    1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eos optio tempora doloremque sint totam explicabo architecto
                    iure odio sed accusantium unde iste omnis facere quis
                    doloribus, itaque blanditiis eum ipsa.
                  </Grid>
                  <Grid item sx={{ textAlign: "justify" }}>
                    2. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eos optio tempora doloremque sint totam explicabo architecto
                    iure odio sed accusantium unde iste omnis facere quis
                    doloribus, itaque blanditiis eum ipsa.
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={8} display={"flex"} gap={3}>
          <Grid item>
            <Button variant="contained">2022</Button>
          </Grid>
          <Grid item flex={1}>
            <ExperienceBox
              title={"Ubon Microtech Co., Ltd"}
              subTitle="Developer"
              body={
                <Grid container gap={2}>
                  <Grid item sx={{ textAlign: "justify" }}>
                    1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eos optio tempora doloremque sint totam explicabo architecto
                    iure odio sed accusantium unde iste omnis facere quis
                    doloribus, itaque blanditiis eum ipsa.
                  </Grid>
                  <Grid item sx={{ textAlign: "justify" }}>
                    2. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eos optio tempora doloremque sint totam explicabo architecto
                    iure odio sed accusantium unde iste omnis facere quis
                    doloribus, itaque blanditiis eum ipsa.
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
