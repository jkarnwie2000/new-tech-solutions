import HeaderTwo from "@/layouts/headers/HeaderTwo";
import HeroHomeTwo from "./HeroHomeTwo";
import Wrapper from "@/layouts/Wrapper";
import AboutHomeTwo from "./AboutHomeTwo";
import ServiceHomeTwo from "./ServiceHomeTwo";
import TeamHomeTwo from "./TeamHomeTwo";
import CounterHomeTwo from "./CounterHomeTwo";
import ContactHomeTwo from "./ContactHomeTwo";
import PortfolioHomeTwo from "./PortfolioHomeTwo";
import PricingHomeTwo from "./PricingHomeTwo";
import WorProcessHomeOne from "../home-1/WorProcessHomeOne";
import TestimonialHomeTwo from "./TestimonialHomeTwo";
import FaqHomeTwo from "./FaqHomeTwo";
import BlogHomeTwo from "./BlogHomeTwo";
import CtaHomeTwo from "./CtaHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";

const HomeTwo = () => {
	return (
		<Wrapper>
			<HeaderTwo />
      <HeroHomeTwo />
      <AboutHomeTwo />
      <ServiceHomeTwo />
			<TeamHomeTwo />
			<CounterHomeTwo />
			<ContactHomeTwo />
			<PortfolioHomeTwo />
			<PricingHomeTwo />
			<WorProcessHomeOne style_2={true} />
			<TestimonialHomeTwo />
			<FaqHomeTwo />
			<BlogHomeTwo />
			<CtaHomeTwo />
			<FooterTwo />
		</Wrapper>
	);
};


export default HomeTwo;
