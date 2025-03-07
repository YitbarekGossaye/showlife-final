import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import TestimonialArea from "@/common/testimonial-area";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import ServiceDetailsArea from "./service-details-area";

const ServiceDetails = ({ serviceId, title, innertitle }) => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo serviceId={serviceId} title={title} innertitle={title} />
            <ServiceDetailsArea serviceId={serviceId} />
            <TestimonialArea />
          </main>
          <FooterFive style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
