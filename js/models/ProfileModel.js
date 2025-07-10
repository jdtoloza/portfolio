// js/models/ProfileModel.js

/**
 * ProfileModel holds all the data for my profile page.
 */

export const ProfileModel = {
    name: "Joshua Toloza",
    title: "Aspiring Software Engineer",
    bio: "Third-year Computer Science student and former educator turned developer with a proven track record of building internal tools, streamlining workflows, and driving automation in enterprise environments. Currently working as an Information Systems Specialist, where I bridge technical execution and operational needs—designing systems that improve efficiency, usability, and team collaboration.",
    background: "My background in teaching shaped my ability to break down complex systems, communicate clearly with stakeholders, and build solutions that truly serve users. I thrive when I’m building practical tools, designing clean interfaces, and working on teams that value mentorship, innovation, and real-world impact.",
    seeking: "Now actively seeking a full stack internship or junior developer role where I can grow under experienced engineers and contribute to projects that make a difference.",
    passions: [
        "UI/UX Design in games, web, and mobile apps",
        "Projects that make a real-world impact"
    ],
    education: [
        {
            institution: "Oregon State University",
            degree: "B.S. in Computer Science",
            startDate: "September 2022",
            endDate: "March 2026(expected)"
        },
        {
            institution: "San Jose State University",
            degree: "B.S. in Kinesiology",
            startDate: "August 2010",
            endDate: "December 2016"
        },
        {
            institution: "San Jose State University",
            degree: "Teaching Credential",
            startDate: "August 2017",
            endDate: "May 2019"
        }
    ],
    socials : {
        github: "https://github.com/jdtoloza",
        linkedin: "https://www.linkedin.com/in/joshtoloza/"
    },
    contact: {
        email: "Josh.Toloza@gmail.com",
        phone: "(408) 220-5344"
    },
    skills: {
        languages: ["Javascript", "Python", "Java", "HTML", "CSS"],
        frameworks: ["React", "Node.js", "Express", "Flask"],
        tools: ["Git", "Postman", "Figma"],
        databases: ["MongoDB", "PostgreSQL", "MySQL"],
        other: ["RESTful APIs", "Responsive Design", "Cross-browser Compatibility", "JSON", "XML", "iPaaS"]
    },
    projects: [
        {
            title: "Executive Travel API Migration",
            technologies: ["RESTful APIs", "JSON", "iPaaS", "Anvil API", "Everbridge API"],
            description: [
                "Led the migration of enterprise-level travel data pipelines from Anvil API to Everbridge API to enhance executive travel tracking and security operations",
                "Mapped and transformed JSON payloads to support itinerary data including passenger names, flight legs, hotel stays, and travel timelines.",
                "Ensured real-time syncing of itinerary updates across systems to maintain visibility during global travel and emergencies.",
                "Tested and deployed endpoint connections using iPaaS software, maintaining continuity and minimizing downtime during cutover."
            ]
        },
        {
            title: "Global Guard Tour Rollout Project",
            technologies: ["Project Management", "Documentation", "Training", "Stakeholder Engagement"],
            description: [
                "Led the planning and execution of a digital guard tour system across North America and APAC sites (including Tel Aviv, Bangalore, Sydney, and London)",
                "Coordinated rollout requirements with stakeholders across time zones and ensured consistent implementation across regional policies and operational teams",
                "Created SOPs, training documents, and implementation guides to ensure smooth onboarding and long-term maintainability",
                "Worked with vendor platforms to integrate route logs, checkpoint scans, and incident tracking into existing reporting systems"
            ]
        },
        {
            title: "Badge Issuance / Return System",
            technologies: ["HTML", "CSS", "Javascript", "RESTful APIs", "RDBMS"],
            description: [
                "Created and implemented a badge issue/return system to help track and monitor badge activity for site employees, contractors, and vendors",
                "Designed and implemented responsive web interfaces using HTML, CSS, and JavaScript",
                "Utilized Bootstrap and Flexbox for creating a fluid and mobile-friendly layout for the instruction web pages",
                "Implemented automation to optimize the badge issuance/return process, significantly reducing processing time from approximately 5 minutes to under 30 seconds"
            ]
        },
        {
            title: "Security Operations Intranet Website",
            technologies: ["HTML", "CSS", "Javascript"],
            description: [
                "Built a centralized intranet website to consolidate post orders, emergency procedures, site contacts, and daily-use links for security personnel.",
                "Optimized usability and field access by implementing a clean, mobile-friendly interface for quick data retrieval during critical incidents",
                "Improved onboarding and operational readiness across multiple sites by streamlining access to essential information in one accessible hub"
            ]
        },
        {
            title: "Automated Audit & Report Logging System",
            technologies: ["Javascript", "iPaaS", "RESTful APIs"],
            description: [
                "Converted manual audit and reporting processes into automated digital workflows using iPaaS integrations and custom scripts",
                "Integrated Excel macros and backend logic to generate structured reports from multiple data inputs",
                "Standardized reporting formats across 11+ sites, increasing consistency and reducing time spent on manual entry"
            ]
        },
    ]
}