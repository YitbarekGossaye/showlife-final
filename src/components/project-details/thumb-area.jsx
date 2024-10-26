import React from "react";
import Image from "next/image";

const ThumbArea = ({ project }) => {
  return (
    <>
      <div className="pd-thumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pd-thumb">
                <Image
                  src={project.thumb_img}
                  alt="project-thumbnail"
                  style={{ width: "95vw", height: "80vh"}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThumbArea;
