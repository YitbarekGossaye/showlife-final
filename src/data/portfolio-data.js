// thumb img import here 
import thumb_img_1 from "../../public/assets/img/project/project-inner-1.jpg";
import thumb_img_2 from "../../public/assets/img/project/project-inner-2.jpg";
import thumb_img_3 from "../../public/assets/img/project/project-inner-3.jpg";
import thumb_img_4 from "../../public/assets/img/project/project-inner-5.jpg";

// brand logo import here
import brand_logo_1 from "../../public/assets/img/project/project-inner-brand-1.png";
import brand_logo_2 from "../../public/assets/img/project/project-inner-brand-2.png";
import brand_logo_3 from "../../public/assets/img/project/project-inner-brand-3.png";
import brand_logo_4 from "../../public/assets/img/project/project-inner-brand-5.png";

const portfolio_data = [
    {
        id: 1,
        thumb_img: thumb_img_1,
        brand_logo: brand_logo_1, 
        job_title: "Web Design, Branding",
        title: <>Corporate Website Redesign</>,
        des: <>Complete redesign of a corporate website to enhance user experience and brand identity.</>,
        summary: <>Our team executed a complete redesign of a corporate website, focusing on enhancing the user experience and modernizing the brand identity. The project involved in-depth user research, prototyping, and the implementation of responsive design principles to ensure seamless access across all devices. The result was a sophisticated, user-friendly interface that significantly improved customer engagement and satisfaction.</>,
        solution_des_1: <>Implemented a modern, responsive design to improve accessibility and user experience across all devices.</>,
        solution_des_2: <>Conducted thorough user research and prototyping to align the website's design with user needs and business goals.</>,
        delay: ".5s",
        category: "Web Development",
        filter_id: ["all", "Web Development", "Web Hosting", "Digital Marketing"],
    }, 
    {
        id: 2,
        thumb_img: thumb_img_2,
        brand_logo: brand_logo_2, 
        job_title: "Hosting Solutions",
        title: <>Cloud Hosting Platform</>,
        des: <>Development of a scalable cloud hosting platform for small to medium-sized businesses.</>,
        summary: <>We developed a scalable cloud hosting platform tailored for small to medium-sized businesses, providing reliable and secure hosting solutions. The platform's architecture was designed to handle high traffic volumes, ensuring uptime and performance. Features include automated backups, robust security measures, and user-friendly dashboards for ease of management, helping businesses focus on growth without worrying about their hosting needs.</>,
        solution_des_1: <>Created a scalable architecture capable of handling high traffic volumes to ensure consistent uptime and performance.</>,
        solution_des_2: <>Integrated automated backup systems and robust security measures to protect data and maintain reliability.</>,
        delay: ".5s",
        category: "Web Hosting",
        filter_id: ["all", "Web Development", "Web Hosting", "Digital Marketing"],
    }, 
    {
        id: 3,
        thumb_img: thumb_img_3,
        brand_logo: brand_logo_3, 
        job_title: "SEO, Content Marketing",
        title: <>E-commerce SEO Optimization</>,
        des: <>SEO and content marketing strategy to boost search engine rankings for an e-commerce site.</>,
        summary: <>This project involved a comprehensive SEO and content marketing strategy for an e-commerce website. We conducted extensive keyword research, optimized product descriptions, and created high-quality content to boost organic traffic. Our approach not only improved search engine rankings but also enhanced the overall user experience, resulting in increased sales and customer retention for the client.</>,
        solution_des_1: <>Implemented a robust SEO strategy that included extensive keyword research and optimization of product descriptions.</>,
        solution_des_2: <>Developed high-quality, engaging content to attract organic traffic and enhance the overall user experience.</>,
        delay: ".5s",
        category: "Digital Marketing",
        filter_id: ["all", "Web Development", "Web Hosting", "Digital Marketing"],
    }, 
    {
        id: 4,
        thumb_img: thumb_img_4,
        brand_logo: brand_logo_4, 
        job_title: "Full-Stack Development",
        title: <>SaaS Application Development</>,
        des: <>End-to-end development of a SaaS application for project management.</>,
        summary: <>We undertook the end-to-end development of a SaaS application designed for project management. This involved front-end and back-end development, integration with third-party services, and the implementation of real-time collaboration features. The application offers intuitive project tracking, task management, and reporting tools, making it a valuable asset for teams aiming to enhance their productivity and streamline their workflow.</>,
        solution_des_1: <>Developed a comprehensive SaaS application with real-time collaboration features to enhance team productivity.</>,
        solution_des_2: <>Integrated third-party services and intuitive tools for project tracking, task management, and reporting.</>,
        delay: ".5s",
        category: "Web Development",
        filter_id: ["all", "Web Development", "Web Hosting", "Digital Marketing"],
    },
    {
        id: 5,
        thumb_img: thumb_img_1,
        brand_logo: brand_logo_1, 
        job_title: "UX/UI Design, Branding",
        title: <>Startup Website Launch</>,
        des: <>Design and development of a user-friendly website for a tech startup.</>,
        summary: <>For this project, we designed and developed a user-friendly website for a tech startup. The website was crafted to effectively communicate the startup's innovative solutions and services. We focused on creating a clean, modern design with a clear navigation structure. The project also included branding elements such as logo design and color schemes, which helped in establishing a strong brand presence online.</>,
        solution_des_1: <>Created a clean, modern website design with intuitive navigation to effectively communicate the startup's offerings.</>,
        solution_des_2: <>Developed branding elements, including logo design and color schemes, to establish a strong online presence.</>,
        delay: ".5s",
        category: "Web Development",
        filter_id: ["all", "Web Development", "Web Hosting", "Digital Marketing"],
    },
    {
        id: 6,
        thumb_img: thumb_img_2,
        brand_logo: brand_logo_2, 
        job_title: "Digital Strategy",
        title: <>Social Media Campaign</>,
        des: <>Comprehensive social media marketing campaign for brand awareness and engagement.</>,
        summary: <>We executed a comprehensive social media marketing campaign aimed at increasing brand awareness and engagement. The campaign included strategic content creation, targeted advertising, and influencer partnerships. Through detailed analytics and continuous optimization, we were able to significantly boost the client's social media presence, resulting in higher engagement rates and a substantial increase in followers across various platforms.</>,
        solution_des_1: <>Developed a strategic content creation plan and targeted advertising to increase brand awareness and engagement.</>,
        solution_des_2: <>Formed influencer partnerships and utilized detailed analytics for continuous campaign optimization.</>,
        delay: ".5s",
        category: "Digital Marketing",
        filter_id: ["all", "Web Development", "Web Hosting", "Digital Marketing"],
    },
]

export default portfolio_data;