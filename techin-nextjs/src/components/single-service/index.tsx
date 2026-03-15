import Breadcrumb from "@/common/Breadcrumb";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";
import CtaHomeTwo from "../homes/home-2/CtaHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";
import SingleServiceArea from "./SingleServiceArea";

 
const SingleService = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumb title="Service Details" subtitle="Service Details" />
      <SingleServiceArea />
      <CtaHomeTwo />
      <FooterTwo />      
    </Wrapper>
  );
};

export default SingleService;