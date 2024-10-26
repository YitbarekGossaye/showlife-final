import React from "react";
import Image from "next/image";
import service_data from "@/data/service-data";
import AnswerQuestion from "@/common/answer-question";
import Link from "next/link";

const ServiceDetailsArea = ({ serviceId }) => {
  const service = service_data.find((s) => s.id == serviceId);

  if (!service) {
    return <p>Service not found</p>;
  }

  const service_details_content = {
    overview_title: service.title,
    overview_des: service.summary,
    overview_list: [
      <>
        Product Quality: <br />{" "}
        <span>
          Automatically syncs across all your devices. You can also access....
        </span>
      </>,
      <>
        On Demand Design: <br />{" "}
        <span>Images, videos, PDFs and audio files are supported.</span>
      </>,
      <>
        Choice of Service:{" "}
        <span>Whatever your business needs, you can choose a service.</span>
      </>,
    ],

    challange_titel: "Summary of our service",
    challange_des: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        interdum, orci at dapibus, massa ante pharetra tellus. Maecenas
        interdum, orci at euismod dapibus. Lorem ipsum dolor sit amet.!
      </>
    ),
  };

  const {
    overview_title,
    overview_des,
    overview_list,
    challange_titel,
    challange_des,
  } = service_details_content;

  return (
    <>
      <div className="sv-details-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sv-details-wrapper">
                <div className="sv-details-thumb mb-45 d-flex justify-content-center">
                  <Image
                    className="w-100"
                    height={100}
                    src={service.img}
                    alt="theme-pure"
                  />
                </div>
                <div className="sv-details-title-box mb-55">
                  <h4 className="sv-details-title-sm">{overview_title}</h4>
                  <p>{overview_des}</p>
                </div>

                <div className="sv-details-service-box mb-55">
                  <h4 className="sv-details-title-sm">Services Offered</h4>
                  <ul className="list-group">
                    <li className="list-group-item">{service.serv_1}</li>
                    <li className="list-group-item">{service.serv_2}</li>
                    <li className="list-group-item">{service.serv_3}</li>
                    <li className="list-group-item">{service.serv_4}</li>
                  </ul>
                </div>
                <div className="sv-details-challenge-box mb-55">
                  <h4 className="sv-details-title-sm">{challange_titel}</h4>
                  <p>{service.serv_summary}</p>
                </div>
                {(serviceId == 21 || serviceId == 17 || serviceId == 25) && (
                  <div className="text-center">
                    <Link className="tp-btn-blue-lg purple-bg circle-effect mr-15 mb-20" href="https://ye-buna.com/">Go To Ye-Buna</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <AnswerQuestion /> */}
    </>
  );
};

export default ServiceDetailsArea;
