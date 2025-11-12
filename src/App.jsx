import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";

import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/skills";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Hero/>
		<About/>
		<Skills/>
    </ThemeProvider>
  );
}
