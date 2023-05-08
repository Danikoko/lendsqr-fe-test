import layoutStyles from '../../../styles/layouts/dashboard.module.scss';
import filterIcon from "../../../../public/assets/icons/filter.svg";
import dropdownCaretIcon from "../../../../public/assets/icons/dropdown-caret-alt.svg";
import moreVerticalIcon from "../../../../public/assets/icons/moreVertical.svg";
import nextCaretIcon from "../../../../public/assets/icons/nextCaret.svg";
import eyeIcon from "../../../../public/assets/icons/eye.svg";
import blacklistIcon from "../../../../public/assets/icons/blacklist.svg";
import activateIcon from "../../../../public/assets/icons/activate.svg";
import Image from "next/image";
import Badge from "@/components/Badge";
import { useEffect, useMemo, useState } from "react";
import __CONSTANTS__ from "@/utils/constants";
import UsersFilter from "@/components/UsersFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const HomeTable = ({users}: any) => {

    const { getSubsetAroundValue } = __CONSTANTS__;

    /** Component state */
    const [state, setState] = useState({
        showingCount: 10 as number,
        paginateCount: 1 as number,
        filters: {
            showing: false as boolean,
            organization: '' as string,
            username: '' as string,
            email: '' as string,
            date: '' as string,
            phoneNumber: '' as string,
            status: '' as string
        },
        usersFilterClass: '' as string,
        filteredUsers: [] as any[]
    });
    /** Component state */

    const paginationMaxNumber = useMemo((): number => Math.ceil(users.length/state.showingCount), [
        users,
        state.showingCount
    ]);

    const paginationNumbers = useMemo((): number[] => {
        let allNumbers: any = [];
        for (let num = 1; num <= paginationMaxNumber; num++) {
            allNumbers.splice(allNumbers.length, 0, num);
        }
        return getSubsetAroundValue(allNumbers, state.paginateCount);
    }, [
        state.paginateCount,
        paginationMaxNumber
    ]);

    const allOrganizations = useMemo((): string[] => {
        const organizationsNames: string[] = [];
        users.forEach((user: any) => {
            if (organizationsNames.indexOf(user.orgName) === -1) {
                organizationsNames.push(user.orgName);
            }
        });
        return organizationsNames;
    }, [users]);

    /** Methods */

    const handleShowingCount = (e: any) => {
        setState({
            ...state,
            showingCount: e.target.value,
            paginateCount: 1
        });
    };

    const handleOrganizationFilter = (e: any) => setState({
        ...state,
        filters: {
            ...state.filters,
            organization: e.target.value
        }
    });

    const handleUsernameFilter = (e: any) => setState({
        ...state,
        filters: {
            ...state.filters,
            username: e.target.value
        }
    });

    const handleEmailFilter = (e: any) => setState({
        ...state,
        filters: {
            ...state.filters,
            email: e.target.value
        }
    });

    const handleDateFilter = (e: any) => setState({
        ...state,
        filters: {
            ...state.filters,
            date: e.target.value
        }
    });

    const handlePhoneNumberFilter = (e: any) => setState({
        ...state,
        filters: {
            ...state.filters,
            phoneNumber: e.target.value
        }
    });

    const handleStatusFilter = (e: any) => setState({
        ...state,
        filters: {
            ...state.filters,
            status: e.target.value
        }
    });

    const handleFilterDisplay = (show: boolean, className: string) => {
        setState({
            ...state,
            filters: {
                ...state.filters,
                showing: show
            },
            usersFilterClass: className
        });
    }

    const formatDate = (dateParam: string) => {
        const date = new Date(dateParam);
        const formattedDate = date.toLocaleString('en-US', { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        }).replace(' at', '');
        return formattedDate;
    };

    const paginateUsers = (paginateNumber: number) => {
        const newUsers: any[] = users.slice((state.showingCount * paginateNumber) - state.showingCount, state.showingCount * paginateNumber);
        const filteredUsers: any[] = newUsers.map((user: any) => {
            return {
                ...user,
                showingOptions: false
            }
        });
        setState({
            ...state,
            paginateCount: paginateNumber,
            filteredUsers
        });
    }

    const showOptions = (index: number) => {
        const newFilteredUsers: any[] = [...state.filteredUsers];
        newFilteredUsers.forEach((user: any, userIndex: number) => {
            userIndex !== index 
            ? user.showingOptions = false
            : (
                user.showingOptions === true
                ? user.showingOptions = false
                : user.showingOptions = true
            )
        });
        setState({
            ...state,
            filteredUsers: newFilteredUsers
        });
    }
    /** Methods */
    useEffect(() => paginateUsers(state.paginateCount), [users])
    return (
        <>
        <div className={`${layoutStyles.card} flex flex-col overflow-x-auto`}>
            <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 pr-4 pl-0">
                    <div className="overflow-x-auto relative">
                        {
                            state.filters.showing
                            &&
                            <div className="flex flex-wrap relative">
                                <UsersFilter
                                filters={state.filters}
                                allOrganizations={allOrganizations}
                                handleOrganizationFilter={handleOrganizationFilter}
                                handleUsernameFilter={handleUsernameFilter}
                                handleEmailFilter={handleEmailFilter}
                                handleDateFilter={handleDateFilter}
                                handlePhoneNumberFilter={handlePhoneNumberFilter}
                                handleStatusFilter={handleStatusFilter}
                                usersFilterClass={state.usersFilterClass}
                                />
                            </div>
                        }
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="font-medium">
                                <tr>
                                    <th scope="col" className={`${layoutStyles.textGrey} px-6 py-4 uppercase`}>Organization <Image onClick={() => handleFilterDisplay(!state.filters.showing, 'left-6')} className="inline-block ml-2 mb-1 cursor-pointer" src={filterIcon} alt="Filter Icon" /> </th>
                                    <th scope="col" className={`${layoutStyles.textGrey} px-6 py-4 uppercase`}>Username <Image onClick={() => handleFilterDisplay(!state.filters.showing, 'left-56')} className="inline-block ml-2 mb-1 cursor-pointer" src={filterIcon} alt="Filter Icon" /></th>
                                    <th scope="col" className={`${layoutStyles.textGrey} px-6 py-4 uppercase`}>Email <Image onClick={() => handleFilterDisplay(!state.filters.showing, 'left-56')} className="inline-block ml-2 mb-1 cursor-pointer" src={filterIcon} alt="Filter Icon" /></th>
                                    <th scope="col" className={`${layoutStyles.textGrey} px-6 py-4 uppercase`}>Phone Number <Image onClick={() => handleFilterDisplay(!state.filters.showing, 'left-56')} className="inline-block ml-2 mb-1 cursor-pointer" src={filterIcon} alt="Filter Icon" /></th>
                                    <th scope="col" className={`${layoutStyles.textGrey} px-6 py-4 uppercase`}>Date Added <Image onClick={() => handleFilterDisplay(!state.filters.showing, 'left-56')} className="inline-block ml-2 mb-1 cursor-pointer" src={filterIcon} alt="Filter Icon" /></th>
                                    <th scope="col" className={`${layoutStyles.textGrey} px-6 py-4 uppercase`}>Status <Image onClick={() => handleFilterDisplay(!state.filters.showing, 'left-56')} className="inline-block ml-2 mb-1 cursor-pointer" src={filterIcon} alt="Filter Icon" /></th>
                                    <th scope="col" className="px-2 py-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.filteredUsers.map((user: any, index: number) => (
                                        <tr className={index < (state.filteredUsers.length - 1) ? layoutStyles.tRow : ''} key={index}>
                                            <td className="whitespace-nowrap px-6 py-4">{user.orgName}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{user.userName}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{user.phoneNumber}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{formatDate(user.createdAt)}</td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <Badge 
                                                status={new Date(user.lastActiveDate) > new Date(user.createdAt)}
                                                />
                                            </td>
                                            <td className="whitespace-nowrap group relative">
                                                {
                                                    user.showingOptions
                                                    ? (
                                                        <FontAwesomeIcon 
                                                        onClick={() => showOptions(index)}
                                                        className={`${layoutStyles.textGrey} cursor-pointer`} 
                                                        icon={faTimes} 
                                                        />
                                                    )
                                                    : (
                                                        <Image 
                                                        onClick={() => showOptions(index)}
                                                        className="cursor-pointer"
                                                        src={moreVerticalIcon}
                                                        alt="More Icon"
                                                        />
                                                    )
                                                }
                                                <div 
                                                className={`
                                                    ${layoutStyles.card} 
                                                    ${layoutStyles.dropdownCard} 
                                                    ${user.showingOptions ? 'group-hover:opacity-100' : 'opacity-0 hidden'} 
                                                    z-10 
                                                    transition-opacity 
                                                    py-1 
                                                    absolute 
                                                    right-0 
                                                    mx-auto
                                                `}>
                                                    <ul>
                                                        <li className="block cursor-pointer">
                                                            <div className="flex">
                                                                <Link href={`/${user.id}`} className="px-4 py-2 w-full">
                                                                    <Image 
                                                                    className="inline-block mr-2"
                                                                    src={eyeIcon}
                                                                    alt="View Details Icon"
                                                                    />
                                                                    <span className="self-center">View Details</span>
                                                                </Link>
                                                            </div>
                                                        </li>
                                                        <li className="block cursor-pointer px-4 py-2">
                                                            <div className="flex">
                                                                <Image 
                                                                className="inline-block mr-2"
                                                                src={blacklistIcon}
                                                                alt="Blacklist User Icon"
                                                                />
                                                                <span className="self-center">Blacklist User</span>
                                                            </div>
                                                        </li>
                                                        <li className="block cursor-pointer px-4 py-2">
                                                            <div className="flex">
                                                                <Image 
                                                                className="inline-block mr-2"
                                                                src={activateIcon}
                                                                alt="Activate User Icon"
                                                                />
                                                                <span className="self-center">Activate User</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className="my-8">
            <div className="flex flex-wrap px-2">
                <div className="w-full lg:w-1/2 text-right lg:text-left">
                    <div className={`${layoutStyles.textGrey} inline-block`}>
                        Showing 
                        <div className={`${layoutStyles.showingFilter} inline-block relative mx-2`}>
                            <select defaultValue={state.showingCount} onChange={handleShowingCount} className={`${layoutStyles.mainBlueColor} w-full cursor-pointer relative z-10 py-2 px-3 font-bold appearance-none`}>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                                <option value={200}>200</option>
                                <option value={500}>500</option>
                                <option value={1000}>1000</option>
                            </select>
                            <Image 
                            className="inline-block z-0 absolute top-3 right-2"
                            src={dropdownCaretIcon}
                            alt="Dropdown Icon"
                            />
                        </div>
                        out of {users.length}
                    </div>
                </div>
                <div className={`${layoutStyles.paginationNumbers} w-full lg:w-1/2 text-right self-center mt-4 lg:mt-0`}>
                    <div className="inline-flex self-center">
                        <div onClick={() => state.paginateCount !== 1 && paginateUsers(1)} className={`${layoutStyles.caretBlock} inline-block ${state.paginateCount !== paginationMaxNumber && 'cursor-pointer'} relative p-1 ml-2`}>
                            <Image
                            className={`${layoutStyles.invertImage} ${state.paginateCount === 1 && 'opacity-30'} absolute left-1`}
                            src={nextCaretIcon}
                            alt="Previous Caret"
                            />
                            <Image
                            className={`${layoutStyles.invertImage} ${state.paginateCount === 1 && 'opacity-30'} absolute left-2`}
                            src={nextCaretIcon}
                            alt="Previous Caret"
                            />
                            <Image
                            className={`${layoutStyles.invertImage} opacity-0`}
                            src={nextCaretIcon}
                            alt="Previous Caret"
                            />
                        </div>
                        <div onClick={() => state.paginateCount !== 1 && paginateUsers(state.paginateCount-1)} className={`${layoutStyles.caretBlock} inline-block ${state.paginateCount !== 1 && 'cursor-pointer'} p-1 ml-2`}>
                            <Image
                            className={`${layoutStyles.invertImage} ${state.paginateCount === 1 && 'opacity-30'}`}
                            src={nextCaretIcon}
                            alt="Previous Caret"
                            />
                        </div>
                        {
                            paginationNumbers.map((number: number, index: number) => (
                                <div 
                                key={index} 
                                onClick={() => paginateUsers(number)}
                                className={`${number === state.paginateCount && layoutStyles.activeNumber} cursor-pointer inline-block ml-2`}>
                                    {number}
                                </div>
                            ))
                        }
                        <div onClick={() => state.paginateCount !== paginationMaxNumber && paginateUsers(state.paginateCount+1)} className={`${layoutStyles.caretBlock} inline-block ${state.paginateCount !== paginationMaxNumber && 'cursor-pointer'} p-1 ml-2`}>
                            <Image
                            className={`${state.paginateCount === paginationMaxNumber && 'opacity-30'}`}
                            src={nextCaretIcon}
                            alt="Next Caret"
                            />
                        </div>
                        <div onClick={() => state.paginateCount !== paginationMaxNumber && paginateUsers(paginationMaxNumber)} className={`${layoutStyles.caretBlock} inline-block ${state.paginateCount !== paginationMaxNumber && 'cursor-pointer'} relative p-1 ml-2`}>
                            <Image
                            className={`${state.paginateCount === paginationMaxNumber && 'opacity-30'} absolute left-1`}
                            src={nextCaretIcon}
                            alt="Next Caret"
                            />
                            <Image
                            className={`${state.paginateCount === paginationMaxNumber && 'opacity-30'} absolute left-2`}
                            src={nextCaretIcon}
                            alt="Next Caret"
                            />
                            <Image
                            className={`opacity-0`}
                            src={nextCaretIcon}
                            alt="Next Caret"
                            />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    );
}
 
export default HomeTable;