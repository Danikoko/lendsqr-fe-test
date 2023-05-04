import componentStyles from "../styles/components/badge.module.scss";

const Badge = ({status}: any) => {
    return (
        <div className={`${componentStyles.inactiveBadge} px-4 py-2 inline-block`}>
            <span>Inactive</span>
        </div>
    );
}
 
export default Badge;