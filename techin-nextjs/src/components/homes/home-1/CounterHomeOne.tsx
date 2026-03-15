"use client";
import Count from "@/common/count";
import counter_data from "@/data/counter-data";



const CounterHomeOne = () => {
  return (
    <>
      <div className="techin-section-padding3 techin-counter-v1" style={{ backgroundImage: 'url(/assets/images/v1/counter-bg.png)' }}>
        <div id="techin-counter"></div>
        <div className="container">
          <div className="techin-counter-column">
            {counter_data.map((item, i) => (
              <div key={i} className="techin-counter-wrap">
              <div className="techin-counter-icon" dangerouslySetInnerHTML={{ __html: item.icon }}> 
                 
              </div>
              <div className="techin-counter-data">
                <div className="techin-counter-number">
                  <span data-percentage="950" className="techin-counter">
                    <Count number={item.counter} text={item.symbol} add_style={true} />
                    </span></div>
                <p>{item.title}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterHomeOne;