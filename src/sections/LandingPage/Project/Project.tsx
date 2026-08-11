import "./Project.css";
import projectItems from "../../../data/projects";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";

const Project = () => {
    return (
        <>
            <section className="portfolio-content" id="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto text-center">
                            <h1 className="section-title-skills">Projects</h1>
                            <h4>
                                Showcasing my experience in building scalable
                                and user-focused applications.
                            </h4>
                        </div>
                    </div>
                    <div className="projects-grid row">
                        {projectItems.map((project) => (
                            <div className="col-12">
                                <ProjectCard key={project.id} {...project} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Project;
