import "./Experience.css";
import { experiences, freelances } from "../../../data/experiences";
import ExperienceCard from "../../../components/ExperienceCard/ExperienceCard";

const Experience = () => {
    return (
        <>
            <section className="experience-content" id="experience">
                <div className="container">
                    <div className="row mb-5 mt-4">
                        <div className="col text-center">
                            <h1 className="section-title-skills">
                                Professional Experience
                            </h1>
                            <h5>
                                Delivering impactful solutions across diverse
                                projects and industries
                            </h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="experience-section">
                                <h4 className="section-title experience-title mt-2">
                                    Employment History
                                </h4>

                                {experiences.map((experience) => (
                                    <ExperienceCard
                                        key={experience.id}
                                        {...experience}
                                    />
                                ))}
                            </div>

                            <div className="experience-section">
                                <h4 className="section-title experience-title">
                                    Freelance Experience
                                </h4>

                                {freelances.map((freelance) => (
                                    <ExperienceCard
                                        key={freelance.id}
                                        {...freelance}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Experience;
