import Breadcrumb from "@/common/Breadcrumb";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper"; 
import CtaHomeTwo from "../homes/home-2/CtaHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";
import BlogGridArea from "./BlogGridArea";

const BlogGrid = () => {
	return (
		<Wrapper>
			<HeaderThree />
			<Breadcrumb title="Latest News" subtitle="Latest News" />
      <BlogGridArea />
      <CtaHomeTwo />
      <FooterTwo />
		</Wrapper>
	);
};

export default BlogGrid;
