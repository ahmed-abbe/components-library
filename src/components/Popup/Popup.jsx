import { createContext } from "react";
import { createPortal } from "react-dom";
import { FaRegCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { HiInformationCircle } from "react-icons/hi";
import { IconContext } from "react-icons";

const PopupContext = createContext();

const Popup = ({ role, children }) => {
    function getIcon() {
        const icons = {
                success: { icon: <FaRegCheckCircle />, color: "#34D399" },
                warning: { icon: <FaExclamationCircle />, color: "FBBF24" },
                error: { icon: <FaRegCircleXmark />, color: "F87171" },
                neutral: { icon: <HiInformationCircle />, color: "#60A5FA" },
            },
            className = "fa-fw icon";

            const { icon, color } = icons[role] || icons.neutral;
            
            return (
                <IconContext.Provider value={{ color, className }}>
                {icon}
            </IconContext.Provider>
        );
    }
    
    return createPortal(
        <PopupContext.Provider value={getIcon()}>
            <div className={`popup ${role}`}>{children}</div>
        </PopupContext.Provider>,
        document.querySelector("body")
    );
};
export { PopupContext };
export default Popup;

