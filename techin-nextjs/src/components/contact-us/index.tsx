import Breadcrumb from "@/common/Breadcrumb";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";
import CtaHomeTwo from "../homes/home-2/CtaHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";
import ContactusArea from "./ContactusArea";
import GoogleMap from "./GoogleMap";
import FaqHomeTwo from "../homes/home-2/FaqHomeTwo";



const Contactus = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumb title="Contact Us" subtitle="Contact Us" />
      <ContactusArea />
      <GoogleMap />
      <FaqHomeTwo style_2={true} />
      <CtaHomeTwo />
      <FooterTwo />      
    </Wrapper>
  );
};

export default Contactus;