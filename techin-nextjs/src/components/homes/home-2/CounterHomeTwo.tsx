import Count from "@/common/count";
import counter_data from "@/data/counter-data";


const CounterHomeTwo = () => {
  return (
    <>
      <div className="techin-section-padding2 section" style={{ backgroundImage: 'url(/assets/images/v2/counter.png)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="techin-counter-content">
                <div className="techin-title-tag tag2">
                  <span><img src="assets/images/v1/shape2.svg" alt="" /></span>
                  <h6>Facts</h6>
                  <span><img src="assets/images/v1/shape2.svg" alt="" /></span>
                </div>
                <h2>Need To Know Some Fun Facts</h2>
                <div className="techin-counter-author">
                  <div className="techin-counter-author-thumb">
                    <img src="assets/images/v2/c1.png" alt="" />
                  </div>
                  <div className="techin-counter-author-text">
                    <h6>We’ve 30k+ Globally Clients</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div id="techin-counter"></div>
              <div className="row">
                {counter_data.map((item, i) => (
                  <div key={i} className="col-lg-3 col-md-6">
                  <div className="techin-counter-wrap wrap2">
                    <div className="techin-counter-icon" dangerouslySetInnerHTML={{ __html: item.icon }}>
                       
                    </div>
                    <div className="techin-counter-data">
                      <div className="techin-counter-number"><span data-percentage="950" className="techin-counter">
                        <Count number={item.counter} text={item.symbol} add_style={true} />
                        </span></div>
                      <p>{item.title}</p>
                    </div>
                  </div>
                </div>
                  
                ))} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterHomeTwo;