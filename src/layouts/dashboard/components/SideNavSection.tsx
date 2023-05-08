import layoutStyles from "@/styles/layouts/dashboard.module.scss";
import Image from "next/image";
import briefcase from "../../../../public/assets/icons/sidemenu/briefcase.svg";
import home from "../../../../public/assets/icons/sidemenu/home.svg";
import dropdownCaretAlt from "../../../../public/assets/icons/dropdown-caret-alt.svg";
import __CONSTANTS__ from "@/utils/constants";

const {
    customersSideNavLinks,
    businessesSideNavLinks,
    settingsSideNavLinks
} = __CONSTANTS__;

const SideNavSection = ({showingMenu}: any) => {
    return (
        <>
            {
                showingMenu
                &&
                <div className={`${layoutStyles.sideNav} block lg:hidden w-full lg:w-1/5 bg-white`}>
                    <ul className="my-4">
                        <li className={`${layoutStyles.sideNavList} ${layoutStyles.sideNavActive} px-8 py-5 cursor-pointer`}>
                            <div className="flex flex-wrap">
                                <div className="w-1/12 self-center">
                                    <div>
                                        <Image 
                                        src={briefcase}
                                        alt="Briefcase Icon"
                                        />
                                    </div>
                                </div>
                                <div className="w-11/12">
                                    <div className="ml-2 self-center flex">
                                        <span className={layoutStyles.mainBlueColor}>
                                            Switch Organization
                                        </span>
                                        <Image
                                        src={dropdownCaretAlt}
                                        alt="Dropdown Icon"
                                        className="ml-2 inline-block"
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={`${layoutStyles.sideNavList} px-8 py-5 cursor-pointer`}>
                            <div className="flex flex-wrap">
                                <div className="w-1/12 self-center">
                                    <div>
                                        <Image 
                                        src={home}
                                        alt="Home Icon"
                                        />
                                    </div>
                                </div>
                                <div className="w-11/12">
                                    <div className="ml-2 self-center flex">
                                        <span className={layoutStyles.mainBlueColor}>
                                            Dashboard
                                        </span>
                                        {/* <Image
                                        src={dropdownCaretAlt}
                                        alt="Dropdown Icon"
                                        className="ml-2 inline-block"
                                        /> */}
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <span className={`${layoutStyles.mainBlueColor} px-8 text-xs`}>CUSTOMERS</span>
                        <ul className="mt-2 mb-4">
                            {
                                customersSideNavLinks.map((link: SideNavLink, index: number) => (
                                    <li 
                                    className={`${ link.name.toLowerCase() === 'users' ? layoutStyles.sideNavLinkActive : layoutStyles.sideNavLinkList } px-8 py-3 cursor-pointer`}
                                    key={index}
                                    >
                                        <div className="flex flex-wrap">
                                            <div className="w-1/12 self-center">
                                                <div>
                                                    <Image 
                                                    src={link.icon}
                                                    alt={link.icon}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-11/12">
                                                <div className="ml-2 self-center flex">
                                                    <span className={layoutStyles.mainBlueColor}>
                                                        {link.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <span className={`${layoutStyles.mainBlueColor} px-8 text-xs`}>BUSINESSES</span>
                        <ul className="mt-2 mb-4">
                            {
                                businessesSideNavLinks.map((link: SideNavLink, index: number) => (
                                    <li 
                                    className={`${layoutStyles.sideNavLinkList} px-8 py-3 cursor-pointer`}
                                    key={index}
                                    >
                                        <div className="flex flex-wrap">
                                            <div className="w-1/12 self-center">
                                                <div>
                                                    <Image 
                                                    src={link.icon}
                                                    alt={link.icon}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-11/12">
                                                <div className="ml-2 self-center flex">
                                                    <span className={layoutStyles.mainBlueColor}>
                                                        {link.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <span className={`${layoutStyles.mainBlueColor} px-8 text-xs`}>SETTINGS</span>
                        <ul className="mt-2 mb-4">
                            {
                                settingsSideNavLinks.map((link: SideNavLink, index: number) => (
                                    <li 
                                    className={`${layoutStyles.sideNavLinkList} px-8 py-3 cursor-pointer`}
                                    key={index}
                                    >
                                        <div className="flex flex-wrap">
                                            <div className="w-1/12 self-center">
                                                <div>
                                                    <Image 
                                                    src={link.icon}
                                                    alt={link.icon}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-11/12">
                                                <div className="ml-2 self-center flex">
                                                    <span className={layoutStyles.mainBlueColor}>
                                                        {link.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            }
            <div className={`${layoutStyles.sideNav} hidden lg:block w-full lg:w-1/5 bg-white fixed`}>
                <ul className="my-4">
                    <li className={`${layoutStyles.sideNavList} ${layoutStyles.sideNavActive} px-8 py-5 cursor-pointer`}>
                        <div className="flex flex-wrap">
                            <div className="w-1/12 self-center">
                                <div>
                                    <Image 
                                    src={briefcase}
                                    alt="Briefcase Icon"
                                    />
                                </div>
                            </div>
                            <div className="w-11/12">
                                <div className="ml-2 self-center flex">
                                    <span className={layoutStyles.mainBlueColor}>
                                        Switch Organization
                                    </span>
                                    <Image
                                    src={dropdownCaretAlt}
                                    alt="Dropdown Icon"
                                    className="ml-2 inline-block"
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={`${layoutStyles.sideNavList} px-8 py-5 cursor-pointer`}>
                        <div className="flex flex-wrap">
                            <div className="w-1/12 self-center">
                                <div>
                                    <Image 
                                    src={home}
                                    alt="Home Icon"
                                    />
                                </div>
                            </div>
                            <div className="w-11/12">
                                <div className="ml-2 self-center flex">
                                    <span className={layoutStyles.mainBlueColor}>
                                        Dashboard
                                    </span>
                                    {/* <Image
                                    src={dropdownCaretAlt}
                                    alt="Dropdown Icon"
                                    className="ml-2 inline-block"
                                    /> */}
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div>
                    <span className={`${layoutStyles.mainBlueColor} px-8 text-xs`}>CUSTOMERS</span>
                    <ul className="mt-2 mb-4">
                        {
                            customersSideNavLinks.map((link: SideNavLink, index: number) => (
                                <li 
                                className={`${ link.name.toLowerCase() === 'users' ? layoutStyles.sideNavLinkActive : layoutStyles.sideNavLinkList } px-8 py-3 cursor-pointer`}
                                key={index}
                                >
                                    <div className="flex flex-wrap">
                                        <div className="w-1/12 self-center">
                                            <div>
                                                <Image 
                                                src={link.icon}
                                                alt={link.icon}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-11/12">
                                            <div className="ml-2 self-center flex">
                                                <span className={layoutStyles.mainBlueColor}>
                                                    {link.name}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <span className={`${layoutStyles.mainBlueColor} px-8 text-xs`}>BUSINESSES</span>
                    <ul className="mt-2 mb-4">
                        {
                            businessesSideNavLinks.map((link: SideNavLink, index: number) => (
                                <li 
                                className={`${layoutStyles.sideNavLinkList} px-8 py-3 cursor-pointer`}
                                key={index}
                                >
                                    <div className="flex flex-wrap">
                                        <div className="w-1/12 self-center">
                                            <div>
                                                <Image 
                                                src={link.icon}
                                                alt={link.icon}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-11/12">
                                            <div className="ml-2 self-center flex">
                                                <span className={layoutStyles.mainBlueColor}>
                                                    {link.name}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <span className={`${layoutStyles.mainBlueColor} px-8 text-xs`}>SETTINGS</span>
                    <ul className="mt-2 mb-4">
                        {
                            settingsSideNavLinks.map((link: SideNavLink, index: number) => (
                                <li 
                                className={`${layoutStyles.sideNavLinkList} px-8 py-3 cursor-pointer`}
                                key={index}
                                >
                                    <div className="flex flex-wrap">
                                        <div className="w-1/12 self-center">
                                            <div>
                                                <Image 
                                                src={link.icon}
                                                alt={link.icon}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-11/12">
                                            <div className="ml-2 self-center flex">
                                                <span className={layoutStyles.mainBlueColor}>
                                                    {link.name}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>

    );
}
 
export default SideNavSection;