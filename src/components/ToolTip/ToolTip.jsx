import {clsx} from "clsx";
import { HiOutlineInbox } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

const ToolTip = ({ theme = "dark", color, children }) => {
    const className = clsx("tooltip", theme, color)
    
    return (
        <div className={className}>
            <span className="close-icon">
                <IoIosClose />
            </span>
            <div className="icon">
                <HiOutlineInbox />
            </div>
            <div className="text">{children}</div>
        </div>
    );
};

export default ToolTip;
