import { createContext } from "react";
import { IconContext } from "react-icons";
import {
    FaCheckCircle,
    FaExclamationTriangle,
    FaExclamationCircle,
} from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export const BannerContext = createContext();

const Banner = ({ children, role }) => {
    function getIcon() {
        const icons = {
                success: { icon: <FaCheckCircle />, color: "#34D399" },
                warning: { icon: <FaExclamationTriangle />, color: "#FBBF24" },
                error: { icon: <FaCircleXmark />, color: "#F87171" },
                neutral: { icon: <FaExclamationCircle />, color: "#60A5FA" },
            },
            className = "fa-fw icon";

        const { icon, color } = icons[role] || icons.neutral;
        return (
            <IconContext.Provider value={{ color, className }}>
                {icon}
            </IconContext.Provider>
        );
    }

    return (
        <BannerContext.Provider value={getIcon()}>
            <div className={`banner ${role}`}>{children}</div>
        </BannerContext.Provider>
    );
};

export default Banner;
