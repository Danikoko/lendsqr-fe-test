import componentStyles from "../styles/components/badge.module.scss";

const Badge = ({status: isActive}: any) => {
    return (
        <div className={`${
            isActive === true
            ? componentStyles.activeBadge
            : componentStyles.inactiveBadge
        } px-4 py-2 inline-block`}>
            <span>
                {
                    `${
                        isActive === true
                        ? 'Active'
                        : 'Inactive'
                    }`
                }
            </span>
        </div>
    );
}
 
export default Badge;