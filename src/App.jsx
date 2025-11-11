import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import Layout from "./components/layout/Layout";

import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/skills";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Hero/>
		<About/>
		<Skills/>
      </Layout>
    </ThemeProvider>
  );
}
