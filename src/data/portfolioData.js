// ============================================================
// portfolioData.js — Centralized configuration for Sidhartha Thogari's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

import resumePdf from '../../Portfolio Assets/Resume.pdf';

export const personalInfo = {
  name: "Sidhartha Thogari",
  firstName: "Sidhartha",
  brandName: "Sidhartha Thogari",
  title: "Senior Data Engineer | Databricks & Azure Specialist",
  location: "United Kingdom",
  phone: "+44 77749-15173",
  emails: {
    primary: "sid.siddhartha09@gmail.com",
  },
  summary:
    "Databricks Certified Azure Data Engineer with 8+ years of experience designing, implementing, and maintaining enterprise-scale cloud data platforms, modern Lakehouse architectures, and analytics solutions. Strong expertise in Azure Databricks, PySpark, SQL, Azure Data Factory, Delta Lake, Unity Catalog, ETL/ELT, Data Warehousing, and Medallion Architecture.",
  resumeUrl: resumePdf,
};

export const socialLinks = {
  github: "https://github.com/sidhartha-thogari",
  linkedin: "https://uk.linkedin.com/in/sidharthathogari09",
  email: "mailto:sid.siddhartha09@gmail.com",
};

export const heroContent = {
  greeting: "Hi, I'm Sidhartha",
  titleHighlight: "Senior Data Engineer",
  subtitle:
    "Databricks Certified Azure Data Engineer with 8+ years of experience building enterprise Lakehouse architectures, PySpark ETL pipelines, and scalable cloud data platforms.",
  ctaPrimary: { text: "View Experience", href: "#experience" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:sid.siddhartha09@gmail.com?subject=Inquiry%20-%20Data%20Engineering%20Portfolio&body=Hello%20Sidhartha,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.%0D%0A%0D%0ABest%20Regards,",
  },
  ctaResume: { text: "Download Resume", href: resumePdf },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Sidhartha Thogari</span>, a Databricks Certified Azure Data Engineer based in the United Kingdom with 8+ years of experience crafting scalable, secure, and high-performance enterprise cloud data platforms and modern Lakehouse architectures.`,
  techStack: ["Azure Databricks", "PySpark & Delta Lake", "Lakehouse Architecture"],
};

export const skillsContent = {
  badge: "Engineering Principles",
  heading: "How I architect enterprise cloud data platforms",
  description:
    "I follow a structured, modern Medallion Architecture (Bronze, Silver, Gold) approach to engineer robust, governed, and highly scalable data platforms.",
  cards: [
    {
      number: "01",
      title: "Ingest",
      text: "Automating batch & real-time streaming ingestion from ERP, CRM, POS, and REST APIs into Azure Data Lake using ADF, Event Hubs, and Auto Loader.",
    },
    {
      number: "02",
      title: "Transform",
      text: "Building scalable PySpark and SQL pipelines with Delta Live Tables (DLT), Change Data Capture (CDC), and Medallion Architecture.",
    },
    {
      number: "03",
      title: "Govern",
      text: "Enforcing Unity Catalog governance, PII data protection, access controls, data quality validation, and GDPR-compliant RTBF frameworks.",
    },
    {
      number: "04",
      title: "Deliver",
      text: "Delivering AI-ready curated datasets, Databricks Genie semantic models, and AI/BI dashboards for executive decision-making.",
    },
  ],
  endText: "Data-driven success!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Cloud Data Engineering",
      skills: [
        { name: "Azure Databricks", level: 95 },
        { name: "PySpark", level: 95 },
        { name: "Delta Lake", level: 92 },
        { name: "Azure Data Factory (ADF)", level: 90 },
        { name: "Medallion Architecture", level: 95 },
        { name: "ETL / ELT Pipelines", level: 95 }
      ]
    },
    {
      title: "Modern Databricks Platform",
      skills: [
        { name: "Unity Catalog", level: 92 },
        { name: "Delta Live Tables (DLT)", level: 90 },
        { name: "Lakeflow & Workflows", level: 88 },
        { name: "Databricks SQL & Auto Loader", level: 92 },
        { name: "AI/BI Dashboards & Genie", level: 85 },
        { name: "Lakehouse Governance", level: 90 }
      ]
    },
    {
      title: "Languages & Databases",
      skills: [
        { name: "Python", level: 92 },
        { name: "SQL", level: 95 },
        { name: "C# / ASP.NET", level: 82 },
        { name: "MS SQL Server & MySQL", level: 90 },
        { name: "PostgreSQL & MongoDB", level: 88 },
        { name: "Cassandra", level: 80 }
      ]
    },
    {
      title: "Cloud & Storage",
      skills: [
        { name: "Microsoft Azure", level: 92 },
        { name: "ADLS Gen2", level: 95 },
        { name: "Azure Event Hubs", level: 85 },
        { name: "Azure Synapse Analytics", level: 85 },
        { name: "Amazon AWS", level: 80 },
        { name: "Snowflake", level: 82 }
      ]
    },
    {
      title: "DevOps & Orchestration",
      skills: [
        { name: "Terraform (IaC)", level: 85 },
        { name: "Azure DevOps & CI/CD", level: 88 },
        { name: "Git & Version Control", level: 90 },
        { name: "Apache Airflow & Spark", level: 85 },
        { name: "MLflow & Power Automate", level: 82 },
        { name: "VS Code & Visual Studio", level: 92 }
      ]
    },
    {
      title: "Governance & ML Concepts",
      skills: [
        { name: "GDPR Compliance & PII", level: 92 },
        { name: "Customer 360 / SCV", level: 90 },
        { name: "Data Lineage & Quality", level: 90 },
        { name: "Agile, Scrum & Kanban", level: 95 },
        { name: "Machine Learning & NLP", level: 80 }
      ]
    }
  ]
};

// Data Engineering Specializations Data
export const contentCreation = {
  badge: "Core Specializations",
  heading: "Enterprise Lakehouse & Platform Architecture",
  description: "Architecting high-throughput data platforms, real-time streaming pipelines, and governed data products.",
  categories: [
    {
      title: "Lakehouse Architecture",
      description: "Designing Medallion Lakehouses (Bronze, Silver, Gold) with Azure Databricks, Delta Lake, PySpark, and Unity Catalog.",
      stats: "8+ Years Exp",
      icon: "⚡"
    },
    {
      title: "Real-Time Streaming Pipelines",
      description: "Processing event-driven streaming data using Azure Event Hubs, Delta Live Tables (DLT), and Auto Loader.",
      stats: "Near Real-Time",
      icon: "🔄"
    },
    {
      title: "Customer 360 & Single Customer View",
      description: "Consolidating NetSuite, Salesforce, BigCommerce, GA4, and POS data into trusted analytical datasets.",
      stats: "Enterprise SCV",
      icon: "📊"
    },
    {
      title: "Data Governance & GDPR",
      description: "Implementing PII protection, secure mapping, hashing frameworks, Unity Catalog controls, and RTBF compliance.",
      stats: "GDPR Compliant",
      icon: "🔒"
    }
  ]
};

// Enterprise Work Experience Data
export const internshipsList = [
  {
    organization: "Brompton Bicycle, UK",
    role: "Azure Data Engineer",
    duration: "Sept 2023 - Present",
    skills: [
      "Designed enterprise-scale Lakehouse platforms using Azure Databricks, PySpark, Delta Lake & Medallion Architecture",
      "Built batch and near real-time ETL/ELT pipelines using Delta Live Tables (DLT), Lakeflow, Auto Loader & Databricks Workflows",
      "Implemented Unity Catalog, AI/BI Dashboards, Databricks Genie, data lineage & Lakehouse governance",
      "Engineered Customer 360 & Single Customer View (SCV) consolidating NetSuite, Salesforce, BigCommerce & GA4 data",
      "Designed GDPR-compliant governance including PII protection, hashing frameworks & Right-to-be-Forgotten (RTBF) processes"
    ],
    tech: ["Azure Databricks", "PySpark", "Delta Lake", "Unity Catalog", "DLT", "Lakeflow", "Databricks SQL", "Terraform"]
  },
  {
    organization: "Betway Group, UK",
    role: "Data Engineer",
    duration: "Apr 2022 - Sept 2023",
    skills: [
      "Engineered end-to-end ETL/ELT pipelines using Azure Data Factory (ADF), Azure Databricks, PySpark & Delta Lake",
      "Implemented Delta Lake & Delta Tables to provide ACID transactions, schema enforcement & version control",
      "Built incremental data processing frameworks using Change Data Capture (CDC) techniques",
      "Developed real-time data ingestion pipelines using Azure Event Hubs and Databricks Jobs scheduling"
    ],
    tech: ["Azure Data Factory", "Azure Databricks", "PySpark", "Delta Lake", "Event Hubs", "Apache Spark", "ADLS Gen2"]
  },
  {
    organization: "Verizon",
    role: "Data Engineer",
    duration: "Feb 2020 - Apr 2022",
    skills: [
      "Optimized end-to-end data pipelines, improving data processing efficiency by 30%",
      "Optimized complex SQL queries using joins, indexing, partitioning & query tuning techniques",
      "Implemented data governance, security, and access control measures to ensure organizational compliance",
      "Implemented Infrastructure as Code (IaC) using Terraform and automated CI/CD pipelines using Azure DevOps"
    ],
    tech: ["Python", "SQL Server", "Terraform", "Azure DevOps", "YAML CI/CD", "Git", "Agile"]
  },
  {
    organization: "Capgemini",
    role: "Associate Consultant",
    duration: "Sept 2018 - Feb 2020",
    skills: [
      "Designed automation solutions using Python, Machine Learning, and Natural Language Processing (NLP) on AWS EC2",
      "Built AI-driven solutions for infrastructure monitoring and predictive server health analysis",
      "Built Python-based data integration solutions loading data into AWS Cassandra and Elastic Beanstalk"
    ],
    tech: ["Python", "Machine Learning", "NLP", "AWS EC2", "AWS Cassandra", "AWS Elastic Beanstalk", "Matplotlib"]
  },
  {
    organization: "Capgemini",
    role: "Senior Software Engineer",
    duration: "Sept 2017 - Sept 2018",
    skills: [
      "Developed enterprise web applications using C#, ASP.NET MVC, SQL Server, HTML, CSS, JavaScript & AngularJS",
      "Designed statistical algorithms using R to improve application performance and reduce overall system costs",
      "Collaborated throughout software development lifecycle in Agile sprint iterations"
    ],
    tech: ["C#", "ASP.NET MVC", "SQL Server", "JavaScript", "AngularJS", "R", "HTML/CSS"]
  }
];

// Leadership & Governance Data
export const leadershipList = [
  {
    title: "Enterprise Data Governance & PII Protection",
    description: "Designed and implemented GDPR-compliant data governance frameworks, PII masking, hashing frameworks, Unity Catalog access controls, and Right-to-be-Forgotten (RTBF) automated workflows.",
    role: "Governance & Security Architect",
    badge: "Data Governance"
  },
  {
    title: "Customer 360 & Single Customer View (SCV)",
    description: "Led multi-source data consolidation across NetSuite, Salesforce, BigCommerce, Lightspeed, and GA4 to deliver unified customer data products for analytics.",
    role: "Lead Data Architect",
    badge: "Customer 360"
  },
  {
    title: "Cloud Infrastructure Automation & IaC",
    description: "Architected Infrastructure as Code (IaC) using Terraform and automated CI/CD pipelines with Azure DevOps and YAML for cloud data platform deployments.",
    role: "DevOps & Cloud Lead",
    badge: "Automation"
  },
  {
    title: "Spark Workloads & SQL Performance Tuning",
    description: "Optimized Apache Spark workloads, Delta Lake partitioning, and complex SQL query execution plans to improve processing speed by 30% and optimize cloud costs.",
    role: "Performance Optimization",
    badge: "Optimization"
  }
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Data Architecture", icon: "🏗️", desc: "Designing scalable Lakehouse structures, Medallion layers, and governed data pipelines." },
  { name: "Problem Solving", icon: "🧩", desc: "Optimizing complex Spark queries, debugging pipeline bottlenecks, and tuning performance." },
  { name: "Stakeholder Management", icon: "🤝", desc: "Collaborating with solution architects, business analysts, and executive teams." },
  { name: "Data Governance", icon: "🛡️", desc: "Enforcing PII protection, Unity Catalog security controls, and GDPR compliance." },
  { name: "Agile Leadership", icon: "⏱️", desc: "Leading sprint cycles, managing tasks, and delivering production-ready releases." },
  { name: "Communication", icon: "💬", desc: "Articulating complex data engineering concepts clearly to technical and business teams." },
  { name: "Adaptability", icon: "🌟", desc: "Quickly mastering emerging technologies like Databricks Genie, DLT, and Lakeflow." },
  { name: "Continuous Learning", icon: "📚", desc: "Holding multiple Databricks, Azure, and Terraform certifications to stay ahead." }
];

export const projects = [
  {
    id: "brompton-lakehouse",
    number: "01",
    badge: "🚀 Flagship Enterprise Project",
    title: "Enterprise Lakehouse Platform — Brompton Bicycle",
    description:
      "An enterprise-scale cloud Lakehouse platform engineered on Azure Databricks using PySpark, Delta Lake, and Medallion Architecture (Bronze, Silver, Gold). Features automated batch & streaming pipelines with Delta Live Tables (DLT), Auto Loader, Databricks Workflows, and Unity Catalog governance — powering Customer 360 analytics, AI/BI dashboards, and Databricks Genie self-service reporting.",
    techTags: [
      "Azure Databricks",
      "PySpark",
      "Delta Lake",
      "Unity Catalog",
      "Delta Live Tables (DLT)",
      "Auto Loader",
      "Databricks SQL",
      "Terraform",
      "Azure Data Factory",
    ],
    links: {
      github: "https://github.com/sidhartha-thogari",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "betway-etl-pipeline",
    number: "02",
    badge: null,
    title: "Real-Time Ingestion & CDC Pipeline — Betway Group",
    description:
      "End-to-end cloud data processing pipeline built with Azure Data Factory (ADF), Azure Databricks, PySpark, and Delta Lake. Features incremental data processing with Change Data Capture (CDC), streaming ingestion via Azure Event Hubs, and automated Databricks job orchestration for high-volume analytics.",
    techTags: ["Azure Data Factory", "Azure Databricks", "PySpark", "Delta Lake", "Event Hubs", "ADLS Gen2", "SQL"],
    links: {
      github: "https://github.com/sidhartha-thogari",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "aws-ml-automation",
    number: "03",
    badge: null,
    title: "AI-Driven Infrastructure Monitoring & NLP",
    description:
      "Automated infrastructure monitoring and predictive feedback platform built with Python, Machine Learning, and Natural Language Processing (NLP) deployed on AWS EC2 and AWS Elastic Beanstalk with Cassandra database storage.",
    techTags: ["Python", "Machine Learning", "NLP", "AWS EC2", "AWS Cassandra", "Elastic Beanstalk"],
    links: {
      github: "https://github.com/sidhartha-thogari",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Databricks Certified Data Engineer Associate",
      issuer: "Databricks",
      icon: "🧱",
    },
    {
      name: "Azure Databricks Platform Architect",
      issuer: "Databricks / Azure",
      icon: "☁️",
    },
    {
      name: "Azure Data Engineer Associate (DP-203)",
      issuer: "Microsoft",
      icon: "⚡",
    },
    {
      name: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      icon: "🏗️",
    },
    {
      name: "Generative AI Fundamentals",
      issuer: "Databricks",
      icon: "🤖",
    },
    {
      name: "Databricks Lakehouse Fundamentals",
      issuer: "Databricks",
      icon: "🌊",
    },
  ],
  viewAllUrl: resumePdf,
};

export const education = {
  degree: "Master’s in Applied Data Science",
  institution: "University of Essex, United Kingdom",
  graduation: "Jan 2022",
  summary: "Advanced data engineering, statistical modeling, machine learning, and enterprise data platforms.",
};

export const footerContent = {
  taglines: [
    "Senior Data Engineer",
    "Azure Databricks · PySpark · Delta Lake",
    "Enterprise Lakehouse Architectures",
  ],
  credential: "Master's in Applied Data Science · 8+ Yrs Exp",
  copyright: `© ${new Date().getFullYear()} Sidhartha Thogari | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
