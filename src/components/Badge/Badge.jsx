import clsx from "clsx";

const Badge = ({ children, color, pill }) => {
    const badgeClasses = clsx("badge", color, { pill: pill });

    return <span className={badgeClasses}>{children}</span>;
};

export default Badge;
