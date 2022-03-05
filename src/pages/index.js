import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Services from "sections/services";
import Testimonials from "sections/testimonials";
import OurTeam from "sections/our-team";
import OtherServices from "sections/other-services";
import WhyUs from "sections/why-us";
import SubscribeUs from "sections/subscribe-us";
import Blog from "sections/blog";

// inicial donde se cargan todas las seciones del landing
export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Solícito Software" />
        <Banner />
        <Services />
        {/* <Testimonials /> */}
        <OurTeam />
        <OtherServices />
        <WhyUs />
        {/* <Blog /> */}
        <SubscribeUs />
      </Layout>
    </ThemeProvider>
  );
}
