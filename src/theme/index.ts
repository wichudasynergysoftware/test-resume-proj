import { createTheme, responsiveFontSizes } from "@mui/material";
import { palette } from "./palette";
import { typography } from "./typography";

let theme = createTheme({
  typography,
  palette: palette,
});

theme = responsiveFontSizes(theme);

export default theme;
