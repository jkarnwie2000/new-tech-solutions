import Breadcrumb from "@/common/Breadcrumb";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";
import CtaHomeTwo from "../homes/home-2/CtaHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";
import SingleBlogArea from "./SingleBlogArea";

const SingleBlog = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumb title="Blog Details" subtitle="Blog Details" />
      <SingleBlogArea />
      <CtaHomeTwo />
      <FooterTwo />      
    </Wrapper>
  );
};

export default SingleBlog;