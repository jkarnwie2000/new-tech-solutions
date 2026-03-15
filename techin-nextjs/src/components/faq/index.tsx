import Breadcrumb from "@/common/Breadcrumb";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";
import CtaHomeTwo from "../homes/home-2/CtaHomeTwo";
import FaqArea from "./FaqArea";



const Faq = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumb title="Faq" subtitle="Faq" /> 
      <FaqArea />
      <CtaHomeTwo />
      <FooterTwo />      
    </Wrapper>
  );
};

export default Faq;