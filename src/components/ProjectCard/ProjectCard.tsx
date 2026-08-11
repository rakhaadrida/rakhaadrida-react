import "./ProjectCard.css";
import Button from "../Button/Button";

interface ProjectCardProps {
    image: string;
    imageAlt: string;
    category: string;
    type: string;
    title: string;
    description: string;
    techStacks: string[];
    isProjectImageTop: boolean;
    liveUrl?: string;
}

const ProjectCard = ({
    image,
    imageAlt,
    category,
    type,
    title,
    description,
    techStacks,
    isProjectImageTop,
    liveUrl,
}: ProjectCardProps) => {
    return (
        <div className="project-card">
            <div
                className={`project-image ${isProjectImageTop ? "project-image-top" : ""}`}
            >
                <img src={image} alt={imageAlt} className="img-fluid" />
            </div>

            <div className="project-content">
                <div className="project-badges">
                    <span className="project-category">{category}</span>
                    <span
                        className={`project-type ${type === "Personal" ? "project-type-personal" : ""}`}
                    >
                        {type}
                    </span>
                </div>
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="tech-section">
                    <div className="tech-stack">
                        {techStacks.map((tech) => (
                            <span className="tech-tag" key={tech}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="project-actions">
                    <Button type="link" href="" className="action-primary">
                        <i className="fa fa-arrow-right" />
                        View Project
                    </Button>

                    {liveUrl && (
                        <Button
                            type="link"
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-secondary"
                            isExternal
                        >
                            <i className="fa fa-external-link" />
                            Live Preview
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
