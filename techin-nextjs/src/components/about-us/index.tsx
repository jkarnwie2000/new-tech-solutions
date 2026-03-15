import Breadcrumb from "@/common/Breadcrumb";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";
import AboutHomeTwo from "../homes/home-2/AboutHomeTwo";
import ServiceAbout from "./ServiceAbout";
import WorProcessHomeOne from "../homes/home-1/WorProcessHomeOne";
import BrandHomeThree from "../homes/home-3/BrandHomeThree";
import FaqHomeOne from "../homes/home-1/FaqHomeOne";
import PricingHomeThree from "../homes/home-3/PricingHomeThree";
import CounterHomeTwo from "../homes/home-2/CounterHomeTwo";
import ContactHomeOne from "../homes/home-1/ContactHomeOne";
import TestimonialHomeTwo from "../homes/home-2/TestimonialHomeTwo";
import BlogHomeOne from "../homes/home-1/BlogHomeOne";
import FooterTwo from "@/layouts/footers/FooterTwo";
import CtaHomeTwo from "../homes/home-2/CtaHomeTwo";

const Aboutus = () => {
	return (
		<Wrapper>
			<HeaderThree />
			<Breadcrumb title="About Us" subtitle="About Us" />
			<AboutHomeTwo />
			<ServiceAbout />
			<WorProcessHomeOne />
			<BrandHomeThree />
			<CounterHomeTwo />
			<FaqHomeOne />
			<PricingHomeThree style_2={true} />
			<ContactHomeOne />
			<TestimonialHomeTwo />
			<BlogHomeOne />
      <CtaHomeTwo />
			<FooterTwo />
		</Wrapper>
	);
};

export default Aboutus;
