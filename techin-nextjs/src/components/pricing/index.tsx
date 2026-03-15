import Breadcrumb from "@/common/Breadcrumb";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";
import PricingArea from "./PricingArea";
import FaqHomeTwo from "../homes/home-2/FaqHomeTwo";
import TestimonialHomeTwo from "../homes/home-2/TestimonialHomeTwo";
import BlogHomeOne from "../homes/home-1/BlogHomeOne";
import CtaHomeTwo from "../homes/home-2/CtaHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";



const Pricing = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumb title="Pricing" subtitle="Pricing" />
      <PricingArea />
      <FaqHomeTwo />
      <TestimonialHomeTwo style_2={true} />
      <BlogHomeOne />
      <CtaHomeTwo />
      <FooterTwo />
    </Wrapper>
  );
};

export default Pricing;