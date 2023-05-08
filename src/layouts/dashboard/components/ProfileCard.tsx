import layoutStyles from '@/styles/layouts/dashboard.module.scss';
import Image from "next/image";
import avatarImage from "../../../../public/assets/icons/avatar.svg";
import fullStarIcon from "../../../../public/assets/icons/fullStar.svg";
import emptyStarIcon from "../../../../public/assets/icons/emptyStar.svg";
import __CONSTANTS__ from "@/utils/constants";
import { useState } from "react";

const ProfileCard = ({ updateActiveView, activeView, userDetails, sortAmount }: any) => {
    const { profileLinks } = __CONSTANTS__; 
    return (
        <div className={`${layoutStyles.card} pt-8 px-5 mb-4 lg:mb-8`}>
            <div className="pb-8 lg:pb-14">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-5/12">
                        <div className="flex flex-wrap">
                            <div className="w-2/3 flex">
                                {
                                    // userDetails.profile.avatar
                                    // ? <img src={userDetails.profile.avatar} alt="Profile Avatar" />
                                    // : <Image
                                    //     className="inline-block"
                                    //     src={avatarImage}
                                    //     alt="User Avatar"
                                    //     />
                                }
                                <Image
                                className="inline-block"
                                src={avatarImage}
                                alt="User Avatar"
                                />
                                <div className={`${layoutStyles.mainBlueColor} inline-block ml-4 self-center`}>
                                    <h4 className="text-xl">{`${userDetails.profile.firstName} ${userDetails.profile.lastName}`}</h4>
                                    <span className="text-sm">{userDetails.userName}</span>
                                </div>
                            </div>
                            <div className="w-1/3 self-center text-center">
                                <div className={`${layoutStyles.mainBlueColor} border-r-2 border-l-2 p-4`}>
                                    <span>User&apos;s Tier</span>
                                    <div>
                                        <Image
                                        className="inline-block mr-1"
                                        src={fullStarIcon}
                                        alt="Full Star"
                                        />
                                        <Image
                                        className="inline-block mr-1"
                                        src={emptyStarIcon}
                                        alt="Empty Star"
                                        />
                                        <Image
                                        className="inline-block mr-1"
                                        src={emptyStarIcon}
                                        alt="Empty Star"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-5 lg:mt-0 lg:w-7/12 self-center text-center lg:text-left">
                        <div className={`${layoutStyles.mainBlueColor} inline-block lg:ml-10 self-center`}>
                            <h4 className="text-xl">{sortAmount(userDetails.accountBalance)}</h4>
                            <span className="text-sm">{userDetails.accountNumber}/Providus Bank</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-6">
                {
                    profileLinks.map((link: string, index: number) => (
                        <div 
                        onClick={() => updateActiveView(link)}
                        key={`link-${index}`}
                        className={`${layoutStyles.profileLink} ${link === activeView && layoutStyles.profileLinkActive} inline-block py-2 text-center cursor-pointer transition-colors duration-200`}
                        >
                            {link}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default ProfileCard;