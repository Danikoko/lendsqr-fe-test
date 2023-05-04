import layoutStyles from "../styles/layouts/dashboard.module.scss";
import Image from "next/image";

const UsersCardInfo = ({cardInfo}: any) => {
    return (
        <div className={`${layoutStyles.card} px-5 pt-4 pb-8`}>
            <Image
            className="mb-3"
            src={cardInfo.icon}
            alt="Card Icon"
            />
            <span className={`${layoutStyles.textGrey} mb-2 block uppercase text-sm`}>{cardInfo.title}</span>
            <h3 className={`${layoutStyles.mainBlueColor} text-2xl font-bold`}>{cardInfo.count}</h3>
        </div>
    );
}
 
export default UsersCardInfo;