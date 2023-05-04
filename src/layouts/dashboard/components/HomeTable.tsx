import layoutStyles from '../../../styles/layouts/dashboard.module.scss';
import filterIcon from "../../../../public/assets/icons/filter.svg";
import dropdownCaretIcon from "../../../../public/assets/icons/dropdown-caret-alt.svg";
import moreVerticalIcon from "../../../../public/assets/icons/moreVertical.svg";
import previousCaretIcon from "../../../../public/assets/icons/previousCaret.svg";
import nextCaretIcon from "../../../../public/assets/icons/nextCaret.svg";
import Image from "next/image";
import Badge from "@/components/Badge";
import { useEffect, useMemo, useState } from "react";
import __CONSTANTS__ from "@/utils/constants";

const HomeTable = ({users}: any) => {

    const { getSubsetAroundValue } = __CONSTANTS__;

    /** Component state */
    const [state, setState] = useState({
        showingCount: 10,
        paginateCount: 1
    });
    /** Component state */

    const filteredUsers = useMemo((): any[] => {
        return users.slice((state.showingCount * state.paginateCount) - state.showingCount, state.showingCount * state.paginateCount)
    }, [
        users,
        state.showingCount,
        state.paginateCount
    ]);

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

    /** Methods */
    const handlePagination = (paginationNumber: number) => setState({
        ...state,
        paginateCount: paginationNumber
    });

    const handleShowingCount = (e: any) => {
        setState({
            ...state,
            showingCount: e.target.value,
            paginateCount: 1
        });
    };

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
    /** Methods */
    return (
        <>
        <div className={`${layoutStyles.card} flex flex-col overflow-x-auto`}>
            <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 pr-4 pl-0">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="font-medium">
                                <tr>
                                    <th scope="col" className={`${layoutStyles.textGrey} px-6 py-4 uppercase`}>Organization <Image className="inline-block ml-2 mb-1 cursor-pointer" src={filterIcon} alt="Filter Icon" /> </th>
                                    <th scope="col" className={`${layoutStyles.textGrey} px-6 py-4 uppercase`}>Username <Image className="inline-block ml-2 mb-1 cursor-pointer" src={filterIcon} alt="Filter Icon" /></th>
                                    <th scope="col" className={`${layoutStyles.textGrey} px-6 py-4 uppercase`}>Email <Image className="inline-block ml-2 mb-1 cursor-pointer" src={filterIcon} alt="Filter Icon" /></th>
                                    <th scope="col" className={`${layoutStyles.textGrey} px-6 py-4 uppercase`}>Phone Number <Image className="inline-block ml-2 mb-1 cursor-pointer" src={filterIcon} alt="Filter Icon" /></th>
                                    <th scope="col" className={`${layoutStyles.textGrey} px-6 py-4 uppercase`}>Date Added <Image className="inline-block ml-2 mb-1 cursor-pointer" src={filterIcon} alt="Filter Icon" /></th>
                                    <th scope="col" className={`${layoutStyles.textGrey} px-6 py-4 uppercase`}>Status <Image className="inline-block ml-2 mb-1 cursor-pointer" src={filterIcon} alt="Filter Icon" /></th>
                                    <th scope="col" className="px-2 py-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredUsers.map((user: any, index: number) => (
                                        <tr className="" key={index}>
                                            <td className="whitespace-nowrap px-6 py-4">{user.orgName}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{user.userName}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{user.phoneNumber}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{formatDate(user.createdAt)}</td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <Badge 
                                                status={1}
                                                />
                                            </td>
                                            <td className="whitespace-nowrap">
                                                <Image 
                                                className="cursor-pointer"
                                                src={moreVerticalIcon}
                                                alt="More Icon"
                                                />
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
                        <div className={`${layoutStyles.caretBlock} inline-block ${state.paginateCount !== paginationMaxNumber && 'cursor-pointer'} relative p-1 ml-2`}>
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
                            onClick={() => state.paginateCount !== 1 && handlePagination(1)}
                            src={nextCaretIcon}
                            alt="Previous Caret"
                            />
                        </div>
                        <div className={`${layoutStyles.caretBlock} inline-block ${state.paginateCount !== 1 && 'cursor-pointer'} p-1 ml-2`}>
                            <Image
                            className={`${layoutStyles.invertImage} ${state.paginateCount === 1 && 'opacity-30'}`}
                            onClick={() => state.paginateCount !== 1 && handlePagination(state.paginateCount-1)}
                            src={nextCaretIcon}
                            alt="Previous Caret"
                            />
                        </div>
                        {
                            paginationNumbers.map((number: number, index: number) => (
                                <div 
                                key={index} 
                                onClick={() => handlePagination(number)}
                                className={`${number === state.paginateCount && layoutStyles.activeNumber} cursor-pointer inline-block ml-2`}>
                                    {number}
                                </div>
                            ))
                        }
                        <div className={`${layoutStyles.caretBlock} inline-block ${state.paginateCount !== paginationMaxNumber && 'cursor-pointer'} p-1 ml-2`}>
                            <Image
                            className={`${state.paginateCount === paginationMaxNumber && 'opacity-30'}`}
                            onClick={() => state.paginateCount !== paginationMaxNumber && handlePagination(state.paginateCount+1)}
                            src={nextCaretIcon}
                            alt="Next Caret"
                            />
                        </div>
                        <div className={`${layoutStyles.caretBlock} inline-block ${state.paginateCount !== paginationMaxNumber && 'cursor-pointer'} relative p-1 ml-2`}>
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
                            onClick={() => state.paginateCount !== paginationMaxNumber && handlePagination(paginationMaxNumber)}
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