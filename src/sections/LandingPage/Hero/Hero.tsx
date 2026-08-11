import "./Hero.css";
import Button from "../../../components/Button/Button";
import HeroImage from "../../../assets/images/landing/hero-image.jpeg";
import GithubIcon from "../../../assets/icons/github.png";
import LinkedInIcon from "../../../assets/icons/linkedin.png";
import WordpressIcon from "../../../assets/icons/wordpress.png";

const Hero = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8 mt-md-n5">
                            <div className="title-text">
                                <div className="hero-greeting">
                                    <span className="greeting-text">
                                        Hi, I'm
                                    </span>
                                    <span className="hero-name">
                                        Rakha Adrida Bagaspati
                                    </span>
                                </div>
                                <div className="hero-intro">
                                    <span className="intro-label">
                                        Full Stack Developer
                                    </span>
                                </div>
                                <h1 className="hero-headline">
                                    Building scalable applications that solve
                                    real problems
                                </h1>
                                <p className="hero-description">
                                    Backend engineer with 5+ years of
                                    experience. I specialize in Laravel and
                                    MySQL, building REST APIs, dashboards,
                                    booking systems, and payment integrations
                                    for clients worldwide.
                                </p>
                            </div>
                            <div className="hero-cta">
                                <Button
                                    type="link"
                                    href="https://drive.google.com/file/d/19iHzERNzrWTVzXND2omJxFZwbZP2UHQ9/view?usp=sharing"
                                    target="_blank"
                                    className="btn btn-primary"
                                    aria-label="Download CV"
                                    isExternal
                                >
                                    <span className="btn-icon">→</span>
                                    Download CV
                                </Button>
                                <Button
                                    type="link"
                                    href="#projects"
                                    className="btn btn-secondary text-white"
                                    aria-label="View my work"
                                >
                                    <span className="btn-icon">↓</span>
                                    View My Work
                                </Button>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 hero-image-section">
                            <div className="pic-avatar">
                                <img
                                    src={HeroImage}
                                    alt="Rakha Adrida Bagaspati - Full Stack Developer"
                                    className="img-fluid rounded image-rounded float-right mb-md-4"
                                />
                                <div className="socmed mt-md-6">
                                    <Button
                                        type="link"
                                        href="https://github.com/rakhaadrida"
                                        target="_blank"
                                        title="GitHub"
                                        rel="noopener noreferrer"
                                        isExternal
                                    >
                                        <img
                                            src={GithubIcon}
                                            alt="GitHub Profile"
                                            className="img-fluid"
                                        />
                                    </Button>
                                    <Button
                                        type="link"
                                        href="https://www.linkedin.com/in/rakhaadrida/"
                                        target="_blank"
                                        title="LinkedIn"
                                        rel="noopener noreferrer"
                                        isExternal
                                    >
                                        <img
                                            src={LinkedInIcon}
                                            alt="LinkedIn Profile"
                                            className="img-fluid"
                                        />
                                    </Button>
                                    <Button
                                        type="link"
                                        href="https://godenzone.wordpress.com/"
                                        target="_blank"
                                        title="Wordpress"
                                        rel="noopener noreferrer"
                                        isExternal
                                    >
                                        <img
                                            src={WordpressIcon}
                                            alt="Wordpress"
                                            className="img-fluid"
                                        />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Hero;
