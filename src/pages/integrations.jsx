import React from "react";
import SEO from "../common/seo";
import Integrations from "../components/integrations";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"ShowLife - Integrations"} />
      <Integrations />
    </Wrapper>
  );
};

export default index;
