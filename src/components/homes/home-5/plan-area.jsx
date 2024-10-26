import React from 'react';
import Image from 'next/image';

import plan_img_1 from "../../../../public/assets/img/plan/plan-1-1.png"
import plan_img_2 from "../../../../public/assets/img/plan/plan-1-2.png"
import plan_img_3 from "../../../../public/assets/img/plan/plan-1-3.png"
import plan_img_4 from "../../../../public/assets/img/plan/plan-1-4.png"
import plan_img_5 from "../../../../public/assets/img/plan/plan-1-5.png"
import plan_img_6 from "../../../../public/assets/img/plan/plan-1-6.png"

import img from "../../../../public/assets/img/cta/cta-title-icon-2.png";

const plan_content = {
    img_box : [
        {id:1, img: plan_img_1, cls: "1",},
        {id:2, img: plan_img_2, cls: "2 d-none d-sm-block",},
        {id:3, img: plan_img_3, cls: "3",},
        {id:4, img: plan_img_4, cls: "4",},
        {id:5, img: plan_img_5, cls: "5 d-none d-sm-block",},
        {id:6, img: plan_img_6, cls: "6 d-none d-sm-block",},
    ],

    sub_title: "INVOICES",
    title: <><span>Showlife</span>, Digital Excellence Awaits.</>, 

}
const {img_box, sub_title, title}  = plan_content

const accordion_data = [
    {
        id: 1,
        question: "Web Development",
        answer: <>Explore our cutting-edge web development services, including custom website design, responsive layouts, and robust functionality to meet your business needs.</>,
        accordion_id: "headingOne",
        collapsed: "collapsed",
        data_bs_target: "#collapseOne",
        aria_expanded: false,
        aria_controls: "collapseOne",
        show: "",
        actice: "",
    },
    {
        id: 2,
        question: "Web Hosting",
        answer: <>Our reliable web hosting solutions ensure your website remains accessible and secure with high performance and uptime. Choose from various hosting plans to suit your requirements.</>,
        accordion_id: "headingTwo",
        collapsed: "collapsed",
        data_bs_target: "#collapseTwo",
        aria_expanded: false,
        aria_controls: "collapseTwo",
        show: "",
        actice: "",
    },
    {
        id: 3,
        question: "Digital Marketing",
        answer: <>Enhance your online presence with our digital marketing services, including SEO, content marketing, social media management, and targeted advertising strategies to drive traffic and engagement.</>,
        accordion_id: "headingThree",
        collapsed: "collapsed",
        data_bs_target: "#collapseThree",
        aria_expanded: false,
        aria_controls: "collapseThree",
        show: "",
        actice: "",
    },
    {
        id: 4,
        question: "Ye-Buna",
        answer: <>Join over 1,000 creators earning steady income through donations, memberships, and sales directly from their loyal fans!</>,
        accordion_id: "headingFour",
        collapsed: "collapsed",
        data_bs_target: "#collapseFour",
        aria_expanded: false,
        aria_controls: "collapseFour",
        show: "",
        actice: "",
    }
];
const PlanArea = () => {
    return (
        <>
            <div onContextMenu={e => e.preventDefault()} className= "tp-plan-area tp-plan-2-space fix">
                  <div className= "container">
                     <div className= "row align-items-center">
                        <div className= "col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                        <div className= "tp-plan-section-box">
                              <div className= "tp-plan-section-icon pb-30">
                                 <Image src={img} alt="theme-pure" />
                              </div>
                              {/* <span className= "tp-section-subtitle-5 text-black">{sub_title}</span> */}
                              <h3 className= "tp-section-title-5 text-black pb-25">{title} </h3>
                        </div> 
                        <div className= "tp-custom-accordio-2">
                              <div className= "accordion" id="accordionExample">
                                {accordion_data.map((item, i) => 
                                    <div key={i} className= "accordion-items">
                                        <h2 className= "accordion-header" id={item.accordion_id}>
                                        <button 
                                            className={`accordion-buttons ${item.collapsed}`} 
                                            type="button" 
                                            data-bs-toggle="collapse"
                                            data-bs-target={item.data_bs_target} 
                                            aria-expanded={item.aria_expanded} 
                                            aria-controls={item.aria_controls}
                                            >
                                            {item.question}
                                        </button>
                                        </h2>
                                        <div 
                                        id={item.aria_controls} 
                                        className= {`accordion-collapse collapse ${item.show}`} 
                                        aria-labelledby={item.accordion_id}
                                        data-bs-parent="#accordionExample"
                                        >
                                        <div className= "accordion-body">
                                            {item.answer}
                                        </div>
                                        </div>
                                    </div>
                                )} 
                              </div>
                        </div>
                        </div>
                        <div className= "col-xl-7 col-lg-7  wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                           <div className= "tp-plan-2-img-box p-relative">
                            {img_box.map((item, i)  => 
                                <div key={i} className= {`tp-plan-2-img-${item.cls}`}>
                                    <Image src={item.img} alt="theme-pure" />
                                </div> 
                            )} 
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
        </>
    );
};

export default PlanArea;