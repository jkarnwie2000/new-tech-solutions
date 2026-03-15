
import Breadcrumb from '@/common/Breadcrumb';
import HeaderThree from '@/layouts/headers/HeaderThree';
import Wrapper from '@/layouts/Wrapper'; 
import CtaHomeTwo from '../homes/home-2/CtaHomeTwo';
import FooterTwo from '@/layouts/footers/FooterTwo';
import PortfolioArea from './PortfolioArea';
import BlogHomeOne from '../homes/home-1/BlogHomeOne';

const Portfolio = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumb title="Latast Projects" subtitle="Latast Projects" />
      <PortfolioArea />
      <BlogHomeOne style_2={true} />
      <CtaHomeTwo />
      <FooterTwo />      
    </Wrapper>
  );
};

export default Portfolio;