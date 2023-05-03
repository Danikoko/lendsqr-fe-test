import styles from "@/styles/layouts/dashboard.module.scss";
import Image from "next/image";
import searchIcon from "../../../../public/assets/icons/search.svg";
import notificationIcon from "../../../../public/assets/icons/notification-bell.svg";
import profileImage from "../../../../public/assets/images/dashboard/profile-image.svg";
import dropdownCaret from "../../../../public/assets/icons/dropdown-caret.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faBars,
    faXmark
} from "@fortawesome/free-solid-svg-icons";

const TopSection = ({logo, showingMenu, setShowingMenu}: any) => {
    return (
        <div className={`${styles.topSection} py-4 px-2 lg:py-8 lg:px-8 fixed w-full z-10`}>
            <div className="flex flex-wrap">
                <div className="w-1/2 lg:w-1/6 self-center">
                    <Image src={logo} alt="Lendsqr Logo" />
                </div>
                <div className="lg:w-2/6 hidden lg:block self-center">
                    <div className="ml-24">
                        <div className="w-full relative">
                            <input className={`${styles.searchInput} w-full`} type="text" placeholder="Search for anything" />
                            <div className="absolute top-0 right-0">
                                <button className={`${styles.searchButton}`}>
                                    <Image className="mx-auto" src={searchIcon} alt="Search icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.rightHandSection} hidden lg:block w-3/4 lg:w-2/6 ml-auto self-center`}>
                    <div className="flex flex-wrap">
                        <div className="w-2/6 hidden lg:block self-center text-center ml-auto">
                            <Link className={styles.link} href="#">
                                Docs
                            </Link>
                        </div>
                        <div className="w-1/6 self-center ml-auto lg:ml-0">
                            <Image className="ml-auto lg:ml-0 w-1/3 lg:w-auto" src={notificationIcon} alt="Notifications Icon" />
                        </div>
                        <div className="w-3/6 lg:w-2/6">
                            <div className="flex flex-wrap cursor-pointer">
                                <div className="w-1/3">
                                    <Image className="lg:w-full w-3/4 ml-auto" src={profileImage} alt="Profile Image" />
                                </div>
                                <div className="w-2/3 self-center">
                                    <div className="md:text-center text-right">
                                        <span>Adedeji</span>
                                        <Image className="inline ml-1" src={dropdownCaret} alt="Dropdown Icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block lg:hidden w-1/4 ml-auto text-right">
                    <FontAwesomeIcon 
                    onClick={() => setShowingMenu(!showingMenu)} 
                    className={styles.mainBlueColor} 
                    icon={showingMenu ? faXmark : faBars} 
                    size="1x" 
                    />
                </div>
            </div>
        </div>
    );
}
 
export default TopSection;