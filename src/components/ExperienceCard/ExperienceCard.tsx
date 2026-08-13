import "./ExperienceCard.css";
import Button from "../Button/Button";

interface ExperienceLink {
    url: string;
    title: string;
}

interface ExperienceProps {
    title: string;
    company: string;
    period: string;
    techStacks: string[];
    summary: string;
    achievements: string[];
    links?: ExperienceLink[];
}

const ExperienceCard = ({
    title,
    company,
    period,
    techStacks,
    summary,
    achievements,
    links = [],
}: ExperienceProps) => {
    return (
        <>
            <div className="experience-card">
                <div className="card-header">
                    <div className="role-header">
                        <h3 className="job-title">{title}</h3>
                        <span className="company">{company}</span>
                    </div>
                    <span className="period">{period}</span>
                </div>
                <div className="tech-stack-experience">
                    {techStacks.map((tech, index) => (
                        <span className="tech-badge" key={index}>
                            {tech}
                        </span>
                    ))}
                </div>
                <p className="summary">{summary}</p>
                <ul className="achievements">
                    {achievements.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                {links.length > 0 && (
                    <p className="freelance-link">
                        {links.map((link, index) => (
                            <>
                                <Button
                                    key={index}
                                    type="link"
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    isExternal
                                >
                                    {link.title}
                                </Button>

                                {index < links.length - 1 && " • "}
                            </>
                        ))}
                    </p>
                )}
            </div>
        </>
    );
};

export default ExperienceCard;
