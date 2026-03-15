
import Breadcrumb from '@/common/Breadcrumb';
import HeaderThree from '@/layouts/headers/HeaderThree';
import Wrapper from '@/layouts/Wrapper'; 
import CtaHomeTwo from '../homes/home-2/CtaHomeTwo';
import FooterTwo from '@/layouts/footers/FooterTwo';
import BlogArea from './BlogArea';

const Blog = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumb title="Latest News" subtitle="Latest News" />
      <BlogArea />
      <CtaHomeTwo />
      <FooterTwo />      
    </Wrapper>
  );
};

export default Blog;