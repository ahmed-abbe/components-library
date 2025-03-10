import clsx from "clsx";
import { IconContext } from "react-icons";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import logo from "../../assets/Logo.png";

const Testimonials = ({ children, image, name, position }) => {
    const className = clsx(
        "testimonial",
        image && "with-image",
        !image && "without-image"
    );

    const imageElement = image ? (
        <div className="image">
            <img src={image} alt={name} />
        </div>
    ) : (
        <div className="image">
            <img src={logo} alt="logo" />
        </div>
    );

    const quoteIcon = image ? (
        <IconContext.Provider value={{ className: "quote" }}>
            <BiSolidQuoteAltLeft />
        </IconContext.Provider>
    ) : null;

    return (
        <div className={className}>
            {imageElement}
            <div className="review-info">
                {quoteIcon}
                {children}
                <span className="name">{name}</span>
                <span className="position">{position}</span>
            </div>
        </div>
    );
};

export default Testimonials;
