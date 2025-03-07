import useMultipleAnime from '@/hooks/useMultipleAnime';
import service_data from '@/data/service-data'; // Changed to service-data
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const feature_content = {
    title: <>About Our Services</>,
    des: <>Learn more about our comprehensive range of services <br /> designed to elevate your online presence and functionality. </>,
    integraton_title: "What you will get",
    integraton_des: <>Take your business to the next level with  <span> 09</span> accessible premium  extensions <br /> & different features</>,
}
const {title, des, integraton_title, integraton_des} = feature_content

const FeatureArea = ({style_integraton}) => {
    return (
        <>
            <div className={`tp-feature-area ${style_integraton ? "pt-100 pb-30" : "grey-bg-3 pt-120 pb-110"}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-feature-five-section-box text-center mb-40">
                                {style_integraton ? 
                                    <>
                                        <h3 className="tp-section-title-5 text-black">
                                            <span>
                                                {integraton_title}
                                            </span>
                                        </h3>
                                        <p>{integraton_des}</p>
                                    </>
                                    :
                                    <>
                                        <h3 className="tp-section-title-5 text-black">{title}</h3>
                                        <p>{des}</p>                                
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row gx-0 tp-feature-five-wrapper-main">
                        {service_data.slice(21, 25).map((item, i) => 
                            <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                                <div className="tp-feature-five-wrapper">
                                    <div className={`tp-feature-five-item tp-feature-five-item-${item.color} text-center z-index`}>
                                        <div className="tp-feature-five-icon p-relative">
                                            <Image src={item.icon} alt="theme-pure" />
                                            <div className={`tp-feature-five-shape-color tp-feature-five-shape-color-${item.color}`}></div>
                                        </div>
                                        <div className="tp-feature-five-content">
                                            <h4 className="tp-feature-five-title-sm">{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="tp-feature-five-btn">
                                            <Link className="tp-btn-purple" href={`/service-details?id=${item.id}`}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureArea;
