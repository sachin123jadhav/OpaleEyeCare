import ContactUs from "@/components/contact/contact";
import SEO from "@/components/seo";
import LayoutTwo from "@/layout/layout-2";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
    <LayoutTwo>
      <SEO pageTitle={"contact us"} />
      <ContactUs />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;
