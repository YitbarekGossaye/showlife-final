import AboutArea from "@/common/about-area";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import HeroBanner from "../../common/hero-banner";
import CtaArea from "../contact/cta-area";
import TeamArea from "../homes/home-4/team-area";
import Brand from "./brand";
import CompanyArea from "./company-area";
import JobArea from "./job-area";
import JourneyArea from "./journey-area";
import AnimateMouse from "../homes/home-5/AnimateMouse";
import ContextProvider from "@/context/ContextProvider";

const About = () => {
  return (
    <>
      <ContextProvider>
        <AnimateMouse />
        <HeaderSix />
        <Breadcrumb title_top="About" title_bottom="ShowLife" />
        <HeroBanner
          title="About"
          subtitle="ShowLife"
          bg_img="/assets/img/breadcrumb/breadcrumb-2.jpg"
        />
        <Brand />
        <CompanyArea />
        <AboutArea />
        <TeamArea bg_style={true} />
        {/* <JourneyArea /> */}
        {/* <JobArea /> */}
        <CtaArea />
        <FooterFive style_contact={true} style_team={true} />
      </ContextProvider>
    </>
  );
};

export default About;
