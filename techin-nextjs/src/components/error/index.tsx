
import Breadcrumb from '@/common/Breadcrumb';
import HeaderThree from '@/layouts/headers/HeaderThree';
import Wrapper from '@/layouts/Wrapper';
import CtaHomeTwo from '../homes/home-2/CtaHomeTwo';
import FooterTwo from '@/layouts/footers/FooterTwo';
import Link from 'next/link';

const ErrorArea = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumb title="404/error page" subtitle="404/error " />
      <div className="techin-section-padding6">
        <div className="container">
          <div className="techin-error-404-wrap">
            <div className="techin-error-404-thumb">
              <img src="assets/images/error/error.png" alt="" />
            </div>
            <div className="techin-error-404-content">
              <div className="techin-title-tag center2">
                <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                <h6>Error Page</h6>
                <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
              </div>
              <h2>Oops! That Page Can't Be Found.</h2>
              <p>Unfortunately, something went wrong and this page does not exist. Try using the search or return to the previous page.</p>
              <Link href="/" className="techin-default-btn pill" data-text="Go Back to home">
                <span className="button-wraper">Go Back to home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <CtaHomeTwo />
      <FooterTwo />
    </Wrapper>
  );
};

export default ErrorArea;