import PersonalGrowth from "../assets/images/landing/personalgrowth.png";
import JakartaVet from "../assets/images/landing/jakartavet.png";
import Infopond from "../assets/images/landing/infopond.png";
import CahayaPrimaLestari from "../assets/images/landing/cahayaprimalestari.png";
import Nutrilab from "../assets/images/landing/nutrilab.png";
import AnkaStory from "../assets/images/landing/ankastory.jpg";

export interface Project {
    id: string;
    image: string;
    imageAlt: string;
    title: string;
    category: string;
    type: string;
    description: string;
    techStacks: string[];
    isProjectImageTop: boolean;
    liveUrl?: string;
}

const projectItems: Project[] = [
    {
        id: "personalgrowth",
        image: PersonalGrowth,
        imageAlt: "PersonalGrowth API Project",
        title: "PersonalGrowth API",
        category: "Back End",
        type: "Production",
        description:
            "Developed a secure Laravel REST API powering a psychology platform with booking management, role-based access, payment integration, and automated meeting scheduling.",
        techStacks: [
            "Laravel",
            "MySQL",
            "RESTful API",
            "Xendit",
            "Google API",
            "Social Login",
            "Email Notification",
        ],
        isProjectImageTop: false,
        liveUrl: "https://personalgrowth.co.id/",
    },
    {
        id: "jakartavet",
        image: JakartaVet,
        imageAlt: "Jakarta Vet Project",
        title: "Jakarta Vet",
        category: "Full Stack",
        type: "Production",
        description:
            "Laravel-based clinic management system for JakartaVet, designed to simplify daily operations across multiple branches while improving the customer queue experience.",
        techStacks: [
            "Laravel",
            "MySQL",
            "Pusher",
            "JavaScript",
            "jQuery",
            "Email Notification",
        ],
        isProjectImageTop: false,
        liveUrl: "https://jakartavet.com/",
    },
    {
        id: "infopond",
        image: Infopond,
        imageAlt: "Infopond Project",
        title: "Infopond",
        category: "Full Stack",
        type: "Production",
        description:
            "Developed a Laravel-based location platform that helps users discover nearby destinations through Google Maps integration and real-time distance calculation.",
        techStacks: [
            "Laravel",
            "MySQL",
            "JavaScript",
            "Geolocation API",
            "Google API",
        ],
        isProjectImageTop: true,
        liveUrl: "https://infoma.au/",
    },
    {
        id: "laravelpos",
        image: CahayaPrimaLestari,
        imageAlt: "Cahaya Prima Lestari Project",
        title: "Laravel POS System",
        category: "Full Stack",
        type: "Production",
        description:
            "Developed a custom Laravel POS system for managing sales, inventory, and financial operations with role-based access control, approval workflows, reporting, and business automation features.",
        techStacks: [
            "Laravel",
            "MySQL",
            "JavaScript",
            "jQuery",
            "Bootstrap",
            "Excel & PDF Export",
        ],
        isProjectImageTop: false,
    },
    {
        id: "nutrilab",
        image: Nutrilab,
        imageAlt: "Nutrilab Pratama Project",
        title: "Nutrilab Pratama",
        category: "Back End",
        type: "Production",
        description:
            "Built RESTful APIs to support Nutrilab Pratama's company profile website and back-office system, handling dynamic content such as product catalogs, promotions, and other data consumed by front-end.",
        techStacks: ["Laravel", "MySQL", "RESTful API", "Postman"],
        isProjectImageTop: false,
        liveUrl: "https://nutrilab.co.id/",
    },
    {
        id: "ankastory",
        image: AnkaStory,
        imageAlt: "Anka Story Project",
        title: "Anka Story — Digital Love Story",
        category: "Front End",
        type: "Personal",
        description:
            "Developed an interactive storytelling website featuring personal narratives, story line, trivia, galleries, and videos. Created a personalized digital experience to preserve and showcase meaningful memories.",
        techStacks: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        isProjectImageTop: false,
        liveUrl: "https://ankastory.github.io/",
    },
];

export default projectItems;
