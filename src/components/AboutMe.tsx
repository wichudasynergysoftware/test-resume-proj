import { Box, Grid, Typography } from "@mui/material";

const mySkills = [
  { id: 1, name: "ReactJs", icon: "react" },
  { id: 2, name: "NextJs", icon: "nextjs" },
  { id: 3, name: "Vue", icon: "vue" },
  { id: 4, name: "HTML&CSS", icon: "html" },
  { id: 5, name: "Material UI", icon: "mui" },
  { id: 6, name: "TypeScript", icon: "typescript" },
  { id: 7, name: "SQL", icon: "sql" },
  { id: 8, name: ".Net core C#", icon: "netcore" },
];

const otherSkills = [
  { id: 1, name: "Oracle", icon: "oracle" },
  { id: 2, name: "MongoDB", icon: "mongodb" },
  { id: 3, name: "MySQL", icon: "mysql" },
  { id: 4, name: "Github", icon: "github" },
  { id: 5, name: "Docker", icon: "docker" },
  { id: 6, name: "Figma", icon: "figma" },
];

export default function AboutMe() {
  return (
    <Grid container gap={10}>
      <Grid item xs={12}>
        <Typography variant="h4" color={"secondary.main"} mb={{ xs: 2, sm: 0 }}>
          About Me
        </Typography>
        <Grid
          item
          mt={2}
          sx={{
            m: { xs: 0, sm: 7 },
            bgcolor: "primary.light",
            borderRadius: 3,
            p: 5,
            border: "1px solid",
            borderColor: "secondary.main",
          }}
        >
          <Typography
            sx={{
              textAlign: "justify",
              fontSize: { xs: 14, sm: 18 },
              // wordBreak: "break-word",
              // hyphens: "auto",
            }}
          >
            Hello, I’m Wichuda Phromsoda. I received my computer science degree
            from Ubon Ratchathani university in 2022. I am skilled in back-end
            development using .Net core C# and am skilled in front-end
            technologies like ReactJs and NextJs. I want to be able to use my
            skills and expertise in my profession, and I plan to work the
            organization to gain more experience and knowledge.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        display={"flex"}
        justifyContent={{ xs: "center", sm: "space-between" }}
      >
        <Grid item xs={12} mb={2}>
          <Typography variant="h5">Education</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ borderLeft: "4px solid", borderColor: "secondary.main" }}
          px={2}
          mb={{ xs: 4, sm: 0 }}
        >
          <Typography variant="h6" color="secondary.main">
            Ubon Ratchathani University
          </Typography>
          <Typography>Bachelor of Science</Typography>
          <Typography>Computer Science Major</Typography>
          <Typography>2019 - 2022</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ borderLeft: "4px solid", borderColor: "secondary.main" }}
          px={2}
        >
          <Typography variant="h6" color="secondary.main">
            Muang Samsip Amphawan Wittaya School
          </Typography>
          <Typography>Science - Math Program</Typography>
          <Typography>2013 - 2019</Typography>
          <Typography>.</Typography>
        </Grid>
      </Grid>
      <Grid container gap={1} display={"flex"} justifyContent={"space-between"}>
        <Grid item xs={12}>
          <Typography variant="h5">My Skills</Typography>
        </Grid>
        {mySkills.map((item: any) => (
          <Grid
            item
            mt={2}
            xs={5.5}
            md={2.8}
            key={item.id}
            py={6}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              bgcolor: "primary.light",
              borderRadius: 3,
              mb: 2,
              cursor: "pointer",
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.07)",
                bgcolor: "secondary.main",
                color: "info.dark",
              },
            }}
            flexDirection={"column"}
          >
            <Box
              sx={{
                borderRadius: 50,
                bgcolor: "background.paper",
                width: 100,
                height: 100,
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={`/icons/${item.icon}.png`}
                alt={item.icon}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography variant="body1" mt={1}>
              {item.name}
            </Typography>
          </Grid>
        ))}
        <Grid item xs={5.5} md={2.8}></Grid>
      </Grid>
      <Grid container gap={1} display={"flex"} justifyContent={"space-between"}>
        <Grid item xs={12}>
          <Typography variant="h5">Other Skills</Typography>
        </Grid>
        {otherSkills.map((item: any) => (
          <Grid
            item
            xs={5.5}
            md={2.8}
            mt={2}
            key={item.id}
            py={6}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              bgcolor: "primary.light",
              borderRadius: 3,
              mb: 2,
              cursor: "pointer",
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.07)",
                bgcolor: "secondary.main",
                color: "info.dark",
              },
            }}
            flexDirection={"column"}
          >
            <Box
              sx={{
                borderRadius: 50,
                bgcolor: "background.paper",
                width: 100,
                height: 100,
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={`/icons/${item.icon}.png`}
                alt={item.icon}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography variant="body1" mt={1}>
              {item.name}
            </Typography>
          </Grid>
        ))}
        <Grid item xs={5.5} md={2.8}></Grid>
        <Grid item xs={5.5} md={2.8}></Grid>
      </Grid>
    </Grid>
  );
}
