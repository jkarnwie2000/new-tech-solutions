import Breadcrumb from '@/common/Breadcrumb';
import HeaderThree from '@/layouts/headers/HeaderThree';
import Wrapper from '@/layouts/Wrapper'; 
import CtaHomeTwo from '../homes/home-2/CtaHomeTwo';
import FooterTwo from '@/layouts/footers/FooterTwo';
import BlogHomeOne from '../homes/home-1/BlogHomeOne';
import SinglePortfolioArea from './SinglePortfolioArea';

const SinglePortfolio = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumb title="Portfolio Details" subtitle="Portfolio Details" />
      <SinglePortfolioArea />
      <BlogHomeOne style_2={true} />
      <CtaHomeTwo />
      <FooterTwo />      
    </Wrapper>
  );
};

export default SinglePortfolio;