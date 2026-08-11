interface ExperienceLink {
    url: string;
    title: string;
}

interface Experience {
    id: string;
    title: string;
    company: string;
    period: string;
    techStacks: string[];
    summary: string;
    achievements: string[];
    links?: ExperienceLink[];
}

export const experiences: Experience[] = [
    {
        id: "agromakmur",
        title: "Web Developer (Freelance)",
        company: "Agro Makmur",
        period: "Jul 2025 – Jan 2026",
        techStacks: ["Laravel", "MySQL", "Bootstrap", "JavaScript", "jQuery"],
        summary:
            "Modernized legacy business systems with modern Laravel architecture, improving data accuracy and operational workflows.",
        achievements: [
            "Migrated legacy system to modern Laravel application with zero data loss",
            "Implemented branch-level reporting with dynamic user/branch/warehouse filtering",
            "Designed grouped AR/AP features reducing debt tracking complexity",
            "Enhanced COGS calculations with labor and shipping cost components",
        ],
    },
    {
        id: "vodea",
        title: "Software Engineer (Backend)",
        company: "Vodea Dwi Karsa",
        period: "Jul 2021 – Sep 2024",
        techStacks: [
            "Laravel",
            "Nest.js",
            "JavaScript",
            "MySQL",
            "PostgreSQL",
            "REST API",
            "API Development",
            "API Integration",
            "Google API",
            "Payment Integration",
            "Email & Whatsapp Notification",
        ],
        summary:
            "Led end-to-end backend development across diverse projects, enabling team to scale operations and increase client capacity.",
        achievements: [
            "Delivered production APIs and full-stack solutions for enterprise clients",
            "Optimized performance and fixed critical issues under tight deadlines",
            "Eliminated need for additional hire through solo backend management",
            "Assisting in client meetings when the project manager was unavailable.",
        ],
    },
    {
        id: "cahayaprima",
        title: "Web Developer (Freelance)",
        company: "Cahaya Prima Lestari",
        period: "Sep 2020 – Mar 2021",
        techStacks: [
            "Laravel",
            "MySQL",
            "HTML / CSS",
            "JavaScript",
            "jQuery",
            "Bootstrap",
        ],
        summary:
            "Built complete business system replacement improving reliability, accuracy, and profitability for manufacturing operations.",
        achievements: [
            "Rebuilt entire system from legacy codebase to modern Laravel architecture",
            "Eliminated monthly stock discrepancies with real-time tracking",
            "Implemented approval workflows preventing unauthorized transaction modifications",
            "Delivered FIFO-based financial reports improving pricing accuracy and revenue",
        ],
    },
];

export const freelances: Experience[] = [
    {
        id: "fiverr",
        title: "Part-Time Freelancer",
        company: "Fiverr & Upwork",
        period: "2017 – Present",
        techStacks: [
            "Laravel",
            "MySQL",
            "JavaScript",
            "Google API",
            "Document Formatting",
            "Markdown Conversion",
            "OCR Correction",
        ],
        summary:
            "Delivered 20+ successful projects with consistent 5-star ratings, specializing in Laravel solutions and business system optimization.",
        achievements: [
            "Developed custom Laravel applications and full-stack web solutions",
            "Executed smooth data migrations and system upgrades",
            "Built practical business solutions: stock tracking, approval workflows, FIFO reporting",
            "Maintained 5-star rating across 20+ projects with quick turnaround",
        ],
        links: [
            {
                url: "https://fiverr.com/rakhaadrida",
                title: "Fiverr Profile",
            },
            {
                url: "https://rebrand.ly/upwork-rakha",
                title: "Upwork Profile",
            },
        ],
    },
];
