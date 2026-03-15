
import Breadcrumb from '@/common/Breadcrumb';
import HeaderThree from '@/layouts/headers/HeaderThree';
import Wrapper from '@/layouts/Wrapper'; 
import CtaHomeTwo from '../homes/home-2/CtaHomeTwo';
import FooterTwo from '@/layouts/footers/FooterTwo';
import SingleTeamArea from './SingleTeamArea';
import BlogHomeOne from '../homes/home-1/BlogHomeOne';

const SingleTeam = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumb title="Single Team" subtitle="Single Team" />
      <SingleTeamArea />
      <BlogHomeOne style_2={true} />
      <CtaHomeTwo />
      <FooterTwo />      
    </Wrapper>
  );
};

export default SingleTeam;