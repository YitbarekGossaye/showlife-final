import BreadcrumbEight from "@/common/breadcrumbs/breadcrumb-8";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import ProjectArea from "../homes/home/project-area";
import ProjectDetailsArea from "./project-details-area";
import ThumbArea from "./thumb-area";
import ContextProvider from "@/context/ContextProvider";
import AnimateMouse from "../homes/home-5/AnimateMouse";
import portfolio_data from '@/data/portfolio-data';

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (id) {
      const foundProject = portfolio_data.find((p) => p.id === parseInt(id));
      setProject(foundProject);
    }
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ContextProvider>
        <AnimateMouse />
        <HeaderSix />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <BreadcrumbEight project={project} />
              <ThumbArea project={project} />
              <ProjectDetailsArea project={project} />
              <ProjectArea />
            </main>
            <FooterFive
              style_contact={true}
              style_team={true}
              bg_style={false}
            />
          </div>
        </div>
      </ContextProvider>
    </>
  );
};

export default ProjectDetails;
