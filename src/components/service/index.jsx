import Breadcrumb from "@/common/breadcrumbs/breadcrumb";
import HeroBanner from "@/common/hero-banner";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import CardArea from "../../common/card-area";
import SalesArea from "../../common/sales-area";
import TestimonialArea from "../../common/testimonial-area";
import CtaArea from "../contact/cta-area";
import FaqArea from "../homes/home-2/faq-area";
import ServiceArea from "./service-area";
import ContextProvider from "@/context/ContextProvider";
import AnimateMouse from "../homes/home-5/AnimateMouse";

const Service = () => {
  return (
    <>
      <ContextProvider>
        <AnimateMouse />
        <HeaderSix />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <Breadcrumb title_top={"What"} title_bottom={"We Do"} />
              <HeroBanner
                title="What"
                subtitle="We Do"
                bg_img="/assets/img/breadcrumb/breadcrumb-2.jpg"
              />
              <ServiceArea />
              <CardArea style_service={true} />
              <SalesArea style_service={true} />
              <TestimonialArea />
              <FaqArea style_service={true} />
              <CtaArea />
            </main>
            <FooterFive style_contact={true} style_team={true} />
          </div>
        </div>
      </ContextProvider>
    </>
  );
};

export default Service;
