import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";

import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Testimonials } from "./components/sections/Testimonials";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Hero/>
		<About/>
		<Skills/>
		<Experience/>
		<Testimonials/>
		<Footer/>
    </ThemeProvider>
  );
}
