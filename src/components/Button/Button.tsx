import { Link } from "react-router-dom";

interface ButtonProps {
    children?: React.ReactNode;
    type: "button" | "link";
    onClick?: () => void;
    href: string;
    target?: string;
    className?: string;
    style?: React.CSSProperties;
    ariaLabel?: string;
    rel?: string;
    title?: string;
    isExternal?: boolean;
}

const Button = (props: ButtonProps) => {
    const className = [props.className];

    const onClick = () => {
        if (props.onClick) props.onClick();
    };

    if (props.type == "link") {
        if (props.isExternal) {
            return (
                <a
                    href={props.href}
                    className={className.join(" ")}
                    style={props.style}
                    onClick={onClick}
                    target={props.target === "_blank" ? "_blank" : undefined}
                    title={props.title}
                    rel={
                        props.rel === "noopener noreferrer"
                            ? "noopener noreferrer"
                            : undefined
                    }
                >
                    {props.children}
                </a>
            );
        } else {
            return (
                <Link
                    to={props.href}
                    className={className.join(" ")}
                    style={props.style}
                    onClick={onClick}
                >
                    {props.children}
                </Link>
            );
        }
    }

    return (
        <button
            className={className.join(" ")}
            style={props.style}
            onClick={onClick}
            aria-label={props.ariaLabel}
        >
            {props.children}
        </button>
    );
};

export default Button;
