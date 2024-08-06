import { Container, Grid } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Experience from "./Experience";

export default function Home() {
  return (
    <Grid container gap={10}>
      <Container maxWidth="xl">
        <Grid container gap={{ xs: 5, sm: 20 }}>
          <Header />
          <Grid item xs={12} id="introduction">
            <Introduction />
          </Grid>
          <Grid item xs={12} id="about-me">
            <AboutMe />
          </Grid>
          <Grid item xs={12} id="experience">
            <Experience />
          </Grid>
        </Grid>
      </Container>
      <Grid item xs={12} id="contact-me">
        <ContactMe />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
