import layoutStyles from '@/styles/layouts/dashboard.module.scss';
import { useMemo } from "react";

const BioData = ({ userDetails, sortIncome, sortAmount }: any) => {
    
    return (
        <div className={`${layoutStyles.card} p-8 pt-4`}>
            <div className="pb-8 ">
                <div className="border-b-2 mt-4">
                    <h4 className="mb-6">Personal Information</h4>
                    <div className="grid grid-cols-1 gap-2 lg:gap-0 lg:grid-cols-5">
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Full Name</span>
                            <span className="block text-sm">{`${userDetails.profile.firstName} ${userDetails.profile.lastName}`}</span>
                        </div>
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Phone Number</span>
                            <span className="block text-sm">{userDetails.phoneNumber}</span>
                        </div>
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Email Address</span>
                            <span className="block text-sm hyphens-auto">{userDetails.email}</span>
                        </div>
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">BVN</span>
                            <span className="block text-sm">{userDetails.profile.bvn}</span>
                        </div>
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Gender</span>
                            <span className="block text-sm">{userDetails.profile.gender}</span>
                        </div>
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Marital Status</span>
                            <span className="block text-sm">Single & Searching</span>
                        </div>
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Children</span>
                            <span className="block text-sm">None</span>
                        </div>
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Type of Residence</span>
                            <span className="block text-sm">Parent's Apartment</span>
                        </div>
                    </div>
                </div>
                <div className="border-b-2 mt-4">
                    <h4 className="mb-6">Education and Employment</h4>
                    <div className="grid grid-cols-1 gap-2 lg:gap-0 lg:grid-cols-5">
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Level of Education</span>
                            <span className="block text-sm">{userDetails.education.level}</span>
                        </div>
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Employment Status</span>
                            <span className="block text-sm">{userDetails.education.employmentStatus}</span>
                        </div>
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Sector of Employement</span>
                            <span className="block text-sm">{userDetails.education.sector}</span>
                        </div>
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Duration of Employment</span>
                            <span className="block text-sm">{userDetails.education.sector}</span>
                        </div>
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Office Email</span>
                            <span className="block text-sm">{userDetails.education.officeEmail}</span>
                        </div>
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Monthly Income</span>
                            <span className="block text-sm">{sortIncome(userDetails.education.monthlyIncome)}</span>
                        </div>
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Loan Repayment</span>
                            <span className="block text-sm">{sortAmount(userDetails.education.loanRepayment)}</span>
                        </div>
                    </div>
                </div>
                <div className="border-b-2 mt-4">
                    <h4 className="mb-6">Socials</h4>
                    <div className="grid grid-cols-1 gap-2 lg:gap-0 lg:grid-cols-5">
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Twitter</span>
                            <span className="block text-sm">{userDetails.socials.twitter}</span>
                        </div>
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Facebook</span>
                            <span className="block text-sm">{userDetails.socials.facebook}</span>
                        </div>
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Instagram</span>
                            <span className="block text-sm">{userDetails.socials.instagram}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h4 className="mb-6">Guarantor</h4>
                    <div className="grid grid-cols-1 gap-2 lg:gap-0 lg:grid-cols-5">
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Full Name</span>
                            <span className="block text-sm">{`${userDetails.guarantor.firstName} ${userDetails.guarantor.lastName}`}</span>
                        </div>
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Phone Number</span>
                            <span className="block text-sm">{userDetails.guarantor.phoneNumber}</span>
                        </div>
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Email Address</span>
                            <span className="block text-sm">oshionefa@gmail.com</span>
                        </div>
                        <div className="mb-4">
                            <span className="uppercase block opacity-50 text-xs mb-2">Relationship</span>
                            <span className="block text-sm">Recruiter/Helper 😊</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default BioData;