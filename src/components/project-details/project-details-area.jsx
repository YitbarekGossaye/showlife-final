import React from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicEffect';
import SocialLinks from '@/common/social-links';
import Image from 'next/image';
import solution_1 from "../../../public/assets/img/project/solution-1.jpg";
import solution_2 from "../../../public/assets/img/project/solution-2.jpg";

const ProjectDetailsArea = ({ project }) => {
  useIsomorphicLayoutEffect(() => {
    ScrollTrigger.create({
      trigger: ".social-box-pin",
      start: "top 10%",
      end: "bottom 60%",
      pin: ".social-box-pin",
      pinSpacing: false
    });
  }, []);

  return (
    <>
      <div className="pd-details-area pt-100 pb-100">
        <div className="container">
          <div className="row g-0">
            <div className="col-xl-2 col-lg-2 social-box-pin">
              {/* <div className="pd-details-social-box text-lg-center text-start p-relative">
                <div className="pd-details-social-title">
                  <span>Share This <br />Story</span>
                </div>
                <div className="pd-details-social">
                  <SocialLinks /> 
                </div>
              </div> */}
            </div>
            <div className="col-xl-10 col-lg-10 ">
              <div className="pd-details-wrapper">
                <div className="pd-details-info">
                  <h4 className="pd-details-title">{project.title}</h4>
                  <p>{project.summary}</p>
                </div>
                <div className="pd-details-solution">
                  <div className="pd-details-solution-img-box d-flex align-items-center">
                    <div className="pd-details-solution-img mr-30">
                      <Image src={solution_1} alt="theme-pure" />
                    </div>
                    <div className="pd-details-solution-img">
                      <Image src={solution_2} alt="theme-pure" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="pd-solution-title-box">
                        <h4 className="pd-details-title">Solution & Result</h4>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="pd-solution-paragraph">
                        <p>{project.solution_des_1}</p>
                        <p>{project.solution_des_2}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsArea;
