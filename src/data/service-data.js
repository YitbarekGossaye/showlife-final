import ServiceIconOne from "../svg/service/service-icon-1";
import ServiceIconTwo from "../svg/service/service-icon-2";
import ServiceIconThree from "../svg/service/service-icon-3"
import ServiceIconFoure from "../svg/service/service-icon-4"
import digital_market_seo from "../../public/assets/img/service/digital.png";
import web_dev_service from "../../public/assets/img/service/img-1.png";
import web_host_service from "../../public/assets/img/service/web_host_service.png";
import buna from "../../public/assets/img/service/buna.png";

// images import  
import img_1 from "../../public/assets/img/service/sv-icon-1.png";
import img_2 from "../../public/assets/img/service/sv-icon-2.png";
import img_3 from "../../public/assets/img/service/sv-icon-3.png";
import img_4 from "../../public/assets/img/service/sv-icon-4.png";
import img_5 from "../../public/assets/img/service/sv-icon-5.png";
// for home 04
import icon_1 from "../../public/assets/img/service/sv-icon-4-1.png"
import icon_2 from "../../public/assets/img/service/sv-icon-4-2.png"
import icon_3 from "../../public/assets/img/service/sv-icon-4-3.png"
import icon_4 from "../../public/assets/img/service/sv-icon-4-4.png"

// for home 05
import img_6 from "../../public/assets/img/service/web_dev.png";
import img_7 from "../../public/assets/img/service/digital_market.png";
import img_8 from "../../public/assets/img/service/web_host.png";
import img_9 from "../../public/assets/img/service/coffee.png";

// import img_10 from "../../public/";
// import img_11 from "../../public/";
// import img_12 from "../../public/";
// import img_13 from "../../public/";
// import img_14 from "../../public/";
// import img_15 from "../../public/";




const  service_data = [
    // for home 01 
    {
        id: 1,
        icon: img_1,
        img: img_1,
        title: "AI Data Analysis",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".4s",
    },
    {
        id: 2,
        icon: img_2,
        img: img_2,
        title: "Machine Learning",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".6s",
    },
    {
        id: 3,
        icon: img_3,
        img: img_3,
        title: "Data Visualization",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".7s",
    },
    {
        id: 4,
        icon: img_4,
        img: img_4,
        title: "Business Intelligence",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".8s",
    },
    {
        id: 5,
        icon: img_5,
        img: img_5,
        title: "Artificial Intelligence",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
    },

    // for home 03
    {
        id: 6,
        icon: <ServiceIconOne />,
        img: <ServiceIconOne />,
        title: "Project management jamil",
        description: <>Automate Workflows <br /> and Monitor your Sales.</>,
        delay: ".9s",
    },
    {
        id: 7,
        icon: <ServiceIconTwo />,
        img: <ServiceIconTwo />,
        title: "Sales analytics",
        description: <>Track your Marketing to see the best Results.</>,
        delay: ".9s",
    },
    {
        id: 8,
        icon: <ServiceIconThree />,
        img: <ServiceIconThree />,
        title: "Easy Invoicing",
        description: <>Automate recurring invoices and save time.</>,
        delay: ".9s",
    },
    {
        id: 9,
        icon: <ServiceIconFoure/>,
        img: <ServiceIconFoure />,
        title: "Complete Visibility",
        description: <>Get real-time visibility into every expense.</>,
        delay: ".9s",
    },
    
    // for home 04
    {
        id: 10,
        icon: icon_1,
        img: icon_1,
        title: "Cyber Security Solustions jamil",
        sub_title: "Cloud Backup",
        cls: "1",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
    },
    {
        id: 11,
        icon: icon_2,
        img: icon_2,
        title: "AI Data Cloud Solution",
        sub_title: "Cloud Backup",
        cls: "2",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
    },
    {
        id: 12,
        icon: icon_3,
        img: icon_3,
        title: <>Managed <br /> Web Application</>,
        sub_title: "Cloud Backup",
        cls: "3",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
    },
    {
        id: 13,
        icon: icon_4,
        img: icon_4,
        title: "24//7 Customer Support",
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
    },

    // for home 05
    {
        id: 14,
        icon: img_6,
        img: web_dev_service,
        title: <>Web Development</>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>We offer web development services, including responsive design, custom applications, and SEO optimization.</>,
        summary: <>We offer comprehensive web development services tailored to meet your business needs. Our expertise spans responsive design, ensuring your website looks stunning and functions flawlessly across all devices. From crafting custom applications that streamline your operations to implementing robust SEO optimization strategies that enhance your online visibility, we prioritize delivering solutions that drive growth and engage your audience effectively. Whether you're launching a new site or revamping an existing one, our team is dedicated to delivering high-quality, innovative solutions that elevate your digital presence and achieve your business objectives.</>,
        delay: ".9s",
        serv_1: <>Custom Website Design</>,
        serv_2: <>Frontend and Backend Development</>,
        serv_3: <>Responsive Web Design</>,
        serv_4: <>Website Maintenance and Support</>,
        serv_summary: <>At ShowLife, we specialize in delivering comprehensive web development solutions tailored to meet the diverse needs of our clients. Our expertise lies in crafting dynamic and engaging websites that not only captivate audiences but also drive business growth. We offer a range of services designed to ensure your online presence is both impactful and efficient.</>,
    },
    {
        id: 15,
        icon: img_7,
        img: digital_market_seo,
        title: <>Digital  Marketing</>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>We offer SEO, social media management, and targeted advertising services.</>,
        summary: <>At ShowLife, we excel in providing comprehensive digital marketing solutions designed to amplify your online presence and drive business growth. Our tailored strategies leverage the latest digital tools and industry insights to achieve measurable results.</>,
        delay: ".9s",
        serv_1: <>Search Engine Optimization (SEO)</>,
        serv_2: <>Pay-Per-Click (PPC) Advertising</>,
        serv_3: <>Social Media Marketing (SMM)</>,
        serv_4: <>Content Marketing Strategy</>,
        serv_summary: <>At ShowLife, we offer a robust suite of digital marketing services designed to elevate your brand and drive business growth in the digital landscape. Our approach combines strategic insights with cutting-edge tools to deliver impactful results. We specialize in search engine optimization (SEO) to enhance your website's visibility and attract organic traffic. Our pay-per-click (PPC) campaigns are meticulously managed to ensure maximum ROI. Social media marketing is another cornerstone of our offerings, where we create engaging content and targeted ads to build a loyal community around your brand. We also excel in content marketing, crafting compelling narratives that resonate with your audience and drive engagement. Our email marketing services help nurture leads and retain customers through personalized, automated campaigns. Additionally, we provide comprehensive analytics and reporting to track performance and refine strategies for continuous improvement. With ShowLife's digital marketing services, you can expect a holistic approach that aligns with your business objectives and delivers measurable success.</>,
    },
    {
        id: 16,
        icon: img_8,
        img: web_host_service,
        title: <>Web Hosting</>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>We offer reliable web hosting services with 24/7 support and high uptime.</>,
        summary: <>At ShowLife, we offer reliable web hosting services with 24/7 support and high uptime. Our dedicated team ensures minimal downtime and quick resolutions to any issues. With robust security features and regular backups, your data is always protected. We also provide fast loading times to enhance your website's performance and user experience. Whether you're a small business or a large enterprise, our scalable hosting solutions are designed to grow with your needs.</>,
        delay: ".9s",
        serv_1: <>Shared Hosting Plans</>,
        serv_2: <>VPS Hosting Services</>,
        serv_3: <>Dedicated Server Hosting</>,
        serv_4: <>Cloud Hosting Solutions</>,
        serv_summary: <>ShowLife delivers reliable web hosting services that ensure your website's performance and security. With 24/7 support, we address technical issues promptly, and our high uptime guarantee keeps your site accessible at all times. Our services include robust security features and regular backups to protect your data, as well as fast loading times to improve user experience. Whether you're a small business or a large enterprise, our scalable hosting solutions are designed to grow with your business, providing a consistent and dependable online presence.</>,
    },
    {
        id: 17,
        icon: img_9,
        img: buna,
        title: <>Ye-Buna</>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Join over 1,000 creators earning steady income through donations, memberships, and sales directly from their loyal fans!</>,
        summary: <>Join over 1,000 creators who earn a steady income through donations, memberships, and sales directly from their loyal fans! By leveraging a supportive community and innovative platform, you can easily monetize your passion and turn your creative endeavors into a sustainable source of income. Enjoy the flexibility to connect with your audience, offer exclusive content, and build a loyal fanbase that supports your work financially. Whether you're an artist, writer, musician, or any other type of creator, our platform provides the tools and resources to help you thrive and grow your brand.</>,
        delay: ".9s",
        serv_1: <>Monetization Tools</>,
        serv_2: <>Community Support</>,
        serv_3: <>Exclusive Content Management</>,
        serv_4: <>Brand Growth Resources</>,
        serv_summary: <>Ye-Buna offers a comprehensive suite of services designed to empower creators and help them monetize their passion. Our platform provides advanced monetization tools that enable creators to earn income through donations, memberships, and sales directly from their loyal fans. We foster a supportive community where creators can connect, share experiences, and collaborate to enhance their growth and success. Additionally, we offer exclusive content management features, allowing creators to engage their most dedicated fans with unique and premium content. To further assist in brand development, Ye-Buna supplies a range of resources and tools, including marketing strategies, audience analytics, and promotional assistance, ensuring that creators have everything they need to thrive and grow their brand.</>,
    },

    // service page
    {
        id: 18,
        icon: img_6,
        img: web_dev_service,
        category: "Web Development",
        title: "Web Development",
        description: <>We offer web development services, including responsive design, custom applications, and SEO optimization.</>,
        summary: <>We offer comprehensive web development services tailored to meet your business needs. Our expertise spans responsive design, ensuring your website looks stunning and functions flawlessly across all devices. From crafting custom applications that streamline your operations to implementing robust SEO optimization strategies that enhance your online visibility, we prioritize delivering solutions that drive growth and engage your audience effectively. Whether you're launching a new site or revamping an existing one, our team is dedicated to delivering high-quality, innovative solutions that elevate your digital presence and achieve your business objectives.</>,
        delay: ".9s",
        serv_1: <>Custom Website Design</>,
        serv_2: <>Frontend and Backend Development</>,
        serv_3: <>Responsive Web Design</>,
        serv_4: <>Website Maintenance and Support</>,
        serv_summary: <>At ShowLife, we specialize in delivering comprehensive web development solutions tailored to meet the diverse needs of our clients. Our expertise lies in crafting dynamic and engaging websites that not only captivate audiences but also drive business growth. We offer a range of services designed to ensure your online presence is both impactful and efficient.</>,
    },
    {
        id: 19,
        icon: img_7,
        img: digital_market_seo,
        category: "Digital Marketing",
        title: "Digital Marketing",
        description: <>We offer web development services, including responsive design, custom applications, and SEO optimization.</>,
        summary: <>At ShowLife, we excel in providing comprehensive digital marketing solutions designed to amplify your online presence and drive business growth. Our tailored strategies leverage the latest digital tools and industry insights to achieve measurable results.</>,
        delay: ".9s",
        serv_1: <>Search Engine Optimization (SEO)</>,
        serv_2: <>Pay-Per-Click (PPC) Advertising</>,
        serv_3: <>Social Media Marketing (SMM)</>,
        serv_4: <>Content Marketing Strategy</>,
        serv_summary: <>At ShowLife, we offer a robust suite of digital marketing services designed to elevate your brand and drive business growth in the digital landscape. Our approach combines strategic insights with cutting-edge tools to deliver impactful results. We specialize in search engine optimization (SEO) to enhance your website's visibility and attract organic traffic. Our pay-per-click (PPC) campaigns are meticulously managed to ensure maximum ROI. Social media marketing is another cornerstone of our offerings, where we create engaging content and targeted ads to build a loyal community around your brand. We also excel in content marketing, crafting compelling narratives that resonate with your audience and drive engagement. Our email marketing services help nurture leads and retain customers through personalized, automated campaigns. Additionally, we provide comprehensive analytics and reporting to track performance and refine strategies for continuous improvement. With ShowLife's digital marketing services, you can expect a holistic approach that aligns with your business objectives and delivers measurable success.</>,
    },
    {
        id: 20,
        icon: img_8,
        img: web_host_service,
        category: "Web Hosting",
        title: "Web Hosting",
        description: <>We offer reliable web hosting services with 24/7 support and high uptime.</>,
        summary: <>At ShowLife, we offer reliable web hosting services with 24/7 support and high uptime. Our dedicated team ensures minimal downtime and quick resolutions to any issues. With robust security features and regular backups, your data is always protected. We also provide fast loading times to enhance your website's performance and user experience. Whether you're a small business or a large enterprise, our scalable hosting solutions are designed to grow with your needs.</>,
        delay: ".9s",
        serv_1: <>Shared Hosting Plans</>,
        serv_2: <>VPS Hosting Services</>,
        serv_3: <>Dedicated Server Hosting</>,
        serv_4: <>Cloud Hosting Solutions</>,
        serv_summary: <>ShowLife delivers reliable web hosting services that ensure your website's performance and security. With 24/7 support, we address technical issues promptly, and our high uptime guarantee keeps your site accessible at all times. Our services include robust security features and regular backups to protect your data, as well as fast loading times to improve user experience. Whether you're a small business or a large enterprise, our scalable hosting solutions are designed to grow with your business, providing a consistent and dependable online presence.</>,
    },
    {
        id: 21,
        icon: img_9,
        category: "Ye-Buna",
        img: buna,
        title: "Ye-Buna",
        description: <>Join over 1,000 creators earning steady income through donations, memberships, and sales directly from their loyal fans!</>,
        summary: <>Join over 1,000 creators who earn a steady income through donations, memberships, and sales directly from their loyal fans! By leveraging a supportive community and innovative platform, you can easily monetize your passion and turn your creative endeavors into a sustainable source of income. Enjoy the flexibility to connect with your audience, offer exclusive content, and build a loyal fanbase that supports your work financially. Whether you're an artist, writer, musician, or any other type of creator, our platform provides the tools and resources to help you thrive and grow your brand.</>,
        delay: ".9s",
        serv_1: <>Monetization Tools</>,
        serv_2: <>Community Support</>,
        serv_3: <>Exclusive Content Management</>,
        serv_4: <>Brand Growth Resources</>,
        serv_summary: <>Ye-Buna offers a comprehensive suite of services designed to empower creators and help them monetize their passion. Our platform provides advanced monetization tools that enable creators to earn income through donations, memberships, and sales directly from their loyal fans. We foster a supportive community where creators can connect, share experiences, and collaborate to enhance their growth and success. Additionally, we offer exclusive content management features, allowing creators to engage their most dedicated fans with unique and premium content. To further assist in brand development, Ye-Buna supplies a range of resources and tools, including marketing strategies, audience analytics, and promotional assistance, ensuring that creators have everything they need to thrive and grow their brand.</>,
    },
////
    {
        id: 22,
        icon: img_6,
        img: web_dev_service,
        title: <>Web Development</>,
        color: "1",
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>We offer web development: responsive design, custom apps, SEO.</>,
        summary: <>We offer comprehensive web development services tailored to meet your business needs. Our expertise spans responsive design, ensuring your website looks stunning and functions flawlessly across all devices. From crafting custom applications that streamline your operations to implementing robust SEO optimization strategies that enhance your online visibility, we prioritize delivering solutions that drive growth and engage your audience effectively. Whether you're launching a new site or revamping an existing one, our team is dedicated to delivering high-quality, innovative solutions that elevate your digital presence and achieve your business objectives.</>,
        delay: ".9s",
        serv_1: <>Custom Website Design</>,
        serv_2: <>Frontend and Backend Development</>,
        serv_3: <>Responsive Web Design</>,
        serv_4: <>Website Maintenance and Support</>,
        serv_summary: <>At ShowLife, we specialize in delivering comprehensive web development solutions tailored to meet the diverse needs of our clients. Our expertise lies in crafting dynamic and engaging websites that not only captivate audiences but also drive business growth. We offer a range of services designed to ensure your online presence is both impactful and efficient.</>,
    },
    {
        id: 23,
        icon: img_7,
        img: digital_market_seo,
        title: <>Digital  Marketing</>,
        color: "2",
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>We offer SEO, social media management, and targeted advertising services.</>,
        summary: <>At ShowLife, we excel in providing comprehensive digital marketing solutions designed to amplify your online presence and drive business growth. Our tailored strategies leverage the latest digital tools and industry insights to achieve measurable results.</>,
        delay: ".9s",
        serv_1: <>Search Engine Optimization (SEO)</>,
        serv_2: <>Pay-Per-Click (PPC) Advertising</>,
        serv_3: <>Social Media Marketing (SMM)</>,
        serv_4: <>Content Marketing Strategy</>,
        serv_summary: <>At ShowLife, we offer a robust suite of digital marketing services designed to elevate your brand and drive business growth in the digital landscape. Our approach combines strategic insights with cutting-edge tools to deliver impactful results. We specialize in search engine optimization (SEO) to enhance your website's visibility and attract organic traffic. Our pay-per-click (PPC) campaigns are meticulously managed to ensure maximum ROI. Social media marketing is another cornerstone of our offerings, where we create engaging content and targeted ads to build a loyal community around your brand. We also excel in content marketing, crafting compelling narratives that resonate with your audience and drive engagement. Our email marketing services help nurture leads and retain customers through personalized, automated campaigns. Additionally, we provide comprehensive analytics and reporting to track performance and refine strategies for continuous improvement. With ShowLife's digital marketing services, you can expect a holistic approach that aligns with your business objectives and delivers measurable success.</>,
    },
    {
        id: 24,
        icon: img_8,
        img: web_host_service,
        title: <>Web Hosting</>,
        color: "3",
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>We offer reliable web hosting services with 24/7 support and high uptime.</>,
        summary: <>At ShowLife, we offer reliable web hosting services with 24/7 support and high uptime. Our dedicated team ensures minimal downtime and quick resolutions to any issues. With robust security features and regular backups, your data is always protected. We also provide fast loading times to enhance your website's performance and user experience. Whether you're a small business or a large enterprise, our scalable hosting solutions are designed to grow with your needs.</>,
        delay: ".9s",
        serv_1: <>Shared Hosting Plans</>,
        serv_2: <>VPS Hosting Services</>,
        serv_3: <>Dedicated Server Hosting</>,
        serv_4: <>Cloud Hosting Solutions</>,
        serv_summary: <>ShowLife delivers reliable web hosting services that ensure your website's performance and security. With 24/7 support, we address technical issues promptly, and our high uptime guarantee keeps your site accessible at all times. Our services include robust security features and regular backups to protect your data, as well as fast loading times to improve user experience. Whether you're a small business or a large enterprise, our scalable hosting solutions are designed to grow with your business, providing a consistent and dependable online presence.</>,
    },
    {
        id: 25,
        icon: img_9,
        img: buna,
        title: <>Ye-Buna</>,
        color: "4",
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Join 1,000+ creators earning from fan donations, memberships, and sales!</>,
        summary: <>Join over 1,000 creators who earn a steady income through donations, memberships, and sales directly from their loyal fans! By leveraging a supportive community and innovative platform, you can easily monetize your passion and turn your creative endeavors into a sustainable source of income. Enjoy the flexibility to connect with your audience, offer exclusive content, and build a loyal fanbase that supports your work financially. Whether you're an artist, writer, musician, or any other type of creator, our platform provides the tools and resources to help you thrive and grow your brand.</>,
        delay: ".9s",
        serv_1: <>Monetization Tools</>,
        serv_2: <>Community Support</>,
        serv_3: <>Exclusive Content Management</>,
        serv_4: <>Brand Growth Resources</>,
        serv_summary: <>Ye-Buna offers a comprehensive suite of services designed to empower creators and help them monetize their passion. Our platform provides advanced monetization tools that enable creators to earn income through donations, memberships, and sales directly from their loyal fans. We foster a supportive community where creators can connect, share experiences, and collaborate to enhance their growth and success. Additionally, we offer exclusive content management features, allowing creators to engage their most dedicated fans with unique and premium content. To further assist in brand development, Ye-Buna supplies a range of resources and tools, including marketing strategies, audience analytics, and promotional assistance, ensuring that creators have everything they need to thrive and grow their brand.</>,
    },
]
export default service_data