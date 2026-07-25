import React from "react";
import styles from './ExperienceSection.module.css';
import { ExperienceCard } from "../../components/ExperienceCard/ExperienceCard";

const ExperienceSection = () => {

  const chewyFullTimeDescription = ["Led frontend development for customer-facing Product Detail Page (PDP) experiences, owning technical design, implementation, experimentation, and cross-team integrations across Chewy's high-traffic e-commerce platform.",
    "Led end-to-end development of Ship Once with Autoship on the Product Detail Page, building a new Buy Once call-to-action, post-add-to-cart flyout, and integrations with multiple internal APIs while coordinating implementation across the PDP and Autoship teams; drove 12.5K incremental weekly units and $12M annualized revenue.",
    "Designed and implemented reusable React components powering Chewy+ membership experiences, including SmartShelf upsells and free shipping trackers, while consolidating duplicate UI architecture and integrating Loyalty APIs; contributed to an increase of 2.4K weekly Chewy+ signups.",
    "Built reusable pricing and promotional components for Autoship experiences, contributing to experiments that increased Autoship enrollment by 8-11K weekly signups while maintaining checkout conversion.",
    "Architected and implemented AWS Feature Store with the PDP platform to access personalized user purchase-history, designing new infrastructure and reusable UI components that supported an experiment resulting in increased average selling price.",
    "Migrated PDP authentication services from legacy infrastructure to Chewy's new Guest Service during the company's EKS modernization, architecting frontend integration changes and resolving production issues involving bot traffic and guest session management.",
    "Implemented an A/B experiment for Private Brand product pages, delivering feature-flagged architecture that increased PDP conversion by 19 bps, add-to-cart success by 42 bps, and Chewy Composite Value by 4.31%.",
    "Built the Autoship post-add-to-cart experience from the ground up for authenticated customers, increasing conversion by 14 bps while maintaining Autoship adoption and supporting experimentation across customer segments."
  ];

  const chewyFullTimeSkills = ["React", "TypeScript", "HTML", "SCSS", "Jest", "AWS", "Jenkins", "DataDog", "Dynatrace"];
  
  const fiveStonesDescription = [
    "Developed customer-facing features and resolved production issues for Annunciate.io, a white-label multimedia SaaS platform, improving usability and administrative workflows.",
    "Redesigned the platform's Elasticsearch-powered content search by configuring custom analyzers and field-matching strategies, improving search relevance and discoverability across multimedia content.",
    "Enhanced user experience by resolving video playback issues, improving Open Graph sharing through dynamic metadata and image optimization, and implementing role-based administrative UI features."
  ];
  const fiveStonesSkills = ["TypeScript", "React", "React Native", "Docker", "SQL", "Elastic Search", "React Admin"];

  const chewyInternshipDescription = [
    "Migrated the My Pet Health experience from a legacy microsite into a React single-page application, improving Google Lighthouse performance by 160% while modernizing the customer experience.",
    "Eliminated an unnecessary AWS Elastic Kubernetes Service (EKS) deployment through SPA adoption, generating approximately $14K in annual infrastructure savings.",
    "Improved accessibility, expanded Jest unit test coverage to 78%, and partnered with product stakeholders to refine UX and deliver production-ready React components."
  ];
  const chewyInternshipSkills = ["React", "TypeScript", "HTML", "SCSS", "Jest", "Docker", "Jenkins"];

  const augustinianDescription = [
    "Redesigned the appearance of the Institute of Augustine Spirituality website and transferred the site from from Joomla to Wix in English, Italian, and Spanish.",
    "Built a front-end UI for a database solution to store information about Augustinian schools and churches.",
  ];
  const augustinianSkills = ["Wix", "JavaScript", "HTML", "CSS", "Excel"];

  const massportDescription = [
    "Constructed a SnapLogic pipeline to transfer 100% of non-empty tables in the company's Oracle Databases into Snowflake Cloud Databases.",
    "Creation of the pipeline was integral to company's ability to manipulate and present gathered data.",
    "Built interactive dashboards using select network vulnerability data on Tableau with importance to cybersecurity team.",
  ];
  const massportSkills = ["SnapLogic", "Tableau", "Snowflake", "SQL"];

  return (
    <section className={styles.experienceMain}>
      <span className={styles.sectionTitle}>Experience</span>
      <div className={styles.underline} />
      <ol className={styles.experienceList}>
        <ExperienceCard
          companyName={"Chewy"}
          companyLocation={"Boston, MA"}
          companyLink={"https://www.chewy.com/"}
          startDate={"DEC 2024"}
          endDate={"PRESENT"}
          positionTitle={"Software Engineer I"}
          description={chewyFullTimeDescription}
          skills={chewyFullTimeSkills}
        />
        <ExperienceCard
          companyName={"5 Stones"}
          companyLocation={"Remote"}
          companyLink={"https://www.weare5stones.com"}
          startDate={"JUL 2024"}
          endDate={"NOV 2024"}
          links={["https://www.annunciate.io/"]}
          linkText={["Annunciate Info Page"]}
          positionTitle={"Software Engineer I"}
          description={fiveStonesDescription}
          skills={fiveStonesSkills}
        />
        <ExperienceCard
          companyName={"Chewy"}
          companyLocation={"Boston, MA"}
          companyLink={"https://www.chewy.com/"}
          startDate={"JUN 2023"}
          endDate={"AUG 2023"}
          positionTitle={"Software Engineering Intern"}
          description={chewyInternshipDescription}
          links={["https://www.chewy.com/pethealth/"]}
          linkText={["My Pet Health"]}
          skills={chewyInternshipSkills}
        />
        <ExperienceCard
          companyName={"Roman Augustinian Curia"}
          companyLocation={"Rome, Italy"}
          companyLink={"https://www.augustinianorder.org/"}
          startDate={"FEB 2023"}
          endDate={"MAY 2023"}
          positionTitle={"Software Development Intern"}
          description={augustinianDescription}
          links={["https://osacuria.wixsite.com/augustinian-spiritua"]}
          linkText={["Institute of Augustine Spirituality Site"]}
          skills={augustinianSkills}
        />
        <ExperienceCard
          companyName={"Massachusetts Port Authority"}
          companyLocation={"Boston, MA"}
          companyLink={"https://www.massport.com/"}
          startDate={"JUN 2022"}
          endDate={"AUG 2022"}
          positionTitle={"Technical Assistant Intern"}
          description={massportDescription}
          skills={massportSkills}
        />
      </ol>
    </section>
  );
}

export default ExperienceSection;
