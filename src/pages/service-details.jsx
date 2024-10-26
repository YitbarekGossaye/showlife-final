import React from "react";
import { useRouter } from "next/router";
import SEO from "../common/seo";
import ServiceDetails from "../components/service-details";
import Wrapper from "../layout/wrapper";
import service_data from "@/data/service-data";

const index = () => {
  const router = useRouter();
  const { id } = router.query;

  const service = service_data.find((s) => s.id == id);

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <Wrapper>
      <SEO pageTitle={`ShowLife - Details`} />
      <ServiceDetails
        serviceId={id}
        title={service.title}
        innertitle={service.subtitle}
      />
    </Wrapper>
  );
};

export default index;
