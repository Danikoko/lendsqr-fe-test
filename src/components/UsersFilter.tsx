import layoutStyles from "@/styles/layouts/dashboard.module.scss";
import componentStyles from "@/styles/components/usersfilter.module.scss";
import dropdownCaretIcon from "../../public/assets/icons/dropdown-caret-alt.svg";
import calendarIcon from "../../public/assets/icons/calendar.svg";
import Image from "next/image";
import { useMemo } from "react";
const UsersFilter = ({ 
    filters, 
    allOrganizations,
    handleOrganizationFilter,
    handleUsernameFilter,
    handleEmailFilter,
    handleDateFilter,
    handlePhoneNumberFilter,
    handleStatusFilter,
    usersFilterClass
}: any) => {
    
    const statuses = useMemo(() => [
        'Active',
        'Inactive',
        'Pending',
        'Blacklisted'
    ], []);

    return (
        <div className={`w-1/4 absolute top-12 ${usersFilterClass}`}>
            <div className={`${componentStyles.card} px-5 py-8`}>
                <div className="flex flex-wrap">
                    <div className="w-full mb-1">
                        <span>Organization</span>
                    </div>
                    <div className="w-full mb-3">
                        <div className={`${componentStyles.formGroup} z-0 inline-block relative`}>
                            <select placeholder="Select" onChange={handleOrganizationFilter} className={`w-full cursor-pointer relative z-10 py-2 px-3 appearance-none`}>
                                <option value={0}>All organizations</option>
                                {
                                    allOrganizations.map((organization: any) => <option value={organization}>{organization}</option>)
                                }
                            </select>
                            <Image 
                            className="inline-block z-0 absolute top-3 right-2"
                            src={dropdownCaretIcon}
                            alt="Dropdown Icon"
                            />
                        </div>
                    </div>

                    <div className="w-full mb-1">
                        <span>Username</span>
                    </div>
                    <div className="w-full mb-3">
                        <div className={`${componentStyles.formGroup} z-0 w-full inline-block relative`}>
                            <input placeholder="Username" type="text" onChange={handleStatusFilter} className={`w-full relative z-10 py-2 px-3 appearance-none`} />
                        </div>
                    </div>

                    <div className="w-full mb-1">
                        <span>Email</span>
                    </div>
                    <div className="w-full mb-3">
                        <div className={`${componentStyles.formGroup} z-0 w-full inline-block relative`}>
                            <input placeholder="Email" type="email" onChange={handleEmailFilter} className={`w-full relative z-10 py-2 px-3 appearance-none`} />
                        </div>
                    </div>

                    <div className="w-full mb-1">
                        <span>Date</span>
                    </div>
                    <div className="w-full mb-3">
                        <div className={`${componentStyles.formGroup} z-0 w-full inline-block relative`}>
                            <input placeholder="Date" type="date" onChange={handleDateFilter} className={`w-full cursor-pointer relative z-10 py-2 px-3 appearance-none`} />
                            <Image 
                            className="inline-block z-0 absolute top-3 right-2"
                            src={calendarIcon}
                            alt="Dropdown Icon"
                            />
                        </div>
                    </div>

                    <div className="w-full mb-1">
                        <span>Phone Number</span>
                    </div>
                    <div className="w-full mb-3">
                        <div className={`${componentStyles.formGroup} z-0 w-full inline-block relative`}>
                            <input placeholder="Phone Number" type="text" onChange={handlePhoneNumberFilter} className={`w-full relative z-10 py-2 px-3 appearance-none`} />
                        </div>
                    </div>

                    <div className="w-full mb-1">
                        <span>Status</span>
                    </div>
                    <div className="w-full mb-10">
                        <div className={`${componentStyles.formGroup} z-0 w-full inline-block relative`}>
                            <select placeholder="Select" onChange={handleStatusFilter} className={`w-full cursor-pointer relative z-10 py-2 px-3 appearance-none`}>
                                <option value={0}>All statuses</option>
                                {
                                    statuses.map((status: any) => <option value={status}>{status}</option>)
                                }
                            </select>
                            <Image 
                            className="inline-block z-0 absolute top-3 right-2"
                            src={dropdownCaretIcon}
                            alt="Dropdown Icon"
                            />
                        </div>
                    </div>
                    <div className="w-full mb-3">
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <button className={`${componentStyles.resetButton} w-full`}>
                                    Reset
                                </button>
                            </div>
                            <div>
                                <button className={`${componentStyles.filterButton} w-full`}>
                                    Filter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default UsersFilter;